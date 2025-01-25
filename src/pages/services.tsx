import React from "react";
import { Pagination, Scrollbar, Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { IoChevronBackCircleOutline, IoChevronForwardCircleOutline } from "react-icons/io5";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import Image from "next/image";

const Services = () => {
  return (
    <div className=" mx-auto px-4 py-8 flex flex-col items-center bg-gray-100 rounded-lg">
      {/* Header Section */}
      <div className="pt-5 pb-5 w-full rounded-lg">
        <h2 className="text-center text-3xl sm:text-4xl font-bold textx-center mb-6 mt-6 text-gray-800">
          Our Services
        </h2>
        <p className="text-center text-base sm:text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
          Discover our range of professional cleaning services designed to keep your spaces spotless
          and inviting.
        </p>

        {/* Promo Items Section */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          <div className="promo-item flex items-center justify-center p-4 bg-white rounded-lg shadow-sm">
            <Image
              className="whitesmoke-filter pr-2 w-8 h-8 sm:w-10 sm:h-10 object-contain"
              src="/icons/house-icon.png"
              width={40}
              height={40}
              alt="House icon"
            />
            <h3 className="text-lg text-white sm:text-xl font-extrabold">
              40+
              <span className="text-sm text-white sm:text-base font-light"> Houses Cleaned</span>
            </h3>
          </div>
          <div className="promo-item flex items-center justify-center p-4 bg-white rounded-lg shadow-sm">
            <Image
              className="whitesmoke-filter pr-2 w-8 h-8 sm:w-10 sm:h-10 object-contain"
              src="/icons/office-icon.png"
              width={40}
              height={40}
              alt="Office icon"
            />
            <h3 className="text-lg text-white sm:text-xl font-extrabold">
              50+
              <span className="text-sm text-white sm:text-base font-light"> Offices Cleaned</span>
            </h3>
          </div>
          <div className="promo-item flex items-center justify-center p-4 bg-white rounded-lg shadow-sm">
            <Image
              className="whitesmoke-filter pr-2 w-8 h-8 sm:w-10 sm:h-10 object-contain"
              src="/icons/people-icon.png"
              width={40}
              height={40}
              alt="People icon"
            />
            <h3 className="text-lg text-white sm:text-xl font-extrabold">
              200+
              <span className="text-sm text-white sm:text-base font-light"> Happy Clients</span>
            </h3>
          </div>
          <div className="promo-item flex items-center justify-center  bg-white rounded-lg shadow-sm">
            <Image
              className="whitesmoke-filter pr-2 w-8 h-8 sm:w-10 sm:h-10 object-contain"
              src="/icons/quote-icon.png"
              width={40}
              height={40}
              alt="Quote icon"
            />
            <h3 className="text-lg text-white sm:text-xl font-extrabold">
              50+
              <span className="text-sm text-white sm:text-base font-light"> Quotes Provided</span>
            </h3>
          </div>
        </div>
      </div>

      <Swiper
        className="container mx-auto"
        modules={[Navigation, Pagination, Scrollbar, Autoplay]}
        autoplay={{ delay: 3000, disableOnInteraction: false, pauseOnMouseEnter: true }}
        // speed={2000}
        // navigation
        spaceBetween={20}
        slidesPerView={1}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
        }}
        navigation={{
          prevEl: ".swiper-button-prev",
          nextEl: ".swiper-button-next",
        }}
        pagination={{ clickable: true }}
        loop={true}
      >
        <SwiperSlide>
          <div className="card">
            <Image
              className="card-style"
              src="/cards/home.jpg"
              width={400}
              height={200}
              alt="Picture of the author"
            />
            <h2 className="tracking-wide text-2xl m-5 font-bold">Home cleaning</h2>
            <p className="pr-4 pl-8 text-base font-normal text-white/80 leading-relaxed">
              Transform your home with our Full Home Cleaning service. We clean and sanitize
              bedrooms, living areas, kitchens, and bathrooms, leaving every corner spotless.
              Perfect for regular upkeep, we make your space fresh and inviting.
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="card">
            <Image
              className="card-style"
              src="/cards/office.jpg"
              width={400}
              height={200}
              alt="Picture of the author"
            />
            <h2 className="tracking-wide text-2xl m-5 font-bold">Office cleaning</h2>
            <p className="pr-4 pl-8 text-base font-normal text-white/80 leading-relaxed">
              Keep your workspace spotless with our Office Cleaning service. We clean desks, floors,
              common areas, and restrooms, ensuring a professional environment. Perfect for regular
              maintenance or deep cleans, we create a healthier, inviting office.
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="card">
            <Image
              className="card-style"
              src="/cards/carpetcleaning.jpg"
              width={400}
              height={200}
              alt="Picture of the author"
            />
            <h2 className="tracking-wide text-2xl m-5 font-bold">Carpet cleaning</h2>
            <p className="pr-4 pl-8 text-base font-normal text-white/80 leading-relaxed">
              Refresh your carpets with our Carpet Cleaning service. We use professional equipment
              and eco-friendly solutions to remove dirt, stains, and allergens, leaving your carpets
              clean and fresh. Perfect for regular maintenance or deep cleans, we help extend the
              life of your carpets and create a healthier home.
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="card">
            <Image
              className="card-style"
              src="/cards/postconstruction.jpg"
              width={400}
              height={200}
              alt="Picture of the author"
            />
            <h2 className="tracking-wide text-2xl m-5 font-bold">Post Construction cleaning</h2>
            <p className="pr-4 pl-8 text-base font-normal text-white/80 leading-relaxed">
              Make your new or renovated space move-in ready with our Post-Construction Cleaning
              service. We remove dust, debris, and residue from all surfaces, ensuring a spotless
              finish. Ideal for homes, offices, and renovation projects.
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="card">
            <Image
              className="card-style"
              src="/cards/postoccupationcleaning.jpg"
              width={400}
              height={200}
              alt="Picture of the author"
            />
            <h2 className="tracking-wide text-2xl m-5 font-bold">Post Occupation cleaning</h2>
            <p className="pr-4 pl-8 text-base font-normal text-white/80 leading-relaxed">
              Leave your old space spotless with our Post-Occupation Cleaning service. We clean and
              sanitize every room, removing dust, grime, and residues. Perfect for homes and
              offices, we provide a fresh start for new occupants.
            </p>
          </div>
        </SwiperSlide>
        <>
          <div className={"swiper-button-prev rounded-right"}>
            <IoChevronBackCircleOutline />
          </div>
          <div className={`swiper-button-next rounded-left `}>
            <IoChevronForwardCircleOutline />
          </div>
        </>
      </Swiper>
    </div>
  );
};

export default Services;
