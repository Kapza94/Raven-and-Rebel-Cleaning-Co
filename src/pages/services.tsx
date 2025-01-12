import React from "react";
import Slider from "react-slick";
import "../styles/globals.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Services = () => {
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 3,
    speed: 500,
  };
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-8">Our Services</h1>
      {/* <div>
        <div>Services</div>
        <div className="card-holder flex justify-between">
          <Slider {...settings}>
            <div className="card bg-slate-500">
              <h2 className="text-2xl">Full Home cleaning</h2>
              <p>
                Transform your home with our Full Home Cleaning service. We thoroughly clean and
                sanitize bedrooms, living areas, kitchens, and bathrooms, leaving every corner
                spotless. Perfect for regular upkeep or pre- and post-move cleaning, we make your
                space fresh, clean, and inviting.
              </p>
            </div>
            <div className="card bg-slate-500">
              <h2 className="text-2xl">Office cleaning</h2>
              <p>
                Keep your workspace spotless and productive with our Office Cleaning service. We
                handle everything from desks and floors to common areas and restrooms, ensuring a
                clean and professional environment. Perfect for regular maintenance or one-time deep
                cleans, we help create a healthier, more inviting office for your team and clients
              </p>
            </div>
            <div className="card bg-slate-500">
              <h2 className="text-2xl">Carpet cleaning</h2>
              <p>
                Refresh your carpets with our Carpet Cleaning service. We use professional-grade
                equipment and eco-friendly solutions to remove dirt, stains, and allergens, leaving
                your carpets clean and fresh. Perfect for regular maintenance or one-time deep
                cleans, we help extend the life of your carpets and create a healthier home
                environment.
              </p>
            </div>
            <div className="card bg-slate-500">
              <h2 className="text-2xl">Post construction cleaning</h2>
              <p>
                Make your newly built or renovated space move-in ready with our professional
                Post-Construction Cleaning service. We expertly remove dust, debris, and leftover
                construction residue from all surfaces, ensuring a spotless and polished finish.
                Ideal for homes, offices, and renovation projects, our detailed cleaning transforms
                your space into a clean, safe, and welcoming environment.
              </p>
            </div>
            <div className="card bg-slate-500">
              <h2 className="text-2xl">Post Occupation cleaning</h2>
              <p>
                Leave your old space spotless and ready for the next occupants with our professional
                Post-Occupation Cleaning service. We thoroughly clean and sanitize every room,
                removing dust, grime, and residues to ensure the property looks its best. Perfect
                for homes and offices, our detailed cleaning provides a fresh start for new
                occupants while saving you time and effort.
              </p>
            </div>
          </Slider>
        </div>
      </div> */}

      <div className="slider-container">
        <Slider {...settings}>
          <div className="card">
            <h2 className="text-2xl">Post Occupation cleaning</h2>
            <p>
              Leave your old space spotless and ready for the next occupants with our professional
              Post-Occupation Cleaning service. We thoroughly clean and sanitize every room,
              removing dust, grime, and residues to ensure the property looks its best. Perfect for
              homes and offices, our detailed cleaning provides a fresh start for new occupants
              while saving you time and effort.
            </p>
          </div>
          <div className="card">
            <h2 className="text-2xl">Office cleaning</h2>
            <p>
              Keep your workspace spotless and productive with our Office Cleaning service. We
              handle everything from desks and floors to common areas and restrooms, ensuring a
              clean and professional environment. Perfect for regular maintenance or one-time deep
              cleans, we help create a healthier, more inviting office for your team and clients
            </p>
          </div>
          <div className="card">
            <h2 className="text-2xl">Carpet cleaning</h2>
            <p>
              Refresh your carpets with our Carpet Cleaning service. We use professional-grade
              equipment and eco-friendly solutions to remove dirt, stains, and allergens, leaving
              your carpets clean and fresh. Perfect for regular maintenance or one-time deep cleans,
              we help extend the life of your carpets and create a healthier home environment.
            </p>
          </div>
          <div className="card">
            <h2 className="text-2xl">Post construction cleaning</h2>
            <p>
              Make your newly built or renovated space move-in ready with our professional
              Post-Construction Cleaning service. We expertly remove dust, debris, and leftover
              construction residue from all surfaces, ensuring a spotless and polished finish. Ideal
              for homes, offices, and renovation projects, our detailed cleaning transforms your
              space into a clean, safe, and welcoming environment.
            </p>
          </div>
          <div className="card">
            <h2 className="text-2xl">Post Occupation cleaning</h2>
            <p>
              Leave your old space spotless and ready for the next occupants with our professional
              Post-Occupation Cleaning service. We thoroughly clean and sanitize every room,
              removing dust, grime, and residues to ensure the property looks its best. Perfect for
              homes and offices, our detailed cleaning provides a fresh start for new occupants
              while saving you time and effort.
            </p>
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default Services;
