import AsciiField from "components/AsciiField";
import Container from "components/Container";
import Magnetic from "components/Magnetic";
import Subscribe from "components/Subscribe";
import useReveal from "lib/useReveal";

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
      <Work />
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
          <span data-game-platform className="bg-ink text-acid px-3 md:px-5 inline-block">
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
          <span className="bg-acid px-1.5 font-bold">clear websites</span>,{" "}
          <span className="bg-acid px-1.5 font-bold">measurable search and ads</span>,
          and <span className="bg-acid px-1.5 font-bold">useful automations</span>.
          No vague digital transformation pitch. Just the work that gets leads and saves time.
        </p>
      </div>

      {/* CTA */}
      <div
        className="mt-14 md:mt-20 flex flex-wrap items-center gap-5 md:gap-8 animate-rise"
        style={{ animationDelay: "1.15s" }}
      >
        <Magnetic strength={0.32} radius={140}>
          <a href="#contact" data-game-platform className="btn-acid">
            <span className="w-2 h-2 bg-ink block" aria-hidden />
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
      <div className="mt-20 md:mt-28 grid grid-cols-2 md:grid-cols-4 gap-px bg-ink border-2 border-ink pointer-events-none">
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
    <div className="relative block w-full bg-acid border-y-2 border-ink overflow-hidden text-left">
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
      <div className="mt-14 md:mt-20 grid md:grid-cols-2 xl:grid-cols-4 gap-px bg-ink border-2 border-ink">
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
        <div className="font-display font-black tracking-ultratight leading-[0.82] text-7xl md:text-[6rem] uppercase">
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
    </article>
  );
}

/* ---------- Work ---------- */

function Work() {
  return (
    <section
      id="work"
      className="px-5 md:px-10 max-w-[1440px] mx-auto pt-28 md:pt-40"
    >
      <SectionHeader index="III" label="Proof" lines={["WHAT", "THIS MEANS."]} />
      <WorkCard />
    </section>
  );
}

