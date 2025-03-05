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

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Raven and Rebel Cleaning Co.",
    image: "https://ravenandrebelcleaning.com/logo.jpg",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Alberton",
      addressLocality: "Alberton",
      addressRegion: "Johannesburg",
      postalCode: "1447",
      addressCountry: "South Africa",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "-26.260070",
      longitude: "28.127828",
    },
    telephone: "+27 63 467 0864",
    url: "https://ravenandrebelcleaning.com",
    priceRange: "$$",
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "17:00",
    },
    review: {
      "@type": "Review",
      reviewRating: {
        "@type": "Rating",
        ratingValue: "5",
        bestRating: "5",
      },
      author: {
        "@type": "Person",
        name: "John Doe",
      },
    },
  };
  return (
    <>
      {/* Add SEO Meta Tags */}
      <Head>
        <title>Raven and Rebel Cleaning Co. | Professional Cleaning Services</title>

        <meta
          name="google-site-verification"
          content="g-abV7Ux6p4YPW4z_83unxZr2SXsE0_kEWgLIdwCEuQ"
        />
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

        <script type="application/ld+json">{JSON.stringify(schemaData)}</script>
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
