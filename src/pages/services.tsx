import React from "react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "../styles/globals.css";
import "../styles/about.css";

const Services = () => {
  return (
    <>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={50}
        slidesPerView={3}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
      >
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-4xl font-bold text-center mb-8">Our Services</h1>
          <div className="slider-container"></div>
          <SwiperSlide>
            <div className="card">
              <h2 className="text-2xl">Home cleaning</h2>
              <p>
                Transform your home with our Full Home Cleaning service. We thoroughly clean and
                sanitize bedrooms, living areas, kitchens, and bathrooms, leaving every corner
                spotless. Perfect for regular upkeep or pre- and post-move cleaning, we make your
                space fresh, clean, and inviting.
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="card">
              <h2 className="text-2xl">Office cleaning</h2>
              <p>
                Keep your workspace spotless and productive with our Office Cleaning service. We
                handle everything from desks and floors to common areas and restrooms, ensuring a
                clean and professional environment. Perfect for regular maintenance or one-time deep
                cleans, we help create a healthier, more inviting office for your team and clients
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="card">
              <h2 className="text-2xl">Office cleaning</h2>
              <p>
                Keep your workspace spotless and productive with our Office Cleaning service. We
                handle everything from desks and floors to common areas and restrooms, ensuring a
                clean and professional environment. Perfect for regular maintenance or one-time deep
                cleans, we help create a healthier, more inviting office for your team and clients
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="card">
              <h2 className="text-2xl">Post construction cleaning</h2>
              <p>
                Make your newly built or renovated space move-in ready with our professional
                Post-Construction Cleaning service. We expertly remove dust, debris, and leftover
                construction residue from all surfaces, ensuring a spotless and polished finish.
                Ideal for homes, offices, and renovation projects, our detailed cleaning transforms
                your space into a clean, safe, and welcoming environment.
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="card">
              <h2 className="text-2xl">Post Occupation cleaning</h2>
              <p>
                Leave your old space spotless and ready for the next occupants with our professional
                Post-Occupation Cleaning service. We thoroughly clean and sanitize every room,
                removing dust, grime, and residues to ensure the property looks its best. Perfect
                for homes and offices, our detailed cleaning provides a fresh start for new
                occupants while saving you time and effort.
              </p>
            </div>
          </SwiperSlide>
          ...
        </div>
      </Swiper>
      {/* <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center mb-8">Our Services</h1>
        <div className="slider-container"> */}
      {/* <div className="card">
            <h2 className="text-2xl">Home cleaning</h2>
            <p>
              Transform your home with our Full Home Cleaning service. We thoroughly clean and
              sanitize bedrooms, living areas, kitchens, and bathrooms, leaving every corner
              spotless. Perfect for regular upkeep or pre- and post-move cleaning, we make your
              space fresh, clean, and inviting.
            </p>
          </div> */}
      {/* <div className="card">
            <h2 className="text-2xl">Office cleaning</h2>
            <p>
              Keep your workspace spotless and productive with our Office Cleaning service. We
              handle everything from desks and floors to common areas and restrooms, ensuring a
              clean and professional environment. Perfect for regular maintenance or one-time deep
              cleans, we help create a healthier, more inviting office for your team and clients
            </p>
          </div> */}
      {/* <div className="card">
            <h2 className="text-2xl">Carpet cleaning</h2>
            <p>
              Refresh your carpets with our Carpet Cleaning service. We use professional-grade
              equipment and eco-friendly solutions to remove dirt, stains, and allergens, leaving
              your carpets clean and fresh. Perfect for regular maintenance or one-time deep cleans,
              we help extend the life of your carpets and create a healthier home environment.
            </p>
          </div> */}
      {/* <div className="card">
            <h2 className="text-2xl">Post construction cleaning</h2>
            <p>
              Make your newly built or renovated space move-in ready with our professional
              Post-Construction Cleaning service. We expertly remove dust, debris, and leftover
              construction residue from all surfaces, ensuring a spotless and polished finish. Ideal
              for homes, offices, and renovation projects, our detailed cleaning transforms your
              space into a clean, safe, and welcoming environment.
            </p>
          </div> */}
      {/* <div className="card">
            <h2 className="text-2xl">Post Occupation cleaning</h2>
            <p>
              Leave your old space spotless and ready for the next occupants with our professional
              Post-Occupation Cleaning service. We thoroughly clean and sanitize every room,
              removing dust, grime, and residues to ensure the property looks its best. Perfect for
              homes and offices, our detailed cleaning provides a fresh start for new occupants
              while saving you time and effort.
            </p>
          </div> */}
      {/* </div>
      </div> */}
    </>
  );
};

export default Services;
