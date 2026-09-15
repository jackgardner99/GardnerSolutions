import { Link, useLocation } from "react-router-dom";
import BrandMark from "./BrandMark.jsx";
import SectionLink from "./SectionLink.jsx";

export default function Nav() {
  const { pathname } = useLocation();
  const onAbout = pathname === "/about";

  return (
    <nav>
      <div className="wrap nav-in">
        <Link to="/" className="brand">
          <BrandMark />
          Gardner&nbsp;Solutions
        </Link>
        <div className="nav-links">
          <SectionLink id="whatwedo">Approach</SectionLink>
          <Link to="/about" className={onAbout ? "active" : ""}>About</Link>
          <SectionLink id="packages">Packages</SectionLink>
          <SectionLink id="contact">Contact</SectionLink>
          <SectionLink id="contact" className="btn btn-ghost">Book a free assessment</SectionLink>
        </div>
      </div>
    </nav>
  );
}
