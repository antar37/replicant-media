import Container from "components/Container";
import Subscribe from "components/Subscribe";

const contactSchema = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  "@id": "https://replicant.media/starthere#contact",
  name: "Start a brief with Replicant Media",
  description:
    "Send Replicant Media the messy version of your website, SEO, Google Ads, reporting, or automation problem.",
  url: "https://replicant.media/starthere",
  about: { "@id": "https://replicant.media/#organization" },
};

export default function StartHere() {
  return (
    <Container
      title="Start a Website, SEO, Ads, or Automation Brief | Replicant Media"
      description="Send Replicant Media the messy version: the website, SEO, Google Ads, reporting, or automation problem that needs a practical next step."
      path="/starthere"
      keywords={[
        "Replicant Media contact",
        "website brief",
        "SEO brief",
        "Google Ads audit brief",
        "automation project brief",
      ]}
      structuredData={[contactSchema]}
    >
      <section className="px-5 md:px-10 max-w-[1440px] mx-auto pt-12 md:pt-20 pb-20 md:pb-32">
        <div className="font-mono text-[11px] uppercase tracking-[0.22em] text-ink-muted font-bold">
          Replicant Media / Start here
        </div>
        <span className="rule mt-6 mb-12 block" />
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16">
          <div className="lg:col-span-5">
            <h1 className="font-display font-black tracking-ultratight leading-[0.86] text-[17vw] md:text-[11vw] lg:text-[8rem] uppercase text-ink">
              Send the
              <span className="block text-acid">messy</span>
              version.
            </h1>
            <p className="mt-10 max-w-xl font-mono text-base md:text-lg leading-relaxed text-ink">
              <span className="text-ink-muted">[ &gt; ]</span> Tell us what is stuck: the site that no longer explains the business, the SEO problem, the ad spend, the reporting gap, or the workflow everyone keeps doing by hand.
            </p>
            <dl className="mt-10 font-mono text-[11px] uppercase tracking-[0.18em] text-ink-muted font-bold border-t-2 border-ink max-w-xl">
              <div className="flex items-center justify-between gap-4 border-b-2 border-ink py-4">
                <dt>Email</dt>
                <dd>
                  <a className="text-ink hover:text-acid-deep lowercase tracking-normal" href="mailto:alex@replicant.media">
                    alex@replicant.media
                  </a>
                </dd>
              </div>
              <div className="flex items-center justify-between gap-4 border-b-2 border-ink py-4">
                <dt>Best fit</dt>
                <dd className="text-ink">2–12 week fixes</dd>
              </div>
            </dl>
          </div>
          <div className="lg:col-span-7 border-2 border-ink bg-bone p-6 md:p-10">
            <Subscribe />
          </div>
        </div>
      </section>
    </Container>
  );
}
