import { useEffect } from "react";
import Nav from "../components/Nav.jsx";
import Footer from "../components/Footer.jsx";
import Hero from "../components/home/Hero.jsx";
import CredStrip from "../components/home/CredStrip.jsx";
import Differentiator from "../components/home/Differentiator.jsx";
import WhatWeDo from "../components/home/WhatWeDo.jsx";
import StatsBand from "../components/home/StatsBand.jsx";
import HowItWorks from "../components/home/HowItWorks.jsx";
import Assessment from "../components/home/Assessment.jsx";
import Portfolio from "../components/home/Portfolio.jsx";
import Packages from "../components/home/Packages.jsx";
import Contact from "../components/home/Contact.jsx";
import useReveal from "../utils/useReveal.js";
import { scrollToId } from "../utils/scrollTo.js";

export default function Home() {
  useReveal();

  // Coming from another page with a "/#section" link — scroll once mounted.
  useEffect(() => {
    const hash = window.location.hash.replace("#", "");
    if (hash) requestAnimationFrame(() => scrollToId(hash));
  }, []);

  return (
    <>
      <Nav />
      <Hero />
      <CredStrip />
      <Differentiator />
      <StatsBand />
      <WhatWeDo />
      <HowItWorks />
      <Assessment />
      <Packages />
      <Portfolio />
      <Contact />
      <Footer />
    </>
  );
}
