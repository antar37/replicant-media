import { NextResponse } from "next/server";

export const config = {
  matcher: "/",
};

const HOMEPAGE_MARKDOWN = `# Replicant Media

> Clear websites. Measurable growth. Useful automation.

Replicant Media helps owner-led service businesses turn messy online marketing into clear websites, measurable search and ads, and practical automations.

We are useful when the current site is too vague, the ads are spending without proof, the SEO is stuck, or the team keeps doing the same operational work by hand.

- Site: https://replicant.media
- Contact: https://replicant.media/#contact
- Typical build cycles: 2-12 weeks

---

## What we do

### 01 - Clarify: positioning and website strategy

We pin down what you sell, who it is for, and why a buyer should trust you before touching the layout.

- Offer and audience cleanup
- Homepage and landing page strategy
- Trust signals, proof, and calls to action
- Analytics and conversion foundations

### 02 - Build: websites that produce leads

Fast, simple sites for service businesses that need fewer pretty abstractions and more qualified conversations.

- Marketing sites and landing pages
- Service pages and local SEO structure
- Forms, CRM handoff, and tracking
- Performance and accessibility basics

### 03 - Grow: SEO, Google Ads, and reporting

Search and paid acquisition with honest reporting: what is working, what is wasting money, and what to do next.

- Technical SEO cleanup
- Local and service-area SEO
- Google Ads audits and rebuilds
- Lead tracking and call/form attribution
- Monthly decision reports

### 04 - Automate: AI and operations systems

Practical automations for the boring parts: intake, follow-up, reporting, document handling, and internal workflows.

- Lead intake and follow-up flows
- Dashboards and internal tools
- AI-assisted research and content ops
- Gmail, Sheets, CRM, and form integrations

---

## How we work

Most marketing problems are clarity problems wearing nicer clothes. We make the business easier to understand, easier to find, and easier to run.

We do not sell a bloated discovery phase. Send the messy version and we will reply with a practical next step.

---

## Machine-readable surfaces

- robots.txt: https://replicant.media/robots.txt
- sitemap.xml: https://replicant.media/sitemap.xml
- Markdown homepage: \`curl -H "Accept: text/markdown" https://replicant.media/\`
`;

const APPROX_TOKENS = Math.ceil(HOMEPAGE_MARKDOWN.length / 4);

function parseAccept(header) {
  return header.split(",").map((entry) => {
    const [rawType, ...params] = entry.trim().split(";").map((p) => p.trim());
    let q = 1;
    for (const p of params) {
      if (p.startsWith("q=")) {
        const parsed = parseFloat(p.slice(2));
        if (!Number.isNaN(parsed)) q = parsed;
      }
    }
    return { type: rawType.toLowerCase(), q };
  });
}

function prefersMarkdown(header) {
  if (!header) return false;
  const types = parseAccept(header);
  const md = types.find((t) => t.type === "text/markdown");
  if (!md || md.q <= 0) return false;
  const html = types.find((t) => t.type === "text/html");
  if (!html) return true;
  return md.q >= html.q;
}

export default function middleware(request) {
  if (request.method !== "GET" && request.method !== "HEAD") {
    return NextResponse.next();
  }
  const accept = request.headers.get("accept") || "";
  if (!prefersMarkdown(accept)) {
    return NextResponse.next();
  }
  return new NextResponse(request.method === "HEAD" ? null : HOMEPAGE_MARKDOWN, {
    status: 200,
    headers: {
      "Content-Type": "text/markdown; charset=utf-8",
      "Cache-Control": "public, max-age=300, must-revalidate",
      "Vary": "Accept",
      "X-Markdown-Tokens": String(APPROX_TOKENS),
      "Link": '<https://replicant.media/>; rel="canonical"',
    },
  });
}
