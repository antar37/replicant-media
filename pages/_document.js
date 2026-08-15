import { Head, Html, Main, NextScript } from "next/document";

const GA_TRACKING_ID = "G-QSMP2FV3Y5";

const orgSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": "https://replicant.media/#organization",
  name: "Replicant Media",
  alternateName: "Replicant",
  description:
    "Replicant Media builds websites, SEO systems, paid acquisition, and practical automations for owner-led service businesses.",
  url: "https://replicant.media",
  image: "https://replicant.media/static/og.png",
  slogan: "Clear websites. Measurable growth. Useful automation.",
  serviceType: [
    "Web Design",
    "Web Development",
    "Search Engine Optimization",
    "Business Automation",
  ],
  areaServed: "Worldwide",
  brand: { "@type": "Brand", name: "Replicant Media" },
  knowsAbout: [
    "Website design",
    "Programmatic SEO",
    "Paid acquisition",
    "Business automation",
    "Conversion optimization",
  ],
  contactPoint: {
    "@type": "ContactPoint",
    email: "alex@replicant.media",
    contactType: "customer support",
    availableLanguage: ["English"],
    areaServed: "Worldwide",
  },
  sameAs: [],
};

const siteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": "https://replicant.media/#website",
  name: "Replicant Media",
  url: "https://replicant.media",
  description:
    "Websites, SEO, ads, and automations for service businesses.",
  publisher: { "@id": "https://replicant.media/#organization" },
  inLanguage: "en-US",
};

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* Fonts are self-hosted via next/font in _app.js — no render-blocking
            Google Fonts request needed. */}
        <link href="/static/favicons/favicon.ico" rel="shortcut icon" />
        <link href="/static/favicons/site.webmanifest" rel="manifest" />
        <link
          href="/static/favicons/apple-touch-icon.png"
          rel="apple-touch-icon"
          sizes="180x180"
        />
        <link
          href="/static/favicons/favicon-32x32.png"
          rel="icon"
          sizes="32x32"
          type="image/png"
        />
        <link
          href="/static/favicons/favicon-16x16.png"
          rel="icon"
          sizes="16x16"
          type="image/png"
        />
        <link
          color="#CCFF02"
          href="/static/favicons/safari-pinned-tab.svg"
          rel="mask-icon"
        />
        <meta content="#030806" name="theme-color" />
        <meta content="#030806" name="msapplication-TileColor" />
        <meta
          content="/static/favicons/browserconfig.xml"
          name="msapplication-config"
        />

        <script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${GA_TRACKING_ID}');
            `,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(siteSchema) }}
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
