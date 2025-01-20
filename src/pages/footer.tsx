import React from "react";
import Link from "next/link";
import { FaFacebook, FaInstagram, FaEnvelope, FaTiktok } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-emerald-700 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          {/* Company Info */}
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h2 className="text-3xl font-bold">Raven and Rebel Cleaning Co.</h2>
            <p className="mt-4 text-sm">
              Our mission is to create clean, healthy, and safe environments for our clients. We
              believe that a clean space is essential for your well-being and productivity.
            </p>
            <div className="mt-4">
              <p>Phone: (123) 456-7890</p>
              <p>Email: info@ravenandrebel.com</p>
              <p>Address: 123 Clean St, Sparkle City, SC 12345</p>
            </div>
          </div>

          {/* Quick Links */}
          <div className="w-full md:w-1/3 mb-6 md:mb-0 text-center">
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul>
              <li className="mb-2">
                <Link href="#hero" className="hover:underline">
                  Home
                </Link>
              </li>
              <li className="mb-2">
                <Link href="#services" className="hover:underline">
                  Services
                </Link>
              </li>
              <li className="mb-2">
                <Link href="#about" className="hover:underline">
                  About Us
                </Link>
              </li>
              <li className="mb-2">
                <Link href="#testimonials" className="hover:underline">
                  Testimonials
                </Link>
              </li>
              <li className="mb-2">
                <Link href="#contact" className="hover:underline">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Follow Us */}
          <div className="w-full md:w-1/3 text-center md:text-right">
            <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
            <div className="flex justify-center md:justify-end space-x-4">
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-400"
              >
                <FaFacebook size={24} />
              </a>
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-400"
              >
                <FaInstagram size={24} />
              </a>
              <a href="mailto:info@ravenandrebel.com" className="hover:text-gray-400">
                <FaEnvelope size={24} />
              </a>
              <a
                href="https://www.tiktok.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-400"
              >
                <FaTiktok size={24} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
