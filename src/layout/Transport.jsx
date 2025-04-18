import React from 'react';
import transportHero from "../assets/transport-hero-img.jpg";
import carIcon from "../assets/Motorcar.jpg";
import vanIcon from "../assets/Suvcar.jpg";
import busIcon from "../assets/toyota car.jpg";

const Transportation = () => {
  return (
    <div className="w-full max-w-[90%] mx-auto">
      {/* Hero Section */}
      <div className="relative z-0 mt-8 w-full h-full max-w-[90%] mx-auto">
        <div className="relative w-full h-[60vh] sm:h-[60vh] mt-8 bg-black rounded-lg overflow-hidden">
          <img
            src={transportHero}
            alt="Transportation Hero"
            className="w-full h-full object-cover opacity-70"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 rounded-md"></div>
        </div>
        <div className="absolute top-0 w-full h-full flex flex-col justify-center items-center text-center gap-4 z-10 px-4 md:px-10">
          <div className="text-white">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-wide">
              Comfortable & Safe Journeys
            </h1>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <section className="max-w-screen-xl mx-auto px-4 py-16">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
          Choose Your Ride
        </h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {/* Car Card */}
          <div className="bg-white shadow-xl rounded-xl overflow-hidden hover:shadow-2xl transition-all duration-300">
            <img
              src={carIcon}
              alt="Car Transport"
              className="w-full h-60 object-contain p-6 bg-gray-50"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-gray-800">
                Private Car
              </h3>
              <p className="text-gray-600 text-sm mb-4">
                Ideal for couples and small groups, enjoy privacy and convenience.
              </p>
              <button className="bg-blue-400 hover:bg-green-600 text-white px-5 py-2 rounded-lg text-sm font-medium">
                Book Now
              </button>
            </div>
          </div>

          {/* Suv Card */}
          <div className="bg-white shadow-xl rounded-xl overflow-hidden hover:shadow-2xl transition-all duration-300">
            <img
              src={vanIcon}
              alt="Van Transport"
              className="w-full h-60 object-contain p-6 bg-gray-50"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-gray-800">
                SUV Car
              </h3>
              <p className="text-gray-600 text-sm mb-4">
              Comfortable and versatile SUVs ideal for exploring rugged terrains or enjoying city rides with extra space and style.              </p>
              <button className="bg-blue-400 hover:bg-green-600 text-white px-5 py-2 rounded-lg text-sm font-medium">
                Book Now
              </button>
            </div>
          </div>

          {/* toyota Card */}
          <div className="bg-white shadow-xl rounded-xl overflow-hidden hover:shadow-2xl transition-all duration-300">
            <img
              src={busIcon}
              alt="Bus Transport"
              className="w-full h-60 object-contain p-6 bg-gray-50"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-gray-800">
                Toyota Car
              </h3>
              <p className="text-gray-600 text-sm mb-4">
              Reliable and fuel-efficient Toyota vehicles, perfect for smooth city drives and comfortable long-distance travel.

</p>
              <button className="bg-blue-400 hover:bg-green-600 text-white px-5 py-2 rounded-lg text-sm font-medium">
                Book Now
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Transportation;
