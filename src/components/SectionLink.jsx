import { Link, useLocation } from "react-router-dom";
import { scrollToId } from "../utils/scrollTo.js";

// Scrolls to a Home page section, navigating to Home first if needed.
export default function SectionLink({ id, children, className, style }) {
  const { pathname } = useLocation();

  const handleClick = (e) => {
    if (pathname === "/") {
      e.preventDefault();
      scrollToId(id);
    }
    // otherwise let the Link navigate to "/#id" — Home scrolls to it on mount
  };

  return (
    <Link to={`/#${id}`} className={className} style={style} onClick={handleClick}>
      {children}
    </Link>
  );
}
