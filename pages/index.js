import AsciiField from "components/AsciiField";
import Container from "components/Container";
import Magnetic from "components/Magnetic";
import Subscribe from "components/Subscribe";
import useReveal from "lib/useReveal";
import { projects } from "lib/portfolio.mjs";
import Link from "next/link";

function spotlight(e) {
  const el = e.currentTarget;
  const rect = el.getBoundingClientRect();
  el.style.setProperty("--mx", `${e.clientX - rect.left}px`);
  el.style.setProperty("--my", `${e.clientY - rect.top}px`);
}

export default function Home() {
  return (
    <Container>
      <Hero />
      <Marquee />
      <Services />
      <TrustSystems />
      <SelectedWork />
      <Manifesto />
      <Approach />
      <Contact />
    </Container>
  );
}

/* ---------- Hero ---------- */

function Hero() {
  return (
    <section
      id="top"
      className="relative px-5 md:px-10 max-w-[1440px] mx-auto pt-10 md:pt-16 pb-20 md:pb-32 overflow-hidden"
    >
      {/* Ambient ASCII watermark. */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none opacity-[0.22] mix-blend-multiply animate-fade"
        style={{ animationDelay: "0.1s", animationDuration: "1.8s" }}
      >
        <AsciiField
          text="REPLICANT"
          haloRadius={14}
          disruptionRate={3}
          className="w-full h-full"
        />
      </div>

      {/* Eyebrow */}
      <div
        className="relative flex items-center justify-between gap-6 font-mono text-[11px] uppercase tracking-[0.22em] text-ink-muted animate-fade pointer-events-none"
        style={{ animationDelay: "0.05s" }}
      >
        <span className="flex items-center gap-3 font-bold">
          <span className="w-2 h-2 bg-acid block animate-pulse" aria-hidden />
          REPLICANT MEDIA / QUERETARO + REMOTE
        </span>
        <span className="hidden md:flex items-center gap-3 font-bold">
          WEBSITES / SEO / ADS / AUTOMATION
        </span>
      </div>

      <span
        className="rule mt-6 mb-12 md:mb-16 block animate-fade"
        style={{ animationDelay: "0.15s" }}
      />

      {/* Headline — no entrance animation: this is the LCP element, so we
          let it paint instantly. The surrounding eyebrow/sub/CTAs still
          stagger in with `animate-rise`/`animate-fade`. */}
      <h1 className="relative font-display font-black tracking-ultratight leading-[0.85] text-ink uppercase pointer-events-none">
        <span data-game-platform className="block text-[18vw] md:text-[14vw] lg:text-[12.5rem]">
          MAKE THE
        </span>
        <span className="block text-[18vw] md:text-[14vw] lg:text-[12.5rem]">
          <span data-game-platform className="text-acid">
            WEB
          </span>{" "}
          <span data-game-platform>WORK</span>
        </span>
        <span data-game-platform className="block text-[18vw] md:text-[14vw] lg:text-[12.5rem]">
          MAKE SENSE.
        </span>
      </h1>

      {/* Sub */}
      <div className="grid md:grid-cols-12 gap-6 md:gap-12 mt-12 md:mt-20 pointer-events-none">
        <p
          className="md:col-start-7 md:col-span-6 text-base md:text-xl leading-relaxed text-ink font-mono max-w-2xl animate-rise"
          style={{ animationDelay: "0.95s" }}
        >
          <span className="text-ink-muted">[ &gt; ]</span> Replicant Media helps owner-led service businesses turn messy online marketing into{" "}
          <span className="text-acid font-bold">clear websites</span>,{" "}
          <span className="text-acid font-bold">measurable search and ads</span>,
          and <span className="text-acid font-bold">useful automations</span>.
          No vague digital transformation pitch. Just the work that gets leads and saves time.
        </p>
      </div>

      {/* CTA */}
      <div
        className="mt-14 md:mt-20 flex flex-wrap items-center gap-5 md:gap-8 animate-rise"
        style={{ animationDelay: "1.15s" }}
      >
        <Magnetic strength={0.32} radius={140}>
          <a href="/starthere" data-game-platform className="btn-acid">
            <span className="w-2 h-2 bg-bone block" aria-hidden />
            <span>Talk through the mess</span>
            <span aria-hidden>→</span>
          </a>
        </Magnetic>
        <a href="#services" data-game-platform className="brutal-link inline-flex items-center gap-2 text-ink">
          <span>See services</span>
          <span aria-hidden>↓</span>
        </a>
      </div>

      {/* Bottom strip with stats */}
      <div className="mt-20 md:mt-28 grid grid-cols-2 md:grid-cols-4 gap-px bg-ink/25 border-2 border-ink pointer-events-none">
        {[
          ["04", "Core services"],
          ["01", "Owner operator"],
          ["2-12wk", "Build cycles"],
          ["0", "Mystery decks"],
        ].map(([n, label]) => (
          <div key={label} data-game-platform className="bg-bone p-5 md:p-6">
            <div className="font-display font-black text-5xl md:text-6xl leading-none tracking-ultratight text-ink">
              {n}
            </div>
            <div className="mt-3 font-mono text-[10px] md:text-[11px] uppercase tracking-[0.2em] text-ink-muted font-bold">
              {label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ---------- Marquee strip ---------- */

function Marquee() {
  const items = [
    "MARKETING SITES",
    "WEB APPS",
    "PROGRAMMATIC SEO",
    "TECHNICAL SEO",
    "LOCAL SEO",
    "GOOGLE ADS",
    "INTERNAL AUTOMATION",
    "CONVERSION DESIGN",
    "SCHEMA & STRUCTURED DATA",
    "CONTENT INFRASTRUCTURE",
    "REPORTING",
    "WORKFLOW AUTOMATION",
  ];
  const doubled = [...items, ...items];
  return (
    <div className="relative block w-full bg-bone-deep border-y-2 border-ink overflow-hidden text-left shadow-[0_0_24px_rgba(120,240,160,0.08)]">
      <div className="marquee-track animate-marquee py-4 md:py-5 text-ink">
        {doubled.map((item, i) => (
          <span
            key={i}
            className="font-display font-black text-3xl md:text-5xl uppercase tracking-ultratight px-6 md:px-8 flex items-center gap-6 md:gap-8 whitespace-nowrap leading-none"
          >
            {item}
            <span aria-hidden className="text-ink-muted text-2xl md:text-4xl">
              ✺
            </span>
          </span>
        ))}
      </div>
    </div>
  );
}


/* ---------- Services ---------- */

function Services() {
  const services = [
    {
      number: "01",
      path: "/websites",
      verb: "Clarify",
      title: "Positioning & Website Strategy",
      lede: "We pin down what you sell, who it is for, and why a buyer should trust you before we touch the layout.",
      items: [
        "Offer and audience cleanup",
        "Homepage and landing page strategy",
        "Messaging that says the quiet part clearly",
        "Trust signals, proof, and calls to action",
        "Analytics and conversion foundations",
      ],
    },
    {
      number: "02",
      path: "/websites",
      verb: "Build",
      title: "Websites That Produce Leads",
      lede: "Fast, simple sites for service businesses that need fewer pretty abstractions and more qualified conversations.",
      items: [
        "Marketing sites and landing pages",
        "Service pages and local SEO structure",
        "Forms, CRM handoff, and tracking",
        "Performance and accessibility basics",
        "Clear ownership after launch",
      ],
    },
    {
      number: "03",
      path: "/seo",
      verb: "Grow",
      title: "SEO, Google Ads & Reporting",
      lede: "Search and paid acquisition with honest reporting: what is working, what is wasting money, and what to do next.",
      items: [
        "Technical SEO cleanup",
        "Local and service-area SEO",
        "Google Ads audits and rebuilds",
        "Lead tracking and call/form attribution",
        "Monthly decision reports",
      ],
    },
    {
      number: "04",
      path: "/automations",
      verb: "Automate",
      title: "AI & Operations Systems",
      lede: "Practical automations for the boring parts: intake, follow-up, reporting, document handling, and internal workflows.",
      items: [
        "Lead intake and follow-up flows",
        "Dashboards and internal tools",
        "AI-assisted research and content ops",
        "Gmail, Sheets, CRM, and form integrations",
        "Guardrails so automations do not go feral",
      ],
    },
  ];
  return (
    <section
      id="services"
      className="px-5 md:px-10 max-w-[1440px] mx-auto pt-28 md:pt-40"
    >
      <SectionHeader index="II" label="What we do" lines={["CLEAR", "PRACTICAL", "WORK."]} />
      <div className="mt-14 md:mt-20 grid md:grid-cols-2 xl:grid-cols-4 gap-px bg-ink/25 border-2 border-ink">
        {services.map((s, i) => (
          <ServiceCard key={s.number} service={s} index={i} />
        ))}
      </div>
    </section>
  );
}

function ServiceCard({ service, index }) {
  const [ref, visible] = useReveal();
  return (
    <article
      ref={ref}
      onMouseMove={spotlight}
      data-game-platform
      className={`flip-card reveal-up ${
        visible ? "is-visible" : ""
      } p-7 md:p-9 lg:p-10 flex flex-col h-full`}
      style={{ transitionDelay: `${index * 110}ms` }}
    >
      <div className="flex items-baseline justify-between font-mono text-[11px] uppercase tracking-[0.22em] font-bold">
        <span className="flip-mark">{"// "}{service.number}</span>
        <span aria-hidden>—</span>
      </div>
      <div className="mt-10 md:mt-14">
        <div className="font-display font-black tracking-ultratight leading-[0.84] text-6xl sm:text-7xl md:text-[5.4rem] xl:text-[4.65rem] 2xl:text-[5.5rem] uppercase break-words">
          {service.verb}
          <span className="flip-accent text-acid-deep">.</span>
        </div>
        <div className="mt-3 font-mono text-[11px] uppercase tracking-[0.22em] flip-mark font-bold">
          [ {service.title} ]
        </div>
      </div>
      <p className="mt-7 text-sm md:text-base leading-relaxed font-mono max-w-md">
        {service.lede}
      </p>
      <ul className="mt-8 pt-5 border-t-2 flip-rule space-y-2.5 text-sm font-mono">
        {service.items.map((item) => (
          <li key={item} className="flex items-start gap-3">
            <span className="flip-accent text-acid-deep font-bold mt-px" aria-hidden>
              →
            </span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
      <a
        href={service.path}
        className="mt-8 inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.22em] font-bold flip-accent hover:text-acid-deep transition-colors"
      >
        <span>Explore {service.title}</span>
        <span aria-hidden>→</span>
      </a>
    </article>
  );
}

/* ---------- Trust systems ---------- */

function TrustSystems() {
  const systems = [
    ["01", "Offer clarity", "Say what the business does, who it serves, why it is credible, and what the buyer should do next."],
    ["02", "Lead path", "Connect pages, calls to action, Jotform intake, analytics, and follow-up so interest does not leak out of the system."],
    ["03", "Search base", "Ship crawlable pages, metadata, schema, sitemap coverage, internal links, and performance basics before chasing volume."],
    ["04", "Decision reporting", "Turn SEO, ads, forms, and traffic into plain-language next actions instead of mystery dashboards."],
  ];

  return (
    <section
      id="systems"
      className="px-5 md:px-10 max-w-[1440px] mx-auto pt-28 md:pt-40"
    >
      <SectionHeader index="III" label="Systems" lines={["WHAT", "GETS BUILT."]} />
      <div className="mt-14 md:mt-20 border-2 border-ink bg-ink/25">
        <div className="grid md:grid-cols-12 gap-px bg-ink/25">
          <div className="md:col-span-7 bg-bone p-7 md:p-10 lg:p-12">
            <div className="font-mono text-[11px] uppercase tracking-[0.22em] font-bold text-ink-muted">
              // owned process, not borrowed proof
            </div>
            <h2 className="mt-8 font-display font-black uppercase tracking-ultratight leading-[0.84] text-6xl md:text-[5.5rem] lg:text-[6.5rem] text-ink">
              Clear pages.
              <span className="block text-acid">Measurable paths.</span>
              Useful systems.
            </h2>
            <p className="mt-7 text-sm md:text-base leading-relaxed font-mono max-w-xl text-ink">
              <span className="text-ink-muted">[ &gt; ]</span> Replicant Media is built around a simple idea: your website, SEO, ads, forms, reporting, and automations should work as one lead-generation system, not separate pieces of internet furniture.
            </p>
            <div className="mt-10">
              <Magnetic strength={0.25} radius={120}>
                <a href="/starthere" className="btn-acid">
                  <span className="w-2 h-2 bg-bone block" aria-hidden />
                  <span>Send a brief</span>
                  <span aria-hidden>→</span>
                </a>
              </Magnetic>
            </div>
          </div>
          <div className="md:col-span-5 bg-bone-soft p-7 md:p-10 lg:p-12">
            <div className="font-mono text-[11px] uppercase tracking-[0.22em] font-bold text-ink-muted">
              What gets checked before traffic
            </div>
            <ul className="mt-8 space-y-0">
              {systems.map(([number, label, body]) => (
                <li key={label} className="border-b-2 border-ink py-5 last:border-b-0">
                  <div className="flex items-baseline justify-between gap-4">
                    <h3 className="font-mono text-[11px] uppercase tracking-[0.16em] font-bold text-ink">
                      {label}
                    </h3>
                    <span className="font-display font-black text-4xl leading-none text-ink">
                      {number}
                    </span>
                  </div>
                  <p className="mt-3 font-mono text-sm leading-relaxed text-ink-muted">
                    {body}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- Selected work ---------- */
function SelectedWork() {
  return (
    <section className="px-5 md:px-10 max-w-[1440px] mx-auto pt-28 md:pt-40">
      <div className="flex items-center gap-6 font-mono text-[11px] uppercase tracking-[0.22em] text-ink font-bold">
        <span>§ WORK</span>
        <span className="flex-1 h-[2px] bg-ink" aria-hidden="true" />
        <span>[ Selected projects ]</span>
      </div>
      <div className="mt-8 md:mt-10 flex flex-wrap items-end justify-between gap-6">
        <h2 className="font-display font-black uppercase tracking-ultratight leading-[0.86] text-[14vw] md:text-[8vw] lg:text-[7rem] text-ink">
          MADE <span className="text-acid">REAL.</span>
        </h2>
        <Link href="/work" className="brutal-link text-ink inline-flex items-center gap-2 min-h-[44px]">
          See all work <span aria-hidden="true">→</span>
        </Link>
      </div>
      <div className="mt-10 md:mt-14 grid md:grid-cols-2 gap-px border-2 border-ink bg-ink/25">
        {projects.slice(0, 2).map((project, index) => (
          <Link key={project.domain} href="/work" className="group bg-bone block min-w-0">
            <div className="aspect-[16/9] border-b-2 border-ink overflow-hidden bg-bone-deep">
              <img src={project.image} alt={`Homepage preview of ${project.name}`} loading="lazy" width="1200" height="834" className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.035]" />
            </div>
            <div className="p-6 md:p-8 flex items-end justify-between gap-4">
              <div>
                <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-acid font-bold">{`// ${String(index + 1).padStart(2, "0")} · ${project.category}`}</span>
                <h3 className="mt-3 font-display font-black uppercase tracking-ultratight leading-none text-4xl md:text-5xl text-ink">{project.name}</h3>
              </div>
              <span className="text-acid text-2xl" aria-hidden="true">↗</span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

/* ---------- Manifesto ---------- */

function Manifesto() {
  const [ref, visible] = useReveal();
  return (
    <section className="px-5 md:px-10 max-w-[1440px] mx-auto pt-28 md:pt-40">
      <div
        ref={ref}
        className={`reveal-up ${
          visible ? "is-visible" : ""
        } grid md:grid-cols-12 gap-6 md:gap-12 items-end`}
      >
        <div className="md:col-span-3 font-mono text-[11px] uppercase tracking-[0.22em] text-ink-muted font-bold">
          §&nbsp;MANIFESTO
        </div>
        <blockquote className="md:col-span-9 font-display font-black uppercase tracking-ultratight text-4xl md:text-7xl lg:text-[5.25rem] leading-[0.95] text-ink">
          “Most marketing problems are clarity problems wearing nicer clothes.
          We make the business easier to understand, easier to find, and easier to run.”
        </blockquote>
      </div>
    </section>
  );
}

/* ---------- Approach / principles ---------- */

function Approach() {
  const principles = [
    {
      n: "i",
      title: "Say what you actually do",
      body: "The site should explain the business faster than the owner can over coffee. If it needs a philosophy page to make sense, it is not done.",
    },
    {
      n: "ii",
      title: "Useful beats impressive",
      body: "Sharp design matters, but the job is not to look expensive. The job is to help the right person trust you enough to start a conversation.",
    },
    {
      n: "iii",
      title: "Fix the funnel, not the vibes",
      body: "We care about forms, calls, rankings, cost per lead, follow-up, and whether anyone can tell what happened after launch.",
    },
    {
      n: "iv",
      title: "Automate after the process is real",
      body: "AI is useful when the workflow is already understood. We do not automate confusion; we clean it up first, then make the repeatable parts faster.",
    },
  ];
  return (
    <section
      id="approach"
      className="px-5 md:px-10 max-w-[1440px] mx-auto pt-28 md:pt-40"
    >
      <SectionHeader index="IV" label="How we work" lines={["NO", "FOG MACHINE."]} />
      <div className="mt-14 md:mt-20 grid md:grid-cols-2 gap-px bg-ink/25 border-2 border-ink">
        {principles.map((p, i) => (
          <Principle key={p.n} p={p} index={i} />
        ))}
      </div>
    </section>
  );
}

function Principle({ p, index }) {
  const [ref, visible] = useReveal();
  return (
    <div
      ref={ref}
      onMouseMove={spotlight}
      data-game-platform
      className={`flip-card reveal-up ${
        visible ? "is-visible" : ""
      } p-7 md:p-10 lg:p-12 relative`}
      style={{ transitionDelay: `${index * 90}ms` }}
    >
      <div className="absolute top-5 right-5 md:top-7 md:right-7 font-mono text-[10px] uppercase tracking-[0.22em] flip-mark font-bold">
        {String(index + 1).padStart(2, "0")}/04
      </div>
      <div className="font-mono text-[11px] uppercase tracking-[0.22em] flip-accent text-acid-deep font-bold">
        {"// "}{p.n}
      </div>
      <div className="mt-6 font-display font-black uppercase tracking-ultratight text-4xl md:text-[2.75rem] lg:text-[3.25rem] leading-[0.95]">
        {p.title}
      </div>
      <p className="mt-5 text-sm md:text-base leading-relaxed font-mono max-w-xl">
        {p.body}
      </p>
    </div>
  );
}

/* ---------- Contact ---------- */

function Contact() {
  return (
    <section
      id="contact"
      className="px-5 md:px-10 max-w-[1440px] mx-auto pt-28 md:pt-40"
    >
      <SectionHeader index="V" label="Start here" lines={["WHAT IS", "STUCK?"]} />
      <div className="mt-14 md:mt-20 grid md:grid-cols-12 gap-10 md:gap-16">
        <div className="md:col-span-5">
          <p className="text-base md:text-lg text-ink leading-relaxed font-mono max-w-md">
            <span className="text-ink-muted">[ &gt; ]</span> Send the messy version:
            the site that no longer explains the business, the ads that spend
            without proof, the SEO problem, or the workflow everyone keeps doing
            by hand.
          </p>
          <dl className="mt-10 font-mono text-[11px] uppercase tracking-[0.18em] text-ink-muted font-bold border-t-2 border-ink">
            <ContactRow label="Email">
              <a
                href="mailto:alex@replicant.media"
                className="text-ink hover:text-acid-deep transition-colors lowercase tracking-normal"
              >
                alex@replicant.media
              </a>
            </ContactRow>
            <ContactRow label="Reply">
              <span className="text-ink">Practical next step</span>
            </ContactRow>
            <ContactRow label="Engagements">
              <span className="text-ink">2 — 12 weeks</span>
            </ContactRow>
            <ContactRow label="Based">
              <span className="text-ink">Remote / worldwide</span>
            </ContactRow>
          </dl>
        </div>
        <div data-game-platform className="md:col-span-7 border-2 border-ink bg-bone p-6 md:p-10">
          <Subscribe />
        </div>
      </div>
    </section>
  );
}

function ContactRow({ label, children }) {
  return (
    <div className="flex items-center justify-between gap-4 border-b-2 border-ink py-4">
      <dt>{label}</dt>
      <dd>{children}</dd>
    </div>
  );
}

/* ---------- Section header ---------- */

function SectionHeader({ index, label, lines }) {
  const [ref, visible] = useReveal();
  return (
    <div
      ref={ref}
      className={`reveal-up ${visible ? "is-visible" : ""}`}
    >
      <div className="flex items-center gap-6 font-mono text-[11px] uppercase tracking-[0.22em] text-ink font-bold">
        <span>§ {index}</span>
        <span className="flex-1 h-[2px] bg-ink" />
        <span>[ {label} ]</span>
      </div>
      <h2 className="mt-8 md:mt-10 font-display font-black uppercase tracking-ultratight leading-[0.86] text-[14vw] md:text-[8vw] lg:text-[7rem] text-ink max-w-[16ch]">
        {lines.map((line, i) => (
          <span key={i} className="block">
            {line}
          </span>
        ))}
      </h2>
    </div>
  );
}
