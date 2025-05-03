import React, { useState } from "react";
import { Link } from "react-router-dom";
import Destination1 from "../assets/skg.jpg";
import Destination2 from "../assets/minimarg.jpg";
import Destination4 from "../assets/skg2.jpeg";
import Destination3 from "../assets/skhnz.jpg";
import info1 from "../assets/car(2).png";
import info2 from "../assets/hotel.png";
import info3 from "../assets/dish.png";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import { tourAdventure } from "../assets/data/Skardu_data_tour";
const Grouptour = () => {
  const data = [
    {
      image: Destination1,
      title: "Sakrdu",
      subTitle: "Six Days Trip To Skardu – Group Tour",
      cost: "00",
      duration: "6 Days",
    },
    {
      image: Destination2,
      title: "Minimarg",
      subTitle: "Six Days Trip To Minimarg – Group Tour",
      cost: "00",
      duration: "6 Days",
    },
    {
      image: Destination4,
      title: "Skardu",
      subTitle: "Seven Days Trip To Skardu – Group Tour",
      cost: "00",
      duration: "7 Days",
    },
    {
      image: Destination3,
      title: "Skardu + Hunza",
      subTitle: "Eight Days Trip To Skardu and Hunza – Group Tour",
      cost: "00",
      duration: "8 Days",
    },
  ];

  return (
    <div>
      <section className="py-8 max-w-[90%] mx-auto">
        <div className="text-center max-w-[90%] mx-auto">
          <h2 className="text-3xl font-bold mb-6">ADVENTURE TOURS</h2>
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
          {tourAdventure.map((destination, index) => (
            <SwiperSlide key={index} className="pb-12">
              <HoverCard  key={index} destination={destination} />
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="swiper-pagination"></div>
      </section>
    </div>
  );
};

const HoverCard = ({ destination }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative h-80 rounded-sm overflow-hidden shadow-ld group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Background Image */}
      <div className="absolute inset-0 transition-transform duration-500 ease-in-out group-hover:scale-105">
        <img
          src={destination.imageUrl || "/placeholder.svg"}
          alt={destination.title}
          className="w-full h-full object-cover"
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />

        {/* Hover Overlay */}
        <div
          className={`absolute inset-0 bg-black/40 transition-all duration-150 ease-in-out transform ${
            isHovered ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"
          }`}
        />
      </div>

      {/* Tour Info */}
      <div
        className={`absolute bottom-10 left-0 px-4 w-full text-white z-10 transition-all duration-300 ${
          isHovered ? "translate-y-[-60px]" : "translate-y-0"
        }`}
      >
        <p className="text-xs font-medium mb-1">
          {destination.duration} • Start From {destination.price}
        </p>
        <h3 className="text-md font-bold">{destination.subTitle}</h3>
      </div>

      {/* Icons */}
      <div
        className={`absolute bottom-16 left-3 z-10 flex space-x-2 transition-opacity duration-300 ${
          isHovered ? "opacity-100" : "opacity-0"
        }`}
      >
       
      </div>

      {/* Book Now Button */}
      <div
        className={`absolute left-3 bottom-3 w-full flex z-10 transition-all duration-300 ${
          isHovered ? "opacity-100 translate-y-[-40px]" : "opacity-0 translate-y-0"
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

export default Grouptour;
