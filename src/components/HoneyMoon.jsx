
// import React from 'react';
// import { useState } from "react";
// import Destination1 from "../assets/hard-rock.jpg";
// import Destination2 from "../assets/Honey-Sakrdu.jpeg";
// import Destination3 from "../assets/Byair.jpg";
// import Destination4 from "../assets/Hunzabyair.jpg";
// import info1 from "../assets/car(2).png";
// import info2 from "../assets/hotel.png";
// import info3 from "../assets/dish.png";
// import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/css';
// import 'swiper/css/pagination';
// import { Pagination } from 'swiper/modules';

// export default function HoneyMoon() {
//   const data = [
//     {
//       image: Destination1,
//       title: "Hunza + Skardu",
//       subTitle: "10 Days Honeymoon To Skardu and Hunza – By Air",
//       cost: "15,500",
//       duration: "10 Days 9 Nights",
//     },
   
//     {
//       image: Destination3,
//       title: "Skardu + Hunza",
//       subTitle: "10 Days Honeymoon Package to Skardu - By Air",
//       cost: "35000",
//       duration: "9 Days 8 Nights",
//     },
//     {
//       image: Destination2,
//       title: "Hunza + Skardu",
//       subTitle: "10 Days Honeymoon Hunza to Skardu - By Air",
//       cost: "25000",
//       duration: "10 Days 9 Nights",
//     },
//     {
//       image: Destination4,
//       title: "Hunza",
//       subTitle: "4 Days Honeymoon to Hunza - By Air",
//       cost: "35000",
//       duration: " 4 Days 5 Nights",
//     },
//   ];

//   return (
//     <section className="py-8 max-w-[90%] mx-auto">
//       <div className="text-center max-w-[90%] mx-auto">
//         <h2 className="text-3xl font-bold mb-6"> HONEY MOON TOURS</h2>
//       </div>
//       <Swiper
//         slidesPerView={1}
//         spaceBetween={20}
//         pagination={{ clickable: true }}
//         breakpoints={{
//           768: { slidesPerView: 2 },
//           1024: { slidesPerView: 3 },
//         }}
//         modules={[Pagination]}
//         className="px-6"
//       >
//         {data.map((destination, index) => (
//           <SwiperSlide key={index} className="pb-12">
//             <div className="p-4 bg-blue-50 rounded-lg shadow-lg transition-transform transform hover:-translate-y-4 hover:shadow-2xl">
//             <div className='w-full h-[300px] overflow-hidden'>
//   <img src={destination.image} alt={destination.title} className="w-full h-full object-cover rounded-md mb-4" />
// </div> 
//               <h3 className="text-xl font-semibold">{destination.title}</h3>
//               <p className="text-gray-600 mb-4">{destination.subTitle}</p>
//               <div className="flex justify-between items-center">
//                 <div className="flex space-x-2">
//                   <span className="w-10 h-10 rounded-full bg-purple-400 p-2">
//                     <img src={info1} alt="info" className="w-full h-full invert brightness-200" />
//                   </span>
//                   <span className="w-10 h-10 rounded-full bg-purple-400 p-2">
//                     <img src={info2} alt="info" className="w-full h-full invert brightness-200" />
//                   </span>
//                   <span className="w-10 h-10 rounded-full bg-purple-400 p-2">
//                     <img src={info3} alt="info" className="w-full h-full invert brightness-200" />
//                   </span>
//                 </div>
//               </div>
//               <div className="flex justify-between text-gray-600 mt-4">
//                 <span></span>
//                 <span>{destination.duration}</span>
//               </div>
//             </div>
//           </SwiperSlide>
//         ))}
//       </Swiper>
//       <div className="swiper-pagination"></div>
//     </section>
//   );
// }
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Destination1 from "../assets/hard-rock.jpg";
import Destination2 from "../assets/Honey-Sakrdu.jpeg";
import Destination3 from "../assets/Byair.jpg";
import Destination4 from "../assets/Hunzabyair.jpg";
import HoneyMoon1 from "../assets/honey-moon1.jpg";
import info1 from "../assets/car(2).png";
import info2 from "../assets/hotel.png";
import info3 from "../assets/dish.png";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

export default function HoneyMoon() {
  const data = [
    {
      image: HoneyMoon1,
      title: "Hunza",
      subTitle: "4 Days Honeymoon to Hunza - By Air",
      cost: "00",
      duration: "4 Days 5 Nights",
    },
    {
      image: Destination1,
      title: "Hunza + Skardu",
      subTitle: "10 Days Honeymoon To Skardu and Hunza – By Air",
      cost: "00",
      duration: "10 Days 9 Nights",
    },
    {
      image: Destination3,
      title: "Skardu + Hunza",
      subTitle: "10 Days Honeymoon Package to Skardu - By Air",
      cost: "00",
      duration: "9 Days 8 Nights",
    },
    {
      image: Destination2,
      title: "Hunza + Skardu",
      subTitle: "10 Days Honeymoon Hunza to Skardu - By Air",
      cost: "00",
      duration: "10 Days 9 Nights",
    },
    {
      image: Destination4,
      title: "Hunza",
      subTitle: "4 Days Honeymoon to Hunza - By Air",
      cost: "00",
      duration: "4 Days 5 Nights",
    },
   
  ];

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
        {data.map((destination, index) => (
          <SwiperSlide key={index} className="pb-12">
            <HoverCard destination={destination} />
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
      className="relative h-80 rounded-sm overflow-hidden shadow-lg group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Background Image */}
      <div className="absolute inset-0 transition-transform duration-500 ease-in-out group-hover:scale-105">
        <img
          src={destination.image}
          alt={destination.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
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
          {destination.duration} • Start From {destination.cost}
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
          to="#"
          className="bg-[#337ab7] hover:bg-blue-500 text-white text-sm font-normal py-1 px-3 transition-colors"
        >
          Book Now
        </Link>
      </div>
    </div>
  );
};
