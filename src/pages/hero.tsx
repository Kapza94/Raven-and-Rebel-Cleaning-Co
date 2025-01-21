import React from "react";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="color-mint container flex items-center justify-center h-screen mx-auto px-4 rounded-md relative overflow-hidden">
      <div className="hero flex flex-col md:flex-row w-full h-full relative z-10">
        <div className="left-hero flex flex-col justify-center items-start p-8 w-full md:w-1/2">
          <h2 className="text-4xl md:text-7xl font-bold text-white pb-5 md:pb-10">
            Raven and Rebel Cleaning Co.
          </h2>
          <h1 className="text-xl md:text-2xl text-white pb-3 md:pb-5">
            Expert Cleaning Services for Homes, Offices, and Construction Sites.
          </h1>
          <p className="text-sm md:text-md text-white pb-10 md:pb-20">
            Raven and Rebel Cleaning Co. specializes in comprehensive cleaning solutions, including
            pre-occupation and post-occupation services, for homes, offices, and construction sites.
            Our dedicated team ensures every space is spotless, making transitions seamless and
            creating cleaner, more comfortable environments.
          </p>
          <button className="quote-button bg-white px-6 py-3 md:px-8 md:py-4 font-normal hover:font-semibold hover:text-lg rounded-md transition-all duration-300 ease-in-out">
            Get your quote now
          </button>
        </div>
        <div className="right-hero w-full md:w-1/2 h-64 md:h-full relative">
          <Image
            src={"/hero/heroMain2.jpg"}
            alt="Image of clean gloves with some detergent next to it."
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
          />
        </div>
      </div>
      <div className="bubbles">
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
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
