
import React, { useState } from "react";
import { Link } from "react-router-dom";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { tourHanimoon } from "../assets/data/Skardu_data_tour";
export default function HoneyMoon() {
  
  return (
    <section className="py-8 max-w-[90%] mx-auto">
      <div className="text-center max-w-[90%] mx-auto">
        <h2 className="text-3xl font-bold mb-6">HONEY MOON TOURS</h2>
      </div>
      <Swiper
        slidesPerView={1}
        spaceBetween={20}
        pagination={{ clickable: true }}
        breakpoints={{
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        modules={[Pagination]}
        className="px-6"
      >
        {tourHanimoon.map((destination, index) => (
          <SwiperSlide key={index} className="pb-12">
            <HoverCard key={index.id} destination={destination} />
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="swiper-pagination"></div>
    </section>
  );
}

const HoverCard = ({ destination }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative h-[400px] rounded-sm overflow-hidden shadow-lg group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Background Image */}
      <div className="absolute inset-0 transition-transform duration-500 ease-in-out group-hover:scale-105">
        <img
          src={destination.imageUrl}
          alt={destination.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
        <div
          className={`absolute inset-0 bg-black/40 transition-all duration-150 ease-in-out transform ${isHovered ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"
            }`}
        />
      </div>

      {/* Tour Info */}
      <div
        className={`absolute bottom-10 left-0 px-4 w-full text-white z-10 transition-all duration-300 ${isHovered ? "translate-y-[-60px]" : "translate-y-0"
          }`}
      >
        <p className="text-xs font-medium mb-1">
          {destination.duration} • Start From {destination.cost}
        </p>
        <h3 className="text-md font-bold">{destination.subTitle}</h3>
      </div>

      {/* Icons */}
      <div
        className={`absolute bottom-16 left-3 z-10 flex space-x-2 transition-opacity duration-300 ${isHovered ? "opacity-100" : "opacity-0"
          }`}
      >

      </div>

      {/* Book Now Button */}
      <div
        className={`absolute left-3 bottom-3 w-full flex z-10 transition-all duration-300 ${isHovered ? "opacity-100 translate-y-[-40px]" : "opacity-0 translate-y-0"
          }`}
      >
        <Link
          to={`/tour/${destination.id}`}
          className="bg-[#337ab7] hover:bg-blue-500 text-white text-sm font-normal py-1 px-3 transition-colors"
        >
          Book Now
        </Link>
      </div>
    </div>
  );
};
