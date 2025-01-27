import React from "react";
import Image from "next/image";
import { scrollToContact } from "../utils/scrollhandlers";

const Hero = () => {
  return (
    <div className="py-8 color-mint flex items-center justify-center min-h-screen mx-auto px-4 rounded-md relative overflow-hidden">
      <div className="hero flex flex-col-reverse md:flex-row w-full h-full relative z-10">
        {/* Left Section */}
        <div className="left-hero flex flex-col justify-center items-start w-full md:w-1/2 ">
          <h2 className="text-4xl md:text-6xl font-bold text-white pb-5 pt-5 md:pb-7">
            Raven and Rebel Cleaning Co.
          </h2>
          <h1 className="text-xl md:text-2xl text-white pb-3 md:pb-5">
            Expert Cleaning Services for Homes, Offices, and Construction Sites.
          </h1>
          <p className="text-sm md:text-md text-white pb-5 md:pb-10">
            Raven and Rebel Cleaning Co. specializes in professional cleaning services, offering
            comprehensive solutions for home cleaning, office cleaning, and construction site
            cleaning in Johannesburg. Our dedicated team provides pre-occupation cleaning and
            post-occupation cleaning to ensure every space is spotless. Whether you&apos;re moving
            into a new home, preparing an office for employees, or wrapping up a construction
            project, we make transitions seamless and create cleaner, more comfortable environments.
            <br />
            <br />
            Ready to experience the difference? Contact Raven and Rebel Cleaning Co. today for a
            free quote!
          </p>
          <button
            onClick={scrollToContact}
            className="quote-button bg-white px-6 py-2  md:px-8 md:py-4 font-normal hover:font-semibold hover:text-lg rounded-md transition-all duration-300 ease-in-out"
          >
            Get your quote now
          </button>
        </div>

        {/* Right Section (Image) */}
        <div className="right-hero w-full md:w-1/2 h-64 md:h-[600px] relative aspect-[16/9]">
          <div className="relative w-full h-full rounded-lg overflow-hidden">
            <Image
              src="/hero/HeroMain2.jpg"
              alt="Image of man cleaning office balcony glass"
              fill
              quality={100}
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              unoptimized // Disable Next.js image optimization
            />
          </div>
        </div>
      </div>

      {/* Bubbles Animation (Optional) */}
      <div className="bubbles">
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
      </div>
    </div>
  );
};

export default Hero;
