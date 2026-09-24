import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import BrandMark from "./BrandMark.jsx";
import SectionLink from "./SectionLink.jsx";

export default function Nav() {
  const { pathname } = useLocation();
  const onAbout = pathname === "/about";
  const [open, setOpen] = useState(false);

  const handleBrandClick = (e) => {
    setOpen(false);
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
        <button
          type="button"
          className="nav-toggle"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="nav-links"
          onClick={() => setOpen((o) => !o)}
        >
          <FontAwesomeIcon icon={open ? faXmark : faBars} />
        </button>
        <div id="nav-links" className={`nav-links${open ? " open" : ""}`} onClick={() => setOpen(false)}>
          <SectionLink id="whatwedo">Approach</SectionLink>
          <Link to="/about" className={onAbout ? "active" : ""}>About</Link>
          <SectionLink id="packages">Packages</SectionLink>
          <SectionLink id="contact" className="btn btn-ghost">Book a free assessment</SectionLink>
        </div>
      </div>
    </nav>
  );
}
