import React from "react";
import "../styles/globals.css";
import Image from "next/image";

const Hero = () => {
  return (
    <>
      <div className="bg-lime-800 container flex items-center justify-center h-screen mx-auto px-4 rounded-md">
        <div className=" hero flex w-full h-full">
          <div className="left-hero flex flex-col justify-center items-start p-8 w-1/2">
            <h2 className="text-7xl font-bold text-white pb-10">Raven and Rebel Cleaning Co.</h2>
            <h1 className="text-white text-2xl pb-10">
              Expert Cleaning Services for Homes, Offices, and Construction Sites.
            </h1>
            <p className="text-white text-sm">
              Raven and Rebel Cleaning Co. specializes in comprehensive cleaning solutions,
              including pre-occupation and post-occupation services, for homes, offices, and
              construction sites. Our dedicated team ensures every space is spotless, making
              transitions seamless and creating cleaner, more comfortable environments.
            </p>
            <button></button>
          </div>
          <div className="right-hero w-1/2 h-full relative">
            <Image
              src={"/hero/heroMainImg.jpg"}
              alt="Image of clean gloves with some detergent next to it."
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
