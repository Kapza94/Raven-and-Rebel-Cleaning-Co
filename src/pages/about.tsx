import React from "react";
import Image from "next/image";

const About = () => {
  return (
    <div className="mt-10 mx-auto px-4 py-8 flex flex-col items-center bg-gray-300 rounded-lg">
      {/* Image Section */}
      <div className="relative">
        <Image
          className="rounded-full border-solid border-4 about-us-color transform hover:scale-105 transition-transform duration-300"
          src="/about/AboutUsPic.jpg"
          width={200}
          height={200}
          alt="About Us"
        />
      </div>

      {/* Heading Section */}
      <h1 className="text-3xl sm:text-4xl font-bold mt-6 text-center">About Us</h1>

      {/* Paragraphs Section */}
      <div className="hidden sm:block">
        <p className="text-lg text-gray-700 mt-4 px-80 text-center">
          <span className="font-bold">Raven and Rebel Cleaning Co</span> is a professional cleaning
          company that offers a range of services to keep your spaces spotless and inviting. Our
          team of experienced cleaners is dedicated to providing exceptional service to our clients.
          We take pride in our work and strive to exceed your expectations with every clean.
        </p>
        <p className="text-lg text-gray-700 mt-4 px-80  text-center">
          Our mission is to create clean, healthy, and safe environments for our clients. We believe
          that a clean space is essential for your well-being and productivity. Whether you need
          regular cleaning services for your home or office, we have the expertise to meet your
          needs.
        </p>
      </div>

      {/* Shortened Text for Smaller Screens (Responsive) */}
      <div className="block sm:hidden">
        <p className="text-base text-gray-700 mt-4 text-center">
          <span className="font-bold">Raven and Rebel Cleaning Co</span> is a professional cleaning
          company dedicated to creating clean, healthy, and safe environments. Our experienced team
          provides exceptional services for homes and offices, ensuring your spaces are spotless and
          inviting. We take pride in exceeding your expectations with every clean.
        </p>
      </div>
    </div>
  );
};

export default About;