function WorkCard() {
  const [ref, visible] = useReveal();
  return (
    <div
      ref={ref}
      data-game-platform
      className={`reveal-up ${
        visible ? "is-visible" : ""
      } mt-14 md:mt-20 border-2 border-ink bg-ink`}
    >
      {/* TOP — full-width thumbnail */}
      <a
        href="https://www.alphamechanicals.com"
        target="_blank"
        rel="noopener noreferrer"
        className="group relative block bg-ink overflow-hidden border-b-2 border-ink"
        aria-label="Visit Alpha Mechanical (opens in a new tab)"
      >
        <img
          src="/static/work/alphamechanical.webp"
          alt="Service business homepage with clear offer and local proof"
          width={1600}
          height={848}
          loading="lazy"
          decoding="async"
          className="block w-full h-auto transition-transform duration-700 ease-out group-hover:scale-[1.015]"
        />
        <div className="absolute inset-0 flex items-center justify-center bg-acid/0 group-hover:bg-acid/15 transition-colors duration-300 pointer-events-none">
          <span className="opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300 inline-flex items-center gap-3 px-5 py-3 bg-acid text-ink border-2 border-ink font-mono text-[11px] font-bold uppercase tracking-[0.22em]">
            <span className="w-2 h-2 bg-ink block" aria-hidden />
            View live site
            <span aria-hidden>↗</span>
          </span>
        </div>
        <div className="absolute top-0 left-0 right-0 flex items-center justify-between gap-3 px-4 md:px-5 py-2.5 bg-ink/85 backdrop-blur-sm font-mono text-[10px] md:text-[11px] uppercase tracking-[0.22em] font-bold text-bone">
          <span className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 bg-acid block animate-pulse" aria-hidden />
            <span>alphamechanicals.com</span>
          </span>
          <span className="hidden sm:inline text-bone/60">{"// "}LIVE</span>
        </div>
      </a>

      {/* LIGHTHOUSE PROOF BAND — verified Google Lighthouse mobile scores */}
      <div className="border-t-2 border-ink">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-ink">
          {[
            ["99", "Performance"],
            ["100", "Accessibility"],
            ["100", "Best Practices"],
            ["100", "SEO"],
          ].map(([n, label]) => (
            <div key={label} className="bg-bone p-5 md:p-6">
              <div className="font-display font-black text-5xl md:text-6xl leading-none tracking-ultratight text-ink">
                {n}
              </div>
              <div className="mt-3 font-mono text-[10px] md:text-[11px] uppercase tracking-[0.2em] text-ink-muted font-bold">
                {label}
              </div>
            </div>
          ))}
        </div>
        <div className="border-t-2 border-ink bg-bone-soft px-5 md:px-7 lg:px-10 py-4 flex items-center justify-between gap-4">
          <span className="font-mono text-[10px] md:text-[11px] uppercase tracking-[0.22em] font-bold text-ink-muted">
            {"// "}google lighthouse — mobile, throttled
          </span>
          <a
            href="/static/images/perfect-score.webp"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-mono text-[10px] md:text-[11px] uppercase tracking-[0.22em] font-bold text-ink hover:text-acid-deep transition-colors"
          >
            <span>View report</span>
            <span aria-hidden>↗</span>
          </a>
        </div>
      </div>

      <div className="grid md:grid-cols-12 gap-px bg-ink border-t-2 border-ink">
      {/* LEFT — project meta */}
      <article className="bg-bone p-7 md:p-10 lg:p-12 md:col-span-7 flex flex-col">
        <div className="flex items-baseline justify-between font-mono text-[11px] uppercase tracking-[0.22em] font-bold text-ink-muted">
          <span>{"// "}01 / 01 — EXAMPLE OUTCOME</span>
          <span aria-hidden>—</span>
        </div>

        <div className="mt-8 md:mt-10">
          <div className="font-display font-black uppercase tracking-ultratight leading-[0.84] text-6xl md:text-[5.5rem] lg:text-[6.5rem] text-ink">
            <span className="block">FROM</span>
            <span className="block">
              VAGUE TO CLEAR<span className="text-acid-deep">.</span>
            </span>
          </div>
          <a
            href="https://www.alphamechanicals.com"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.22em] text-ink-muted font-bold hover:text-acid-deep transition-colors"
          >
            <span>[ alphamechanicals.com ]</span>
            <span aria-hidden>↗</span>
          </a>
        </div>

        <p className="mt-7 text-sm md:text-base leading-relaxed font-mono max-w-md text-ink">
          <span className="text-ink-muted">[ &gt; ]</span> The pattern is usually the same:
          a business has the skills, the clients, and the proof, but the site
          makes people work too hard to understand it. We rebuild the page around{" "}
          <span className="bg-acid px-1.5 font-bold">the offer</span>,{" "}
          <span className="bg-acid px-1.5 font-bold">the buyer</span>, and{" "}
          <span className="bg-acid px-1.5 font-bold">the next step</span>.
        </p>

        <ul className="mt-8 pt-5 border-t-2 border-ink space-y-2.5 text-sm font-mono">
          {[
            "Plain-language offer and service architecture",
            "Technical SEO and local visibility basics",
            "Lead tracking, forms, and attribution",
            "A site the owner can actually explain",
          ].map((item) => (
            <li key={item} className="flex items-start gap-3">
              <span
                className="text-acid-deep font-bold mt-px"
                aria-hidden
              >
                →
              </span>
              <span>{item}</span>
            </li>
          ))}
        </ul>

        <div className="mt-10">
          <Magnetic strength={0.25} radius={120}>
            <a
              href="https://www.alphamechanicals.com"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-acid"
            >
              <span className="w-2 h-2 bg-ink block" aria-hidden />
              <span>See example site</span>
              <span aria-hidden>↗</span>
            </a>
          </Magnetic>
        </div>
      </article>

      {/* RIGHT — agent-ready score card */}
      <aside className="bg-bone-soft p-7 md:p-10 lg:p-12 md:col-span-5 flex flex-col">
        <div className="flex items-center justify-between font-mono text-[11px] uppercase tracking-[0.22em] font-bold text-ink-muted">
          <span>What we check</span>
          <span className="flex items-center gap-2">
            <span
              className="w-1.5 h-1.5 bg-acid-deep block animate-pulse"
              aria-hidden
            />
            <span className="text-ink">Before launch</span>
          </span>
        </div>

        <div className="mt-6 border-2 border-ink bg-bone p-5 md:p-6 relative">
          <div className="font-display font-black tracking-ultratight leading-[0.85] text-[10rem] md:text-[12rem] text-ink">
            <span className="bg-acid inline-block px-3">04</span>
          </div>
          <div className="mt-5 flex items-center flex-wrap gap-2 font-mono text-[11px] uppercase tracking-[0.22em] font-bold">
            <span className="bg-ink text-acid px-2 py-1">CHECKS</span>
            <span className="text-ink">Before traffic</span>
          </div>
        </div>

        <ul className="mt-8 space-y-0">
          {[
            ["Offer clarity", "01", "Can a stranger explain it?"],
            ["Lead path", "02", "Can a buyer take action?"],
            ["Tracking", "03", "Can we see what worked?"],
          ].map(([label, score, count]) => (
            <li
              key={label}
              className="flex items-center justify-between gap-4 border-b-2 border-ink py-3"
            >
              <div className="flex flex-col gap-1">
                <span className="font-mono text-[11px] uppercase tracking-[0.16em] font-bold text-ink">
                  {label}
                </span>
                <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-ink-muted">
                  {count} checks
                </span>
              </div>
              <div className="font-display font-black text-4xl md:text-5xl tracking-ultratight leading-none text-ink">
                {score}
              </div>
            </li>
          ))}
        </ul>

        <div className="mt-6 font-mono text-[10px] uppercase tracking-[0.22em] text-ink-muted">
          [ If it cannot be measured or explained, it is not done. ]
        </div>
      </aside>
      </div>
    </div>
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
      <div className="mt-14 md:mt-20 grid md:grid-cols-2 gap-px bg-ink border-2 border-ink">
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
