import { Link, useLocation } from "react-router-dom";
import BrandMark from "./BrandMark.jsx";
import SectionLink from "./SectionLink.jsx";

export default function Nav() {
  const { pathname } = useLocation();
  const onAbout = pathname === "/about";

  const handleBrandClick = (e) => {
    if (pathname === "/") {
      e.preventDefault();
      window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    }
  };

  return (
    <nav>
      <div className="wrap nav-in">
        <Link to="/" className="brand" onClick={handleBrandClick}>
          <BrandMark />
          Gardner&nbsp;Solutions
        </Link>
        <div className="nav-links">
          <SectionLink id="whatwedo">Approach</SectionLink>
          <Link to="/about" className={onAbout ? "active" : ""}>About</Link>
          <SectionLink id="packages">Packages</SectionLink>
          <SectionLink id="contact" className="btn btn-ghost">Book a free assessment</SectionLink>
        </div>
      </div>
    </nav>
  );
}
