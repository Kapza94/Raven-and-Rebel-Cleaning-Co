import Nav from "./nav";
import Hero from "./hero";
import Services from "./services";
import Testimonials from "./testimonials";
import AboutUs from "./about";
import Footer from "./footer";
import { useEffect } from "react";
import Contact from "./contact";
import Head from "next/head";

export default function Home() {
  useEffect(() => {
    // Reset scroll position on page load
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      {/* Add SEO Meta Tags */}
      <Head>
        <title>Raven and Rebel Cleaning Co. | Professional Cleaning Services</title>
        <meta
          name="description"
          content="Raven and Rebel Cleaning Co. offers professional cleaning services for homes, offices, and construction sites. From pre-occupation to post-occupation cleaning, we ensure spotless spaces. Contact us for a free quote today!"
        />
        <meta
          name="keywords"
          content="cleaning services, home cleaning, office cleaning, construction site cleaning, eco-friendly cleaning"
        />
        <meta name="author" content="Raven and Rebel Cleaning Co." />

        {/* Canonical URL Tag */}
        <link rel="canonical" href="https://ravenandrebelcleaning.com/" />

        {/* Open Graph Tags for Social Media */}
        <meta
          property="og:title"
          content="Raven and Rebel Cleaning Co. | Professional Cleaning Services"
        />
        <meta
          property="og:description"
          content="Raven and Rebel Cleaning Co. offers professional cleaning services for homes, offices, and construction sites. From pre-occupation to post-occupation cleaning, we ensure spotless spaces. Contact us for a free quote today!"
        />
        <meta property="og:image" content="https://ravenandrebelcleaning.com/og-image.jpg" />
        <meta property="og:url" content="https://ravenandrebelcleaning.com" />

        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Raven and Rebel Cleaning Co. | Professional Cleaning Services"
        />
        <meta
          name="twitter:description"
          content="Raven and Rebel Cleaning Co. offers professional cleaning services for homes, offices, and construction sites. From pre-occupation to post-occupation cleaning, we ensure spotless spaces. Contact us for a free quote today!"
        />
        <meta name="twitter:image" content="https://ravenandrebelcleaning.com/og-image.jpg" />
      </Head>
      <Nav isTerms={false} />
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
