import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Cursor from "./Cursor";

export default function Container(props) {
  const { children, ...customMeta } = props;
  const router = useRouter();
  const meta = {
    title: "Replicant Media — websites, SEO, ads, and automations",
    description:
      "Replicant Media builds clear websites, SEO systems, paid acquisition, reporting, and practical automations for owner-led service businesses.",
    image: "https://replicant.media/static/og.png",
    type: "website",
    keywords: [
      "Replicant Media",
      "websites for service businesses",
      "SEO for service businesses",
      "Google Ads audits",
      "marketing reporting",
      "business automation",
    ],
    structuredData: [],
    robots: "index, follow",
    ...customMeta,
  };
  const cleanPath = meta.path || router.asPath.split("?")[0].split("#")[0] || "/";
  const url = `https://replicant.media${cleanPath === "/" ? "/" : cleanPath}`;

  return (
    <>
      <Head>
        <title>{meta.title}</title>
        <meta name="robots" content={meta.robots} />
        <meta name="description" content={meta.description} />
        <meta name="keywords" content={meta.keywords.join(", ")} />
        <link rel="canonical" href={url} />
        <meta property="og:url" content={url} />
        <meta property="og:type" content={meta.type} />
        <meta property="og:site_name" content="Replicant Media" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:title" content={meta.title} />
        <meta property="og:description" content={meta.description} />
        <meta property="og:image" content={meta.image} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Replicant Media — websites, SEO, ads, and automations." />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={meta.title} />
        <meta name="twitter:description" content={meta.description} />
        <meta name="twitter:image" content={meta.image} />
        <meta name="twitter:image:alt" content="Replicant Media — websites, SEO, ads, and automations." />
        {meta.structuredData.map((schema, index) => (
          <script
            key={`structured-data-${index}`}
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
          />
        ))}
      </Head>
      <a href="#main" className="skip-nav">
        Skip to content
      </a>
      <Cursor />
      <SiteHeader />
      <main id="main">{children}</main>
      <SiteFooter />
    </>
  );
}

