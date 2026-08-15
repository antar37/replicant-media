const json = (body, init = {}) =>
  new Response(JSON.stringify(body), {
    ...init,
    headers: {
      "content-type": "application/json; charset=utf-8",
      ...(init.headers || {}),
    },
  });

const escapeHtml = (value) =>
  String(value || "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");

async function handleSubscribe(request, env) {
  if (request.method !== "POST") {
    return json({ error: "Method not allowed" }, { status: 405 });
  }

  let body;
  try {
    body = await request.json();
  } catch {
    return json({ error: "Invalid JSON" }, { status: 400 });
  }

  const {
    email,
    type = "Website",
    company = "",
    company_url = "",
  } = body || {};

  if (!email) {
    return json({ error: "Email is required" }, { status: 400 });
  }

  if (!env.TELEGRAM_BOT_KEY || !env.TELEGRAM_CHAT_ID) {
    return json(
      { error: "Telegram is not configured on the server" },
      { status: 500 }
    );
  }

  const lines = [
    "<b>📨 New Replicant Media brief</b>",
    `<b>Email:</b> ${escapeHtml(email)}`,
    `<b>Type:</b> ${escapeHtml(type)}`,
  ];
  if (company) lines.push(`<b>Company:</b> ${escapeHtml(company)}`);
  if (company_url) lines.push(`<b>Details:</b>\n${escapeHtml(company_url)}`);

  const tgResponse = await fetch(
    `https://api.telegram.org/bot${env.TELEGRAM_BOT_KEY}/sendMessage`,
    {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({
        chat_id: env.TELEGRAM_CHAT_ID,
        text: lines.join("\n"),
        parse_mode: "HTML",
        disable_web_page_preview: true,
      }),
    }
  );

  let tgBody = {};
  try {
    tgBody = await tgResponse.json();
  } catch {}

  if (!tgResponse.ok || !tgBody.ok) {
    return json(
      { error: tgBody.description || "Failed to deliver message" },
      { status: 502 }
    );
  }

  return json({ error: "", ok: true }, { status: 201 });
}

export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    if (url.hostname === "www.replicant.media") {
      url.hostname = "replicant.media";
      return Response.redirect(url.toString(), 301);
    }

    if (url.pathname === "/api/subscribe") {
      return handleSubscribe(request, env);
    }

    const response = await env.ASSETS.fetch(request);
    if (response.status === 404 && request.method === "GET") {
      return env.ASSETS.fetch(new Request(new URL("/404.html", url), request));
    }
    return response;
  },
};
