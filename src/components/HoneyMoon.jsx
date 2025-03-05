
import React from 'react';
import { useState } from "react";
import Destination1 from "../assets/hard-rock.jpg";
import Destination2 from "../assets/hard-rock.jpg";
import Destination3 from "../assets/hard-rock.jpg";
import info1 from "../assets/car.png";
import info2 from "../assets/info2.png";
import info3 from "../assets/info3.png";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

export default function HoneyMoon() {
  const data = [
    {
      image: Destination1,
      title: "Hunza + Sakrdu",
      subTitle: "10 Days Honeymoon To Skardu and Hunza – By Air",
      cost: "15,500",
      duration: "10 Days 9 Nights",
    },
    {
      image: Destination2,
      title: "Hunza + Sakrdu",
      subTitle: "10 Days Honeymoon Hunza to Skardu By-Road",
      cost: "25000",
      duration: "10 Days 9 Nights",
    },
    {
      image: Destination3,
      title: "Sakrdu + Hunza",
      subTitle: "10 Days Honeymoon Package to Skardu By Air",
      cost: "35000",
      duration: "9 Days 8 Nights",
    },
    {
      image: Destination3,
      title: "Sakrdu",
      subTitle: "10 Days Honeymoon Package to Skardu By-Road",
      cost: "35000",
      duration: "10 Days 9 Nights",
    },
  ];

  return (
    <section className="py-8 max-w-[90%] mx-auto">
      <div className="text-center max-w-[90%] mx-auto">
        <h2 className="text-3xl font-bold mb-6">Honey Moon Tours</h2>
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
        {data.map((destination, index) => (
          <SwiperSlide key={index} className="pb-12">
            <div className="p-4 bg-purple-100 rounded-lg shadow-lg transition-transform transform hover:-translate-y-4 hover:shadow-2xl">
              <img src={destination.image} alt={destination.title} className="w-full rounded-md mb-4" />
              <h3 className="text-xl font-semibold">{destination.title}</h3>
              <p className="text-gray-600 mb-4">{destination.subTitle}</p>
              <div className="flex justify-between items-center">
                <div className="flex space-x-2">
                  <img src={info1} alt="info" className="w-10 h-10 rounded-full bg-purple-400 p-2" />
                  <img src={info2} alt="info" className="w-10 h-10 rounded-full bg-purple-400 p-2" />
                  <img src={info3} alt="info" className="w-10 h-10 rounded-full bg-purple-400 p-2" />
                </div>
              </div>
              <div className="flex justify-between text-gray-600 mt-4">
                <span></span>
                <span>{destination.duration}</span>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="swiper-pagination"></div>
    </section>
  );
}

