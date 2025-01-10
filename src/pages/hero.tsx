import React from "react";
import "../styles/globals.css";
import Image from "next/image";

const Hero = () => {
  return (
    <>
      <div className="bg-emerald-600 container flex items-center justify-center h-screen mx-auto px-4 rounded-md relative overflow-hidden">
        <div className=" hero flex w-full h-full relative z-10">
          <div className="left-hero flex flex-col justify-center items-start p-8 w-1/2">
            <h2 className="text-7xl font-bold text-white pb-10">Raven and Rebel Cleaning Co.</h2>
            <h1 className="text-white text-2xl pb-5">
              Expert Cleaning Services for Homes, Offices, and Construction Sites.
            </h1>
            <p className="text-white text-sm pb-20">
              Raven and Rebel Cleaning Co. specializes in comprehensive cleaning solutions,
              including pre-occupation and post-occupation services, for homes, offices, and
              construction sites. Our dedicated team ensures every space is spotless, making
              transitions seamless and creating cleaner, more comfortable environments.
            </p>
            <button
              className="flex items-center justify-center bg-green-400 pr-10 pl-10 pb-7 pt-7 font-normal hover:font-semibold text-2xl hover:text-3xl rounded-md transition-all duration-500 ease-in-out"
              style={{ display: "flex", height: "2rem" }}
            >
              Get a quote
            </button>
          </div>
          <div className="right-hero w-1/2 h-full relative">
            <Image
              src={"/hero/heroMain2.jpg"}
              alt="Image of clean gloves with some detergent next to it."
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          </div>
        </div>
        <div className="bubbles absolute inset-0 overflow-hidden">
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
    </>
  );
};

export default Hero;
