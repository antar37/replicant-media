const html = (body, init = {}) =>
  new Response(body, {
    ...init,
    headers: {
      "content-type": "text/html; charset=utf-8",
      ...(init.headers || {}),
    },
  });

const escapeHtml = (value) =>
  String(value || "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");

const page = ({ title, eyebrow = "replicant/contact", message, detail = "", status = 200 }) =>
  html(
    `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>${escapeHtml(title)} — Replicant Media</title>
  <style>
    :root{color-scheme:dark;--bg:#030303;--ink:#f2f2e8;--muted:#8a928c;--acid:#7cff9b;--line:#f2f2e8}
    body{margin:0;min-height:100vh;display:grid;place-items:center;background:radial-gradient(circle at 50% 10%,rgba(124,255,155,.10),transparent 32rem),#000;color:var(--ink);font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,monospace;text-shadow:0 0 10px rgba(124,255,155,.12)}
    main{width:min(760px,calc(100vw - 32px));border:2px solid var(--line);background:var(--bg);padding:32px;box-shadow:0 0 32px rgba(124,255,155,.08)}
    .eyebrow{font-size:11px;letter-spacing:.22em;text-transform:uppercase;color:var(--muted);font-weight:700}
    h1{font-size:clamp(42px,12vw,104px);line-height:.86;margin:24px 0 20px;text-transform:uppercase;letter-spacing:-.07em}
    p{line-height:1.65;color:var(--ink)}
    a{color:var(--acid);font-weight:700;text-transform:uppercase;letter-spacing:.12em;font-size:12px}
  </style>
</head>
<body><main><div class="eyebrow">// ${escapeHtml(eyebrow)}</div><h1>${escapeHtml(title)}</h1><p>${escapeHtml(message)}</p>${detail ? `<p>${escapeHtml(detail)}</p>` : ""}<p><a href="/">← Back to Replicant Media</a></p></main></body>
</html>`,
    { status }
  );

const field = (env, key, fallback) => env[`JOTFORM_FIELD_${key}`] || fallback;

function getFormValues(formData) {
  const services = formData.getAll("services").filter(Boolean).join(", ");
  return {
    name: formData.get("name") || "",
    email: formData.get("email") || "",
    company: formData.get("company") || "",
    url: formData.get("url") || "",
    services,
    budget: formData.get("budget") || "",
    timeline: formData.get("timeline") || "",
    projectBrief: formData.get("projectBrief") || "",
    bestNextStep: formData.get("bestNextStep") || "",
    websiteTrap: formData.get("websiteTrap") || "",
  };
}

function buildJotformPayload(env, values) {
  const formId = env.JOTFORM_FORM_ID;
  const payload = new URLSearchParams();

  payload.set("formID", formId);
  payload.set("simple_spc", formId);
  payload.set("submitSource", "replicant-media-site");
  payload.set("website", "");

  payload.set(field(env, "NAME", "q1_name"), values.name);
  payload.set(field(env, "EMAIL", "q2_email"), values.email);
  payload.set(field(env, "COMPANY", "q3_company"), values.company);
  payload.set(field(env, "WEBSITE", "q4_website"), values.url);
  payload.set(field(env, "SERVICES", "q5_services"), values.services);
  payload.set(field(env, "BUDGET", "q6_budget"), values.budget);
  payload.set(field(env, "TIMELINE", "q7_timeline"), values.timeline);
  payload.set(field(env, "PROJECT_BRIEF", "q8_projectBrief"), values.projectBrief);
  payload.set(field(env, "BEST_NEXT_STEP", "q9_bestNextStep"), values.bestNextStep);

  return payload;
}

async function handleContact(request, env) {
  if (request.method !== "POST") {
    return page({
      title: "Method blocked",
      message: "Use the contact form on the Replicant Media homepage.",
      status: 405,
    });
  }

  if (!env.JOTFORM_FORM_ID) {
    return page({
      title: "Form not wired yet",
      message:
        "The site form is built, but the Cloudflare Worker still needs JOTFORM_FORM_ID set before it can submit to Jotform.",
      detail: "For now, email alex@replicant.media with the project brief.",
      status: 503,
    });
  }

  const formData = await request.formData();
  const values = getFormValues(formData);

  if (values.websiteTrap) {
    return page({
      title: "Received",
      message: "Thanks. The brief was received.",
    });
  }

  if (!values.email || !values.projectBrief) {
    return page({
      title: "Missing signal",
      message: "Email and the project brief are required so there is enough context to reply usefully.",
      status: 400,
    });
  }

  const jotformResponse = await fetch(`https://submit.jotform.com/submit/${env.JOTFORM_FORM_ID}`, {
    method: "POST",
    headers: {
      "content-type": "application/x-www-form-urlencoded;charset=UTF-8",
      "user-agent": "Replicant Media Worker Contact Form",
    },
    body: buildJotformPayload(env, values),
    redirect: "manual",
  });

  if (![200, 302, 303].includes(jotformResponse.status)) {
    return page({
      title: "Transmission failed",
      message: "Jotform did not accept the brief. Please email alex@replicant.media and include the same details.",
      detail: `Jotform status: ${jotformResponse.status}`,
      status: 502,
    });
  }

  return page({
    title: "Brief received",
    message:
      "Thanks. The project brief was handed to Jotform and Replicant Media can follow up with a practical next step.",
  });
}

function handleHostedForm(env) {
  if (!env.JOTFORM_FORM_ID) {
    return Response.redirect(
      "mailto:alex@replicant.media?subject=Replicant%20Media%20project%20brief",
      302
    );
  }
  return Response.redirect(`https://form.jotform.com/${env.JOTFORM_FORM_ID}`, 302);
}

export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    if (url.hostname === "www.replicant.media") {
      url.hostname = "replicant.media";
      return Response.redirect(url.toString(), 301);
    }

    if (url.pathname === "/api/contact") {
      return handleContact(request, env);
    }

    if (url.pathname === "/api/contact/form") {
      return handleHostedForm(env);
    }

    const response = await env.ASSETS.fetch(request);
    if (response.status === 404 && request.method === "GET") {
      return env.ASSETS.fetch(new Request(new URL("/404.html", url), request));
    }
    return response;
  },
};