function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-30 transition-[background,border] duration-200 ${
        scrolled
          ? "bg-bone/95 backdrop-blur-sm border-b-2 border-ink"
          : "bg-transparent border-b-2 border-transparent"
      }`}
    >
      <div className="max-w-[1440px] mx-auto px-5 md:px-10 h-14 md:h-16 flex items-center justify-between">
        <a
          href="/"
          className="group inline-flex items-center gap-3 text-ink"
          aria-label="Replicant Media home"
        >
          <img
            src="/static/logo.svg"
            alt=""
            width="34"
            height="34"
            className="h-8 w-8 md:h-9 md:w-9 rounded-[10px] border border-ink/25 bg-black shadow-[0_0_16px_rgba(124,255,155,0.14)] transition-transform group-hover:scale-105"
          />
          <span className="font-display font-black text-2xl md:text-[28px] tracking-ultratight leading-none uppercase">
            Replicant
            <span className="text-ink-muted">/</span>
            <span className="text-ink-muted text-sm align-top tracking-wider">
              MEDIA
            </span>
          </span>
        </a>
        <nav className="flex items-center gap-2 md:gap-3">
          <a
            href="/seo"
            className="hidden sm:inline-flex items-center px-3 py-3 min-h-[44px] font-mono text-[11px] font-bold uppercase tracking-[0.18em] text-ink hover:bg-ink hover:text-bone transition-colors"
          >
            SEO
          </a>
          <Link
            href="/work"
            className="hidden sm:inline-flex items-center px-3 py-3 min-h-[44px] font-mono text-[11px] font-bold uppercase tracking-[0.18em] text-ink hover:bg-ink hover:text-bone transition-colors"
          >
            Work
          </Link>
          <a
            href="/websites"
            className="hidden md:inline-flex items-center px-3 py-3 min-h-[44px] font-mono text-[11px] font-bold uppercase tracking-[0.18em] text-ink hover:bg-ink hover:text-bone transition-colors"
          >
            Websites
          </a>
          <a
            href="/#systems"
            className="hidden md:inline-flex items-center px-3 py-3 min-h-[44px] font-mono text-[11px] font-bold uppercase tracking-[0.18em] text-ink hover:bg-ink hover:text-bone transition-colors"
          >
            Systems
          </a>
          <a
            href="/starthere"
            className="btn-ink"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-acid animate-pulse" aria-hidden />
            <span>Talk to us</span>
          </a>
        </nav>
      </div>
    </header>
  );
}

function SiteFooter() {
  return (
    <footer className="border-t-2 border-ink mt-32 md:mt-40 bg-bone">
      <div className="max-w-[1440px] mx-auto px-5 md:px-10 py-12 md:py-16">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-10">
          <div>
            <div className="flex items-center gap-4">
              <img
                src="/static/logo.svg"
                alt=""
                width="64"
                height="64"
                className="h-14 w-14 md:h-16 md:w-16 rounded-[18px] border border-ink/25 bg-black shadow-[0_0_24px_rgba(124,255,155,0.12)]"
              />
              <div className="font-display font-black text-5xl md:text-7xl tracking-ultratight leading-none uppercase text-ink">
                Replicant Media
                <span className="text-acid-deep">*</span>
              </div>
            </div>
            <div className="mt-3 font-mono text-[11px] uppercase tracking-[0.22em] text-ink-muted">
              [ Websites, SEO, ads &amp; automations for service businesses ]
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-6 font-mono text-[11px] uppercase tracking-[0.16em]">
            <div>
              <div className="text-ink-faint">Practices</div>
              <ul className="mt-2 text-ink font-bold">
                <li>
                  <a href="/websites" className="inline-flex items-center min-h-[44px] hover:text-acid-deep transition-colors">
                    → Websites
                  </a>
                </li>
                <li>
                  <a href="/seo" className="inline-flex items-center min-h-[44px] hover:text-acid-deep transition-colors">
                    → SEO
                  </a>
                </li>
                <li>
                  <a href="/google-ads" className="inline-flex items-center min-h-[44px] hover:text-acid-deep transition-colors">
                    → Google Ads
                  </a>
                </li>
                <li>
                  <a href="/reporting" className="inline-flex items-center min-h-[44px] hover:text-acid-deep transition-colors">
                    → Reporting
                  </a>
                </li>
                <li>
                  <a href="/automations" className="inline-flex items-center min-h-[44px] hover:text-acid-deep transition-colors">
                    → Automations
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <div className="text-ink-faint">Studio</div>
              <ul className="mt-2 text-ink font-bold">
                <li>
                  <Link href="/work" className="inline-flex items-center min-h-[44px] hover:text-acid-deep transition-colors">
                    → Work
                  </Link>
                </li>
                <li>
                  <a href="/#systems" className="inline-flex items-center min-h-[44px] hover:text-acid-deep transition-colors">
                    → Systems
                  </a>
                </li>
                <li>
                  <a href="/#approach" className="inline-flex items-center min-h-[44px] hover:text-acid-deep transition-colors">
                    → Approach
                  </a>
                </li>
                <li>
                  <a href="/starthere" className="inline-flex items-center min-h-[44px] hover:text-acid-deep transition-colors">
                    → Contact
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <div className="text-ink-faint">Reach</div>
              <ul className="mt-2 text-ink font-bold">
                <li>
                  <a
                    href="mailto:alex@replicant.media"
                    className="inline-flex items-center min-h-[44px] hover:text-acid-deep transition-colors lowercase tracking-normal"
                  >
                    alex@replicant.media
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-12 pt-6 border-t-2 border-ink flex flex-col md:flex-row md:items-center md:justify-between gap-3 font-mono text-[11px] uppercase tracking-[0.22em] text-ink-muted">
          <span>© {new Date().getFullYear()} Replicant Media — Built in public, shipped carefully.</span>
          <span className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-acid animate-pulse" aria-hidden />
            <span>replicant.media — Online</span>
          </span>
        </div>
      </div>
    </footer>
  );
}
