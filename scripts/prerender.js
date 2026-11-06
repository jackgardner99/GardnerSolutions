// Runs after the client and SSR builds (see "build" in package.json).
// Writes a fully rendered HTML file per route, plus 404.html and sitemap.xml,
// so search engines, link previews and direct visits to /about all get real
// pages from GitHub Pages instead of an empty shell or a 404.
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const dist = path.join(root, "dist");
const ssrDir = path.join(root, "dist-ssr");

const { render } = await import(pathToFileURL(path.join(ssrDir, "entry-server.js")).href);
const { ROUTES, SITE, headTags } = await import(pathToFileURL(path.join(root, "src/seo.js")).href);

const template = fs.readFileSync(path.join(dist, "index.html"), "utf8");
const HEAD = /<!--seo-head-->[\s\S]*?<!--\/seo-head-->/;
if (!HEAD.test(template) || !template.includes("<!--app-html-->")) {
  throw new Error("index.html is missing the <!--seo-head--> or <!--app-html--> markers");
}
const page = (route, html) =>
  template.replace(HEAD, headTags(route)).replace("<!--app-html-->", html);

for (const route of Object.keys(ROUTES)) {
  // GitHub Pages serves about.html at /about with no redirect, matching the
  // canonical URL (a folder would 301 /about -> /about/ first).
  const file = route === "/" ? "index.html" : `${route.slice(1)}.html`;
  const out = path.join(dist, file);
  fs.mkdirSync(path.dirname(out), { recursive: true });
  fs.writeFileSync(out, page(route, render(route)));
  console.log(`prerendered ${route} -> dist/${file}`);
}

// GitHub Pages serves 404.html (with a 404 status) for unknown paths.
fs.writeFileSync(path.join(dist, "404.html"), page("/404", render("/404")));
console.log("prerendered 404 -> dist/404.html");

const today = new Date().toISOString().slice(0, 10);
const urls = Object.entries(ROUTES)
  .filter(([, m]) => !m.noindex)
  .map(
    ([route, m]) => `  <url>
    <loc>${SITE.url}${route}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${m.sitemap.changefreq}</changefreq>
    <priority>${m.sitemap.priority}</priority>
  </url>`
  );
fs.writeFileSync(
  path.join(dist, "sitemap.xml"),
  `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.join("\n")}
</urlset>
`
);
console.log(`wrote sitemap.xml (${urls.length} urls)`);

fs.rmSync(ssrDir, { recursive: true, force: true });
