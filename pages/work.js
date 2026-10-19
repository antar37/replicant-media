import Link from "next/link";
import Container from "components/Container";
import { projects } from "lib/portfolio.mjs";

export default function Work() {
  return (
    <Container
      path="/work"
      title="Selected Work — Replicant Media"
      description="Explore selected Replicant Media projects spanning coffee, community, nonprofits, water, and legal services."
      keywords={["Replicant Media portfolio", "website projects", "selected work", "marketing websites"]}
    >
      <section className="max-w-[1440px] mx-auto px-5 md:px-10 pt-12 md:pt-20">
        <div className="flex items-center gap-6 font-mono text-[11px] uppercase tracking-[0.22em] text-ink font-bold">
          <span>§ WORK</span>
          <span className="flex-1 h-[2px] bg-ink" aria-hidden="true" />
          <span>[ Selected projects ]</span>
        </div>
        <h1 className="mt-9 md:mt-12 font-display font-black uppercase tracking-ultratight leading-[0.86] text-[18vw] md:text-[11vw] lg:text-[9rem] text-ink">
          Selected <span className="text-acid">work.</span>
        </h1>
        <div className="mt-9 md:mt-14 grid md:grid-cols-12 gap-6 md:gap-12 items-end">
          <p className="md:col-span-7 font-mono text-base md:text-xl leading-relaxed text-ink max-w-2xl">
            <span className="text-ink-muted">[ &gt; ]</span> Real projects across very different organizations. Each one has its own audience, priorities, and way of making the web useful.
          </p>
          <span className="md:col-span-5 md:text-right font-mono text-[11px] uppercase tracking-[0.22em] text-ink-muted font-bold">
            {"// 07 projects · more to come"}
          </span>
        </div>
        <div className="mt-10 md:mt-14 border-t-2 border-ink" />
      </section>

      <section aria-label="Selected projects" className="max-w-[1440px] mx-auto px-5 md:px-10 mt-8 md:mt-12">
        <div className="grid md:grid-cols-2 gap-5 md:gap-7">
          {projects.map((project, index) => (
            <article key={project.domain} className="group border-2 border-ink bg-bone overflow-hidden flex flex-col">
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Visit ${project.name} (opens in a new tab)`}
                className="block relative overflow-hidden border-b-2 border-ink bg-bone-deep aspect-[16/10] focus-visible:outline-4 focus-visible:outline-acid focus-visible:outline-offset-[-4px]"
              >
                <img
                  src={project.image}
                  alt={`Homepage preview of ${project.name}`}
                  loading={index < 2 ? "eager" : "lazy"}
                  width="1200"
                  height="834"
                  className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.035]"
                />
                <span aria-hidden="true" className="absolute top-4 left-4 bg-acid text-bone px-3 py-2 font-mono text-[10px] uppercase tracking-[0.2em] font-bold">
                  {`// ${String(index + 1).padStart(2, "0")}`}
                </span>
              </a>
              <div className="p-6 md:p-8 lg:p-10 flex flex-col flex-1">
                <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-acid font-bold">[ {project.category} ]</div>
                <h2 className="mt-5 font-display font-black uppercase tracking-ultratight leading-[0.92] text-4xl sm:text-5xl lg:text-6xl text-ink break-words">
                  {project.name}
                </h2>
                <p className="mt-5 font-mono text-sm md:text-base leading-relaxed text-ink-soft max-w-xl flex-1">{project.summary}</p>
                <div className="mt-8 pt-5 border-t border-ink/30 flex flex-wrap items-center justify-between gap-4">
                  <span className="font-mono text-[11px] text-ink-muted break-all">{project.domain}</span>
                  <a href={project.url} target="_blank" rel="noopener noreferrer" className="brutal-link text-ink inline-flex items-center gap-2 min-h-[44px]">
                    Visit site <span aria-hidden="true">↗</span>
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="max-w-[1440px] mx-auto px-5 md:px-10 pt-28 md:pt-40">
        <div className="border-2 border-ink bg-bone-soft p-7 md:p-12 lg:p-16 md:flex md:items-end md:justify-between gap-10">
          <div>
            <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-acid font-bold">§ NEXT / YOUR PROJECT</span>
            <h2 className="mt-6 font-display font-black uppercase tracking-ultratight leading-[0.88] text-5xl sm:text-7xl lg:text-8xl text-ink">What are you <span className="text-acid">building?</span></h2>
            <p className="mt-6 font-mono text-sm md:text-base text-ink-soft max-w-2xl leading-relaxed">Start with the messy brief. We can turn it into a practical next step.</p>
          </div>
          <Link href="/starthere" className="btn-acid mt-8 md:mt-0 shrink-0">Talk through it <span aria-hidden="true">→</span></Link>
        </div>
      </section>
    </Container>
  );
}
