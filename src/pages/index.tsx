import Nav from "./nav";
import Hero from "./hero";
import Services from "./services";
import Testimonials from "./testimonials";
import AboutUs from "./about";
import Footer from "./footer";
import { useEffect } from "react";
import Contact from "./contact";

export default function Home() {
  useEffect(() => {
    // Reset scroll position on page load
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Nav />
      <div id="hero">
        <Hero />
      </div>
      <div id="services">
        <Services />
      </div>
      <div id="about">
        <AboutUs />
      </div>
      <div id="testimonials">
        <Testimonials />
      </div>
      <div id="contact">
        <Contact />
      </div>
      <div id="footer">
        <Footer />
      </div>
    </>
  );
}
