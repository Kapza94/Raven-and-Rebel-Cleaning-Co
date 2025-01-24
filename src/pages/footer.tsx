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
import Link from "next/link";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="color-mint text-white py-12 relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-color-mint/90 to-color-mint/70 z-0"></div>

      {/* Footer Content */}
      <div className=" mx-auto px-4 relative z-10">
        <div className="flex flex-wrap justify-between">
          {/* Company Info */}
          <div className="w-full md:w-1/3 mb-8 md:mb-0">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4 transform hover:scale-105 transition-transform duration-300">
              Raven and Rebel Cleaning Co.
            </h2>
            <p className="mt-4 text-sm text-gray-200 pr-20">
              Our mission is to create clean, healthy, and safe environments for our clients. We
              believe that a clean space is essential for your well-being and productivity.
            </p>
            <div className="mt-4 text-sm text-gray-200">
              <p className="hover:text-white transition-colors duration-300">
                Phone: +27 63 467 0864
              </p>
              <p className="hover:text-white transition-colors duration-300">
                Email: rrcleaningser@gmail.com
              </p>
              <p className="hover:text-white transition-colors duration-300">Address: Alberton</p>
            </div>
          </div>

          {/* Quick Links */}
          <div className="w-full md:w-1/3 mb-8 md:mb-0 text-center md:text-left">
            <h3 className="text-xl text-center font-semibold mb-4 transform hover:scale-105 transition-transform duration-300">
              Quick Links
            </h3>
            <ul className="flex flex-col text-center">
              <li onClick={scrollToHome} className="mb-2">
                <a className="hover:text-white hover:underline cursor-pointer transition-colors duration-300">
                  Home
                </a>
              </li>
              <li onClick={scrolltoServices} className="mb-2">
                <a className="hover:text-white hover:underline cursor-pointer transition-colors duration-300">
                  Services
                </a>
              </li>
              <li onClick={scrollToAbout} className="mb-2">
                <a className="hover:text-white hover:underline cursor-pointer transition-colors duration-300">
                  About Us
                </a>
              </li>
              <li onClick={scrollToTestimonials} className="mb-2">
                <a className="hover:text-white hover:underline cursor-pointer transition-colors duration-300">
                  Testimonials
                </a>
              </li>
              <li onClick={scrollToContact} className="mb-2">
                <a className="hover:text-white hover:underline cursor-pointer transition-colors duration-300">
                  Contact Us
                </a>
              </li>
              <Link href="/terms" className="hover:underline">
                Privacy Policy
              </Link>
            </ul>
          </div>

          {/* Follow Us */}
          <div className="w-full md:w-1/3 text-center md:text-right">
            <h3 className="text-xl font-semibold mb-4 transform hover:scale-105 transition-transform duration-300">
              Follow Us
            </h3>
            <div className="flex justify-center md:justify-end space-x-4">
              <a
                href="https://www.facebook.com/share/18Jt5uArSe/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors duration-300"
              >
                <FaFacebook size={24} />
              </a>
              <a
                href="https://www.instagram.com/ravenandrebelservices?igsh=ZjhkYmx4aWVjeXd5"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors duration-300"
              >
                <FaInstagram size={24} />
              </a>
              <a
                href="mailto:rrcleaningser@gmail.com"
                className="hover:text-white transition-colors duration-300"
              >
                <FaEnvelope size={24} />
              </a>
              <a
                href="https://www.tiktok.com/@ravenandrebelservices?_t=ZM-8tIrdYmZcEX&_r=1"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors duration-300"
              >
                <FaTiktok size={24} />
              </a>
              <a
                href="https://www.linkedin.com/company/raven-rebel-service-s/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors duration-300"
              >
                <FaLinkedin size={24} />
              </a>
            </div>
            <div className="flex justify-center md:justify-end pt-8">
              <Image
                src="/logos/R&RLOGO.jpg"
                width={150}
                height={150}
                alt="Raven and Rebel Logo"
                className="rounded-lg transform hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <p className="text-center mt-8 text-sm text-gray-300">
          © {currentYear} Raven and Rebel Services | Developed by{" "}
          <a
            href="https://github.com/Kapza94"
            className="hover:text-white hover:underline transition-colors duration-300"
          >
            Kapza Studio&apos;s
          </a>
        </p>
      </div>

      {/* Floating Bubbles Animation */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div key={i} className="bubble absolute bg-white/10 rounded-full"></div>
        ))}
      </div>
    </footer>
  );
};

export default Footer;
