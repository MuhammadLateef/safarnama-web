
import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from "react-helmet";

import Hunza from "../assets/hunza/altitfort.jpeg";
import { destinations } from './ExplorePakistan';
const Destination = () => {
// Only show the first 3 tours on the home page
  const destinations2 = destinations.slice(0, 6);

  return (
    <>
      <Helmet>
        <title>Top Travel Destinations in Gilgit-Baltistan | Explore Now</title>
        <meta name="description" content="Discover the most breathtaking tourist spots in Northern Pakistan including Hunza, Skardu, Gilgit, and more. Plan your adventure today!" />
        <meta name="keywords" content="Hunza, Skardu, Gilgit, Astore, Nagar, Deosai, travel, tourism, Pakistan, Northern areas, top destinations" />
        <meta property="og:title" content="Top Destinations in Northern Pakistan" />
        <meta property="og:description" content="Explore the scenic beauty and cultural richness of Gilgit-Baltistan's top destinations like Hunza Valley and Skardu." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={window.location.href} />
        <meta property="og:image" content={Hunza} />
      </Helmet>

      <section id="destinations" className="py-12 md:py-16 bg-slate-50">
        <div className="max-w-[90%] mx-auto container">
          <div className="flex flex-col items-center text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Top Destinations</h1>
            <p className="text-slate-600 max-w-2xl">
              Explore the breathtaking landscapes and cultural treasures of Northern Pakistan's most iconic destinations
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {destinations2.map((destination) => (
              <div
                key={destination.slug}
                className="group relative bg-white border rounded-sm overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <img
                  src={destination.image}
                  alt={`Image of ${destination.title}`}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-all duration-300"
                />
                <div className="absolute inset-0 bg-black bg-opacity-30 group-hover:bg-opacity-60 transition-all duration-300 flex flex-col justify-end p-4">
                  <div className="flex flex-col justify-end h-full">
                    <h2 className="text-2xl font-bold text-white mb-2 transform transition-all duration-300 group-hover:-translate-y-16 absolute bottom-0 left-0 p-4">
                      {destination.title}
                    </h2>
                    <div className="opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                      <p className="text-sm text-white">
                        {destination.description}
                      </p>
                      <Link
                        to={`/destinations/${destination.slug}`}
                        className="mt-2 inline-block text-sm font-semibold text-[#FAB12F]"
                      >
                        Explore →
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center pt-6 pb-8">
            <Link
              to="/explore-pakistan"
              className="px-6 py-2 bg-[#FAB12F] hover:bg-[#b89c6b] text-white font-medium rounded-lg shadow-lg transition-all transform hover:scale-105 flex items-center gap-3"
            >
              <span className="text-lg">Explore Gilgit Baltistan</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path
                  fillRule="evenodd"
                  d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Destination;
