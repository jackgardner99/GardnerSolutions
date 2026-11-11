// Single source of truth for page titles, descriptions and share tags.
// Used at build time by scripts/prerender.js (static <head> per page) and at
// runtime by <Seo /> (keeps the tab title right on client-side navigation).

export const SITE = {
  name: "Gardner Solutions",
  url: "https://gardnersolutions.co",
  email: "gardnersolutionsco@gmail.com",
  locality: "Nashville",
  region: "TN",
  ogImage: "/og-image.jpg",
  themeColor: "#2E5E3A",
};

export const ROUTES = {
  "/": {
    title: "Gardner Solutions | Brand, Website & Customer Engagement for Small Business",
    description:
      "A Nashville engagement studio for small businesses. We find your story, sharpen your message, and build the websites, portals, and content that bring in the right customers. Take the free 2-minute fit quiz.",
    sitemap: { priority: "1.0", changefreq: "monthly" },
  },
  "/about": {
    title: "About Us | Gardner Solutions",
    description:
      "Meet Kadi and Jack: a Big 4 strategy consultant and a full-stack developer who pair consulting rigor with real technical build to help small businesses grow the right customers.",
    sitemap: { priority: "0.8", changefreq: "monthly" },
  },
  "/portal-demo": {
    title: "Sample Client Portal | Gardner Solutions",
    description:
      "A clickable sample of the kind of customer portal Gardner Solutions builds: project progress, documents, and meetings in one secure place.",
    // Demo with placeholder data: reachable from the site, but kept out of search results.
    noindex: true,
  },
};

export const NOT_FOUND = {
  title: "Page not found | Gardner Solutions",
  description: "This page doesn't exist. Head back to the Gardner Solutions home page.",
  noindex: true,
};

export function metaFor(path) {
  const clean = path.replace(/\/+$/, "") || "/";
  return ROUTES[clean] || NOT_FOUND;
}

// schema.org structured data for the home page.
export function structuredData() {
  return [
    {
      "@context": "https://schema.org",
      "@type": "ProfessionalService",
      "@id": `${SITE.url}/#business`,
      name: SITE.name,
      url: SITE.url,
      email: SITE.email,
      logo: `${SITE.url}/icon-512.png`,
      image: `${SITE.url}${SITE.ogImage}`,
      description: ROUTES["/"].description,
      slogan: "Let us help make your business bloom.",
      address: {
        "@type": "PostalAddress",
        addressLocality: SITE.locality,
        addressRegion: SITE.region,
        addressCountry: "US",
      },
      areaServed: { "@type": "City", name: `${SITE.locality}, ${SITE.region}` },
      founder: [
        { "@type": "Person", name: "Kadi", jobTitle: "Strategy & Story" },
        { "@type": "Person", name: "Jack Gardner", jobTitle: "Technology & Build" },
      ],
      knowsAbout: [
        "Brand strategy",
        "Small business marketing",
        "Website development",
        "Customer portals",
        "Content strategy",
        "Email marketing",
        "Social media",
      ],
      makesOffer: [
        { "@type": "Offer", name: "Grid Diagnostic", price: "500", priceCurrency: "USD" },
        { "@type": "Offer", name: "Foundation", price: "2500", priceCurrency: "USD" },
        { "@type": "Offer", name: "Build", price: "7500", priceCurrency: "USD" },
        {
          "@type": "Offer",
          name: "Grow",
          priceSpecification: {
            "@type": "UnitPriceSpecification",
            minPrice: "300",
            priceCurrency: "USD",
            unitText: "MONTH",
          },
        },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "@id": `${SITE.url}/#website`,
      name: SITE.name,
      url: SITE.url,
      publisher: { "@id": `${SITE.url}/#business` },
    },
  ];
}

const esc = (s) =>
  String(s).replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

// Full <head> tag block for one page (build time).
export function headTags(path) {
  const m = metaFor(path);
  const url = SITE.url + (path === "/" ? "/" : path);
  const img = SITE.url + SITE.ogImage;
  const tags = [
    `<title>${esc(m.title)}</title>`,
    `<meta name="description" content="${esc(m.description)}" />`,
    m.noindex
      ? `<meta name="robots" content="noindex, follow" />`
      : `<link rel="canonical" href="${url}" />`,
    `<meta property="og:type" content="website" />`,
    `<meta property="og:site_name" content="${SITE.name}" />`,
    `<meta property="og:title" content="${esc(m.title)}" />`,
    `<meta property="og:description" content="${esc(m.description)}" />`,
    `<meta property="og:url" content="${url}" />`,
    `<meta property="og:image" content="${img}" />`,
    `<meta property="og:image:width" content="1200" />`,
    `<meta property="og:image:height" content="630" />`,
    `<meta property="og:image:alt" content="Gardner Solutions: Engagement that grows the right customers." />`,
    `<meta property="og:locale" content="en_US" />`,
    `<meta name="twitter:card" content="summary_large_image" />`,
    `<meta name="twitter:title" content="${esc(m.title)}" />`,
    `<meta name="twitter:description" content="${esc(m.description)}" />`,
    `<meta name="twitter:image" content="${img}" />`,
  ];
  if (path === "/") {
    tags.push(
      `<script type="application/ld+json">${JSON.stringify(structuredData()).replace(/</g, "\\u003c")}</script>`
    );
  }
  return tags.join("\n");
}
