import React from 'react';
import heroImage from "../assets/Man.jpg";
import wedding from "../assets/weddingimage.jpg";
import camera from "../assets/camera.jpg";
import weddingCard from "../assets/WEEDING.jpg";
import preweddingCard from "../assets/prewedding.jpg";
import travelCard from "../assets/living.jpg";

const Photography = () => {
  return (
    <div className="w-full max-w-[90%] mx-auto">
      {/* Hero Section */}
      <div id="hero" className="relative z-0 mt-8 w-full h-full max-w-[90%] mx-auto">
        <div className="relative w-full h-[60vh] sm:h-[60vh] mt-8 bg-black rounded-lg overflow-hidden">
          <img
            src={heroImage}
            alt="Hero"
            className="w-full h-full object-cover opacity-70"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 rounded-md"></div>
        </div>
        <div className="absolute top-0 w-full h-full flex flex-col justify-center items-center text-center gap-4 z-10 px-4 md:px-10">
          <div className="text-white">
            <h1 className="text-3xl md:text-4xl lg:text-5xl text-white font-bold tracking-wide">
              A Picture With Thousand Words
            </h1>
          </div>
        </div>
      </div>

      {/* Section 1 */}
      <section className="mx-auto max-w-[90%] max-w-screen-2xl px-4 md:px-8">
        <div className="mb-8 flex flex-wrap justify-between md:mb-16">
          <div className="mb-6 flex w-full flex-col justify-center sm:mb-12 lg:mb-0 lg:w-1/3 lg:pb-24 lg:pt-48">
            <h1 className="mb-4 text-4xl font-bold text-black sm:text-5xl md:mb-8 md:text-6xl">
              Book your<br />Shoot
            </h1>
            <p className="max-w-md leading-relaxed text-gray-500 xl:text-lg">
              This is a section of some simple filler text, also known as placeholder text. It shares characteristics of real text.
            </p>
          </div>
          <div className="mb-12 mt-8 flex w-full md:mb-16 lg:w-2/3 mx-auto max-w-[90%]">
            <div className="mx-auto max-w-[90%] relative left-12 top-12 z-10 -ml-12 overflow-hidden rounded-lg bg-gray-100 shadow-lg md:left-16 md:top-16 lg:ml-0">
              <img src={wedding} loading="lazy" alt="Skardu" className="h-full w-full object-cover object-center" />
            </div>
            <div className="overflow-hidden rounded-lg bg-gray-100 shadow-lg mx-auto max-w-[90%]">
              <img src={camera} loading="lazy" alt="Gilgit" className="h-full w-full object-cover object-center" />
            </div>
          </div>
        </div>
      </section>

      {/* Booking Cards Section */}
      <section className="max-w-screen-xl mx-auto px-4 py-16">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
          Book a Shoot
        </h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {/* Card 1 */}
          <div className="bg-white shadow-xl rounded-xl overflow-hidden hover:shadow-2xl transition-all duration-300">
            <img
              src={weddingCard}
              alt="Wedding Shoot"
              className="w-full h-60 object-cover"
              
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-gray-800">
                Wedding Shoot
              </h3>
              <p className="text-gray-600 text-sm mb-4">
                Elegant coverage of your special day, captured with timeless artistry.
              </p>
              <button className="bg-blue-400 hover:bg-rose-600 text-white px-5 py-2 rounded-lg text-sm font-medium">
                Book Now
              </button>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white shadow-xl rounded-xl overflow-hidden hover:shadow-2xl transition-all duration-300">
            <img
              src={preweddingCard}
              alt="Pre-Wedding Shoot"
              className="w-full h-60 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-gray-800">
                Pre-Wedding Shoot
              </h3>
              <p className="text-gray-600 text-sm mb-4">
                Tell your love story before the wedding with creative pre-shoots.
              </p>
              <button className="bg-blue-400 hover:bg-rose-600 text-white px-5 py-2 rounded-lg text-sm font-medium">
                Book Now
              </button>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-white shadow-xl rounded-xl overflow-hidden hover:shadow-2xl transition-all duration-300">
            <img
              src={travelCard}
              alt="Travel + Wedding Shoot"
              className="w-full h-60 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-gray-800">
                Travel Shoot
              </h3>
              <p className="text-gray-600 text-sm mb-4">
                Destination photography that blends your journey and love in epic frames.
              </p>
              <button className="bg-blue-400 hover:bg-rose-600 text-white px-5 py-2 rounded-lg text-sm font-medium">
                Book Now
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Photography;
