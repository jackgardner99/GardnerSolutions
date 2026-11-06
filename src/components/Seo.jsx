import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { metaFor } from "../seo.js";

// Keeps the tab title and description right when navigating between pages
// client-side. The full <head> for each page is written at build time by
// scripts/prerender.js, which is what search engines and link previews read.
export default function Seo() {
  const { pathname } = useLocation();
  useEffect(() => {
    const m = metaFor(pathname);
    document.title = m.title;
    document.querySelector('meta[name="description"]')?.setAttribute("content", m.description);
  }, [pathname]);
  return null;
}
