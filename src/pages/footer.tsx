import React from "react";
import { FaFacebook, FaInstagram, FaEnvelope, FaTiktok, FaLinkedin } from "react-icons/fa";
import Image from "next/image";
import {
  scrollToHome,
  scrollToAbout,
  scrollToContact,
  scrolltoServices,
  scrollToTestimonials,
} from "../utils/scrollhandlers";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="dark-mint text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          {/* Company Info */}
          <div className="w-full md:w-1/3 mb-8 md:mb-0">
            <h2 className="text-2xl sm:text-3xl font-bold">Raven and Rebel Cleaning Co.</h2>
            <p className="mt-4 text-sm">
              Our mission is to create clean, healthy, and safe environments for our clients. We
              believe that a clean space is essential for your well-being and productivity.
            </p>
            <div className="mt-4 text-sm">
              <p>Phone: (123) 456-7890</p>
              <p>Email: rrcleaningser@gmail.com</p>
              <p>Address: Alberton</p>
            </div>
          </div>

          {/* Quick Links */}
          <div className="w-full md:w-1/3 mb-8 md:mb-0 text-center md:text-left">
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul>
              <li onClick={scrollToHome} className="mb-2">
                <a className="hover:underline cursor-pointer">Home</a>
              </li>
              <li onClick={scrolltoServices} className="mb-2">
                <a className="hover:underline cursor-pointer">Services</a>
              </li>
              <li onClick={scrollToAbout} className="mb-2">
                <a className="hover:underline cursor-pointer">About Us</a>
              </li>
              <li onClick={scrollToTestimonials} className="mb-2">
                <a className="hover:underline cursor-pointer">Testimonials</a>
              </li>
              <li onClick={scrollToContact} className="mb-2">
                <a className="hover:underline cursor-pointer">Contact Us</a>
              </li>
            </ul>
          </div>

          {/* Follow Us */}
          <div className="w-full md:w-1/3 text-center md:text-right">
            <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
            <div className="flex justify-center md:justify-end space-x-4">
              <a
                href="https://www.facebook.com/share/18Jt5uArSe/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-400"
              >
                <FaFacebook size={24} />
              </a>
              <a
                href="https://www.instagram.com/ravenandrebelservices?igsh=ZjhkYmx4aWVjeXd5"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-400"
              >
                <FaInstagram size={24} />
              </a>
              <a href="mailto:rrcleaningser@gmail.com" className="hover:text-gray-400">
                <FaEnvelope size={24} />
              </a>
              <a
                href="https://www.tiktok.com/@ravenandrebelservices?_t=ZM-8tIrdYmZcEX&_r=1"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-400"
              >
                <FaTiktok size={24} />
              </a>
              <a
                href="https://www.linkedin.com/company/raven-rebel-service-s/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-400"
              >
                <FaLinkedin size={24} />
              </a>
            </div>
            <div className="flex justify-center md:justify-end pt-8">
              <Image
                src="/icons/R&R.png"
                width={150}
                height={150}
                alt="Raven and Rebel Logo"
                className="rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
      <p className="text-center mt-8 text-sm text-gray-300">
        © {currentYear} Raven and Rebel Cleaning Co | Developed by{" "}
        <a href="https://github.com/Kapza94" className="hover:underline">
          Your Name
        </a>
      </p>
    </footer>
  );
};

export default Footer;
