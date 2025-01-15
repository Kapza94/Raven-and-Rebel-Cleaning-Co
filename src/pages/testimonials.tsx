import React from "react";
import "../styles/testimonials.css";
import Image from "next/image";

const Testimonials = () => {
  return (
    <div className="container mt-10 mx-auto px-4 py-8 flex flex-col items-start bg-gray-100 rounded-lg">
      <h3 className="text-2xl font-bold mb-6">See what our clients have to say?</h3>
      <div className="grid-container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="grid-item p-6 bg-white rounded-lg shadow-md flex flex-col justify-between">
          <div className="flex justify-center">
            <Image
              className="quote-icon"
              src="/icons/message.png"
              width={24}
              height={24}
              alt="Quote icon"
            />
          </div>
          <div className="flex items-start">
            <Image
              className="profile-img rounded-full mr-4 "
              src="/users/thandi.jpg"
              width={50}
              height={50}
              alt="Person image"
            />
            <p className="text-sm mt-2">
              Raven and Rebel Cleaning Co exceeded my expectations! They transformed my home into a
              spotless haven. Every corner was sparkling, and the attention to detail was amazing.
              Highly recommended!
            </p>
          </div>
          <p className="text-md font-semibold mt-4">
            Thandi <span className="text-sm font-light"> ~~from Sandton</span>
          </p>
        </div>
        <div className="grid-item p-6 bg-white rounded-lg shadow-md flex flex-col justify-between">
          <div className="flex justify-center">
            <Image
              className="quote-icon"
              src="/icons/message.png"
              width={24}
              height={24}
              alt="Quote icon"
            />
          </div>
          <div className="flex items-start">
            <Image
              className="profile-img rounded-full mr-4"
              src="/users/jonothan.jpg"
              width={50}
              height={50}
              alt="Person image"
            />
            <p className="text-sm mt-2">
              Our office in Rosebank has never looked better! The team from Raven and Rebel Cleaning
              Co is professional, reliable, and thorough. They&apos;ve made our workspace clean and
              inviting for both staff and clients.
            </p>
          </div>
          <p className="text-md font-semibold mt-4">
            Jonothan <span className="text-sm font-light"> ~~from Rosebank</span>
          </p>
        </div>
        <div className="grid-item p-6 bg-white rounded-lg shadow-md flex flex-col justify-between">
          <div className="flex justify-center">
            <Image
              className="quote-icon"
              src="/icons/message.png"
              width={24}
              height={24}
              alt="Quote icon"
            />
          </div>
          <div className="flex items-start">
            <Image
              className="profile-img rounded-full mr-4"
              src="/users/mandla.jpg"
              width={50}
              height={50}
              alt="Person image"
            />
            <p className="text-sm mt-2">
              We are a company of programmers and designers, and we don&apos;t have time to clean
              our office. Raven and Rebel Cleaning Co has been a lifesaver. They are professional,
              reliable, and do an excellent job every time. They are highly recommended!
            </p>
          </div>
          <p className="text-md font-semibold mt-4">
            Mandla <span className="text-sm font-light"> ~~from Melrose Arch</span>
          </p>
        </div>
        <div className="grid-item p-6 bg-white rounded-lg shadow-md flex flex-col justify-between">
          <div className="flex justify-center">
            <Image
              className="quote-icon"
              src="/icons/message.png"
              width={24}
              height={24}
              alt="Quote icon"
            />
          </div>
          <div className="flex items-start">
            <Image
              className="profile-img rounded-full mr-4"
              src="/users/nadia.jpg"
              width={50}
              height={50}
              alt="Person image"
            />
            <p className="text-sm mt-2">
              When we moved out of our home in Midrand, we wanted to leave it in great condition for
              the next occupants. The Raven and Rebel team handled the post-occupation cleaning
              perfectly, saving us so much time and hassle.
            </p>
          </div>
          <p className="text-md font-semibold mt-4">
            Thandi <span className="text-sm font-light"> ~~from Sandton</span>
          </p>
        </div>
        <div className="grid-item p-6 bg-white rounded-lg shadow-md flex flex-col justify-between">
          <div className="flex justify-center">
            <Image
              className="quote-icon"
              src="/icons/message.png"
              width={24}
              height={24}
              alt="Quote icon"
            />
          </div>
          <div className="flex items-start">
            <Image
              className="profile-img rounded-full mr-4"
              src="/users/rajesh.jpg"
              width={50}
              height={50}
              alt="Person image"
            />
            <p className="text-sm mt-2">
              Our carpets were looking tired and dull, but Raven and Rebel Cleaning Co brought them
              back to life! Their carpet cleaning service in Bryanston was efficient, eco-friendly,
              and left our home feeling brand new
            </p>
          </div>
          <p className="text-md font-semibold mt-4">
            Raj <span className="text-sm font-light"> ~~from Bryanston</span>
          </p>
        </div>
        <div className="grid-item p-6 bg-white rounded-lg shadow-md flex flex-col justify-between">
          <div className="flex justify-center">
            <Image
              className="quote-icon"
              src="/icons/message.png"
              width={24}
              height={24}
              alt="Quote icon"
            />
          </div>
          <div className="flex items-start">
            <Image
              className="profile-AVimg rounded-full mr-4"
              src="/users/greg.jpg"
              width={50}
              height={50}
              alt="Person image"
            />
            <p className="text-sm mt-2">
              I hired Raven and Rebel Cleaning Co before moving into my new house in Alberton, and I
              was so impressed. They made sure every room was clean and fresh, giving me peace of
              mind to move in without any worries
            </p>
          </div>
          <p className="text-md font-semibold mt-4">
            Luan <span className="text-sm font-light"> ~~from Alberton</span>
          </p>
        </div>
        {/* Add more testimonial cards as needed */}
      </div>
    </div>
  );
};

export default Testimonials;
