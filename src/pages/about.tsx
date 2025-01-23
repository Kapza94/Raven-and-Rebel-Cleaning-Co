import React from "react";
import Image from "next/image";
//removed imports
const About = () => {
  return (
    <div className="container mt-10 mx-auto px-4 py-8 flex flex-col items-center bg-gray-100 rounded-lg">
      <div className="relative">
        <Image
          className="rounded-full border-solid border-4 about-us-color transform hover:scale-105 transition-transform duration-300"
          src="/about/AboutUsPic.jpg"
          width={200}
          height={200}
          alt="House icon"
        />
      </div>
      <h1 className="text-4xl font-bold mt-6">About Us</h1>
      <p className="text-lg text-gray-700 mt-4 text-center">
        <span className="font-bold">Raven and Rebel Cleaning Co</span> is a professional cleaning
        company that offers a range of services to keep your spaces spotless and inviting. Our team
        of experienced cleaners is dedicated to providing exceptional service to our clients. We
        take pride in our work and strive to exceed your expectations with every clean.
      </p>
      <p className="text-lg text-gray-700 mt-4 text-center">
        Our mission is to create clean, healthy, and safe environments for our clients. We believe
        that a clean space is essential for your well-being and productivity. Whether you need
        regular cleaning services for your home or office, we have the expertise to meet your needs.
      </p>
    </div>
  );
};

export default About;
