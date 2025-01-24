import React, { useState } from "react";
import { FaRegEnvelope, FaUser } from "react-icons/fa";

import emailjs from "emailjs-com";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSent, setIsSent] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    //EmailJS service ID, template ID, and public Key
    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      console.error("EmailJS service ID, template ID, or public key is missing.");
      return;
    }

    //create a new objec that contains template parameters
    const templateParams = {
      from_name: name,
      from_email: email,
      to_name: "Raven and Rebel Cleaning Co.",
      message: message,
    };
    //send the email using the emailJS send method
    emailjs
      .send(serviceId, templateId, templateParams, publicKey)
      .then((response) => {
        console.log("Email was sent successfully", response);
        setIsSent(true);
        setName("");
        setEmail("");
        setMessage("");
      })
      .catch((error) => {
        console.log("Email was not sent", error);
      });
  };

  return (
    <div className="wrapper">
      <div className="thank-you-msg">
        {isSent && (
          <div
            className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative"
            role="alert"
          >
            <strong className="font-bold">Thank you for contacting us!</strong>
            <span className="block sm:inline">We will get back to you as soon as possible.</span>
          </div>
        )}
      </div>
      <div className="form mx-auto px-4 py-8 flex flex-col items-center bg-white rounded-lg">
        <h2 className="text-3xl font-bold mb-6">Contact Us</h2>
        <form onSubmit={handleSubmit} className="w-full max-w-lg">
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
              Name
            </label>
            <div className="relative">
              <span>
                <FaUser className="input-icon" />
              </span>
              <input
                type="text"
                placeholder="Full name "
                id="name"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="input-field bg-gray-100 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                required
              />
            </div>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
              Email
            </label>
            <div className="relative">
              <FaRegEnvelope className="input-icon" />
              <input
                type="email"
                id="email"
                placeholder="Your email here..."
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className=" input-field bg-gray-100 shadow appearance-none border rounded w-full py-2  text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                required
              />
            </div>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
              Message
            </label>
            <textarea
              id="message"
              placeholder="Your message here..."
              name="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="input-field-msg bg-gray-100 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              id="submit-button"
              type="submit"
              className="dark-mint hover:dark-mint-btn-hvr text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
