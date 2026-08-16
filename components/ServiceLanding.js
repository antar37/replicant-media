import Container from "components/Container";
import Magnetic from "components/Magnetic";
import { faqSchema, serviceSchema, SITE_URL } from "lib/seo-pages";

export default function ServiceLanding({ page }) {
  const breadcrumbs = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "@id": `${SITE_URL}${page.path}#breadcrumbs`,
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Replicant Media",
        item: `${SITE_URL}/`,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: page.metaTitle.replace(" | Replicant Media", ""),
        item: `${SITE_URL}${page.path}`,
      },
    ],
  };

  return (
    <Container
      title={page.metaTitle}
      description={page.description}
      path={page.path}
      keywords={[
        "Replicant Media",
        page.metaTitle.replace(" | Replicant Media", ""),
        "service business marketing",
        "lead generation websites",
        "SEO systems",
        "marketing automation",
      ]}
      structuredData={[serviceSchema(page), faqSchema(page), breadcrumbs]}
    >
      <article className="px-5 md:px-10 max-w-[1440px] mx-auto pt-12 md:pt-20 pb-20 md:pb-32">
        <div className="font-mono text-[11px] uppercase tracking-[0.22em] text-ink-muted font-bold flex items-center justify-between gap-6">
          <span>{page.eyebrow}</span>
          <a href="/" className="hidden sm:inline-flex hover:text-acid-deep transition-colors">
            ← Home
          </a>
        </div>
        <span className="rule mt-6 mb-12 block" />

        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-end">
          <div className="lg:col-span-8">
            <h1 className="font-display font-black tracking-ultratight leading-[0.86] text-[17vw] md:text-[11vw] lg:text-[8.8rem] uppercase text-ink max-w-[9ch]">
              {page.h1.map((line, index) => (
                <span key={line} className={index === 1 ? "block text-acid" : "block"}>
                  {line}
                </span>
              ))}
            </h1>
          </div>
          <div className="lg:col-span-4 border-2 border-ink bg-bone-soft p-6 md:p-8 font-mono">
            <div className="text-[11px] uppercase tracking-[0.22em] text-ink-muted font-bold">
              Best for
            </div>
            <p className="mt-5 text-sm md:text-base leading-relaxed text-ink">
              Owner-led service businesses that need clearer marketing, better lead paths, and systems that connect the site to the actual sales process.
            </p>
            <Magnetic strength={0.24} radius={110}>
              <a href="/starthere" className="btn-acid mt-7">
                <span className="w-2 h-2 bg-bone block" aria-hidden />
                <span>Start a brief</span>
                <span aria-hidden>→</span>
              </a>
            </Magnetic>
          </div>
        </div>

        <p className="mt-12 md:mt-16 max-w-4xl font-mono text-base md:text-xl leading-relaxed text-ink">
          <span className="text-ink-muted">[ &gt; ]</span> {page.intro}
        </p>

        <section className="mt-16 md:mt-24 grid lg:grid-cols-12 gap-px bg-ink border-2 border-ink">
          <div className="lg:col-span-5 bg-bone p-7 md:p-10">
            <h2 className="font-display font-black uppercase tracking-ultratight text-5xl md:text-7xl leading-[0.9] text-ink">
              What gets fixed<span className="text-acid-deep">.</span>
            </h2>
          </div>
          <div className="lg:col-span-7 bg-bone-soft p-7 md:p-10">
            <ul className="space-y-4 font-mono text-sm md:text-base text-ink">
              {page.outcomes.map((outcome) => (
                <li key={outcome} className="flex gap-3">
                  <span className="text-acid-deep font-bold" aria-hidden>
                    →
                  </span>
                  <span>{outcome}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="mt-16 md:mt-24 grid md:grid-cols-3 gap-px bg-ink border-2 border-ink">
          {page.sections.map((section, index) => (
            <div key={section.heading} className="bg-bone p-7 md:p-9">
              <div className="font-mono text-[11px] uppercase tracking-[0.22em] text-ink-muted font-bold">
                // {String(index + 1).padStart(2, "0")}
              </div>
              <h2 className="mt-6 font-display font-black uppercase tracking-ultratight text-4xl md:text-5xl leading-[0.9] text-ink">
                {section.heading}
              </h2>
              <p className="mt-5 font-mono text-sm md:text-base leading-relaxed text-ink">
                {section.body}
              </p>
            </div>
          ))}
        </section>

        <section className="mt-16 md:mt-24 grid lg:grid-cols-12 gap-10 lg:gap-16">
          <div className="lg:col-span-4">
            <h2 className="font-display font-black uppercase tracking-ultratight text-5xl md:text-7xl leading-[0.9] text-ink">
              Questions buyers ask<span className="text-acid-deep">.</span>
            </h2>
          </div>
          <div className="lg:col-span-8 border-2 border-ink">
            {page.faqs.map(([question, answer]) => (
              <div key={question} className="border-b-2 border-ink last:border-b-0 bg-bone p-6 md:p-8">
                <h3 className="font-mono text-sm md:text-base uppercase tracking-[0.12em] text-ink font-bold">
                  {question}
                </h3>
                <p className="mt-4 font-mono text-sm md:text-base leading-relaxed text-ink-muted">
                  {answer}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-16 md:mt-24 border-2 border-ink bg-bone-soft p-7 md:p-10 flex flex-col md:flex-row md:items-center md:justify-between gap-8">
          <div>
            <div className="font-mono text-[11px] uppercase tracking-[0.22em] text-ink-muted font-bold">
              Replicant Media / Next step
            </div>
            <h2 className="mt-4 font-display font-black uppercase tracking-ultratight text-5xl md:text-7xl leading-[0.9] text-ink">
              Send the messy version.
            </h2>
          </div>
          <Magnetic strength={0.24} radius={110}>
            <a href="/starthere" className="btn-acid">
              <span className="w-2 h-2 bg-bone block" aria-hidden />
              <span>Start a brief</span>
              <span aria-hidden>→</span>
            </a>
          </Magnetic>
        </section>
      </article>
    </Container>
  );
}
