import { useEffect } from "react";
import { useLocation } from "react-router-dom";

// Scrolls to the top of the page on route change, unless navigating to a
// "/#section" link — SectionLink/Home already handle scrolling to those.
export default function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (!hash) window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  return null;
}
