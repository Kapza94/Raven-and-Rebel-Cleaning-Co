// import React, { useEffect } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const testimonials = [
  {
    id: 1,
    text: "Raven and Rebel Cleaning Co exceeded my expectations! They transformed my home into a spotless haven. Every corner was sparkling, and the attention to detail was amazing. Highly recommended!",
    author: "Thandi",
    location: "Sandton",
    image: "/users/thandi.jpg",
  },
  {
    id: 2,
    text: "Our office in Rosebank has never looked better! The team from Raven and Rebel Cleaning Co is professional, reliable, and thorough. They've made our workspace clean and inviting for both staff and clients.",
    author: "Jonothan",
    location: "Rosebank",
    image: "/users/jonothan.jpg",
  },
  {
    id: 3,
    text: "We are a company of programmers and designers, and we don't have time to clean our office. Raven and Rebel Cleaning Co has been a lifesaver. They are professional, reliable, and do an excellent job every time. They are highly recommended!",
    author: "Mandla",
    location: "Melrose Arch",
    image: "/users/mandla.jpg",
  },
  {
    id: 4,
    text: "Our carpets were looking tired and dull, but Raven and Rebel Cleaning Co brought them back to life! Their carpet cleaning service in Bryanston was efficient, eco-friendly, and left our home feeling brand new.",
    author: "Nadia",
    location: "Bryanston",
    image: "/users/nadia.jpg",
  },
  {
    id: 5,
    text: "I hired Raven and Rebel Cleaning Co before moving into my new house in Alberton, and I was so impressed. They made sure every room was clean and fresh, giving me peace of mind to move in without any worries.",
    author: "Greg",
    location: "Alberton",
    image: "/users/greg.jpg",
  },
  {
    id: 6,
    text: "Raven and Rebel Cleaning Co. provided exceptional service. They were prompt, professional, and left my home looking spotless. I will definitely use their services again.",
    author: "Luan",
    location: "Bloemfontein",
    image: "/users/alex.jpg",
  },
];

const Testimonials = () => {
  return (
    <div className="mt-10 mx-auto px-4 py-8 flex flex-col items-center bg-gray-100 rounded-lg">
      <h3 className="text-2xl font-bold mb-6 text-center">See what our clients have to say?</h3>

      {/* Grid Layout for Larger Screens */}
      <div className="hidden sm:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-9/12">
        {testimonials.map((testimonial) => (
          <div
            key={testimonial.id}
            className="p-6 bg-white rounded-lg shadow-md flex flex-col justify-between"
          >
            <div className="flex justify-center mb-4">
              <Image
                className="quote-icon filter-green"
                src="/icons/message.png"
                width={24}
                height={24}
                alt="Quote icon"
              />
            </div>
            <div className="flex items-start mb-4">
              <Image
                className="profile-img rounded-full mr-4"
                src={testimonial.image}
                width={50}
                height={50}
                alt="Person image"
              />
              <p className="text-sm mt-2">{testimonial.text}</p>
            </div>
            <p className="text-md font-semibold mt-4">
              {testimonial.author}{" "}
              <span className="text-sm font-light">~~ from {testimonial.location}</span>
            </p>
          </div>
        ))}
      </div>

      {/* Slider for Smaller Screens */}
      <div className="sm:hidden w-full">
        <Swiper
          modules={[Autoplay, Pagination, Navigation]}
          spaceBetween={20}
          slidesPerView={1}
          autoplay={{ delay: 3000, disableOnInteraction: false, pauseOnMouseEnter: true }}
          pagination={{ clickable: true }}
          loop={true}
        >
          {testimonials.map((testimonial) => (
            <SwiperSlide key={testimonial.id}>
              <div className="p-6 bg-white rounded-lg shadow-md flex flex-col justify-between">
                <div className="flex justify-center mb-4">
                  <Image
                    className="quote-icon filter-green"
                    src="/icons/message.png"
                    width={24}
                    height={24}
                    alt="Quote icon"
                  />
                </div>
                <div className="flex items-start mb-4">
                  <Image
                    className="profile-img rounded-full mr-4"
                    src={testimonial.image}
                    width={50}
                    height={50}
                    alt="Person image"
                  />
                  <p className="text-sm mt-2">{testimonial.text}</p>
                </div>
                <p className="text-md font-semibold mt-4">
                  {testimonial.author}{" "}
                  <span className="text-sm font-light">~~ from {testimonial.location}</span>
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Testimonials;
