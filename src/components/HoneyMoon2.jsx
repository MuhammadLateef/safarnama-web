import React from 'react'

import { useState } from "react";
import Destination1 from "../assets/Byroadhunza.jpeg";
import Destination2 from "../assets/byroad2.jpg";
import Destination4 from "../assets/byroad3.jpg";
import info1 from "../assets/car(2).png";
import info2 from "../assets/hotel.png";
import info3 from "../assets/dish.png";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
const HoneyMoon2 = () => {
    const data = [
        {
          image: Destination1,
          title: "Hunza + Skardu",
          subTitle: "10 Days To Skardu and Hunza – By Road",
          cost: "15,500",
          duration: "10 Days 9 Nights",
        },
       
      
        {
          image: Destination2,
          title: "Skardu",
          subTitle: "10 Days Package to Skardu By Road",
          cost: "25000",
          duration: "10 Days 9 Nights",
        },
        {
          image: Destination4,
          title: "Deosai + Astore",
          subTitle: "4 Days package to Astore and Deosai By Road",
          cost: "35000",
          duration: " 4 Days 5 Nights",
        },
      ];
    
  return (
    <div>
       <section className="py-8 max-w-[90%] mx-auto">
            <div className="text-center max-w-[90%] mx-auto">
              <h2 className="text-3xl font-bold mb-6"> FAMILY  TOURS</h2>
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
                  <div className='w-full h-[300px] overflow-hidden'>
        <img src={destination.image} alt={destination.title} className="w-full h-full object-cover rounded-md mb-4" />
      </div> 
                    <h3 className="text-xl font-semibold">{destination.title}</h3>
                    <p className="text-gray-600 mb-4">{destination.subTitle}</p>
                    <div className="flex justify-between items-center">
                      <div className="flex space-x-2">
                        <span className="w-10 h-10 rounded-full bg-purple-400 p-2">
                          <img src={info1} alt="info" className="w-full h-full invert brightness-200" />
                        </span>
                        <span className="w-10 h-10 rounded-full bg-purple-400 p-2">
                          <img src={info2} alt="info" className="w-full h-full invert brightness-200" />
                        </span>
                        <span className="w-10 h-10 rounded-full bg-purple-400 p-2">
                          <img src={info3} alt="info" className="w-full h-full invert brightness-200" />
                        </span>
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
    </div>
  )
}

export default HoneyMoon2
