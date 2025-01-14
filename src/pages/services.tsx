import React from "react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "../styles/globals.css";
import "../styles/services.css";
import Image from "next/image";
import { useEffect } from "react";

const Services = () => {
  useEffect(() => {
    // Set the swiper navigation size dynamically
    document.documentElement.style.setProperty("--swiper-navigation-size", "20px");
  }, []);
  return (
    <>
      <div className="container mx-auto px-4 py-8 flex flex-col items-start">
        <h1 className="text-4xl font-bold text-center mb-8">Our Services</h1>{" "}
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={50}
          slidesPerView={3}
          navigation
          pagination={{ clickable: true }}
          // scrollbar={{ draggable: true }}
          loop={true}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log("slide change")}
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
                Keep your workspace spotless with our Office Cleaning service. We clean desks,
                floors, common areas, and restrooms, ensuring a professional environment. Perfect
                for regular maintenance or deep cleans, we create a healthier, inviting office.
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
              <p className="pr-4 pl-8 text-base font-normal text-white/70 leading-relaxed">
                Refresh your carpets with our professional Carpet Cleaning service, removing dirt,
                stains, and allergens. Perfect for regular maintenance or deep cleaning to extend
                your carpet&apos;s life and keep your home fresh.
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
              <h2 className="tracking-wide text-2xl m-5 font-bold">Post construction cleaning</h2>
              <p className="pr-4 pl-8 text-base font-normal text-white/80 leading-relaxed">
                Our Post-Construction Cleaning service removes dust, debris, and residue from newly
                built or renovated spaces. Ideal for making your home or office spotless and move-in
                ready.
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
                Leave your old space spotless with our Post-Occupation Cleaning service, thoroughly
                cleaning and sanitizing every area. Perfect for providing a fresh, clean start for
                new occupants in homes or offices.
              </p>
            </div>
          </SwiperSlide>
          ...
        </Swiper>
      </div>
    </>
  );
};

export default Services;
