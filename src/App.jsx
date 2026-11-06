import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import PortalDemo from "./pages/PortalDemo.jsx";
import NotFound from "./pages/NotFound.jsx";
import ScrollToTop from "./components/ScrollToTop.jsx";
import Seo from "./components/Seo.jsx";

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Seo />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/portal-demo" element={<PortalDemo />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}
