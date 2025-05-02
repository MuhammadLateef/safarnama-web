// // import { Swiper, SwiperSlide } from "swiper/react";
// // import { Autoplay, Pagination } from "swiper/modules";
// // import "swiper/css";
// // import "swiper/css/autoplay";
// // import "swiper/css/pagination";
// // import { motion } from "framer-motion";
// // import HeroImage from "../assets/Hotel.jpg";
// // import icon1 from "../assets/Hunzaicon.png";
// // import icon2 from "../assets/skarduicon.png";
// // import icon3 from "../assets/Swaticon.png";
// // import icon4 from "../assets/Gilgiticon.jpg";
// // import icon5 from "../assets/Naranicon.png";
// // import { useNavigate } from "react-router-dom";
// // import cardImage1 from "../assets/Islamabad.jpg";

// // const hotels = [
// //   { name: "Hunza", image: icon1, cardImage: cardImage1 },
// //   { name: "Swat", image: icon3, cardImage: cardImage1 },
// //   { name: "Skardu", image: icon2, cardImage: cardImage1 },
// //   { name: "Gilgit", image: icon4, cardImage: cardImage1 },
// //   { name: "Naran", image: icon5, cardImage: cardImage1 },
// //   { name: "Naran", image: icon5, cardImage: cardImage1 },
// // ];

// // const HotelsPage = () => {
// //   const navigate = useNavigate();
// //   return (
// //     <div className="w-full max-w-[90%] mx-auto">
// //       {/* Hero Section */}
// //       <div className="relative w-full h-[60vh] sm:h-[60vh] mt-8 bg-black rounded-lg overflow-hidden">
// //         <img
// //           src={HeroImage}
// //           alt="Hotels"
// //           className="w-full h-full object-cover opacity-70"
// //         />
// //         <motion.h1
// //           initial={{ opacity: 0, y: 50 }}
// //           animate={{ opacity: 1, y: 0 }}
// //           transition={{ duration: 1 }}
// //           className="absolute inset-0 flex justify-center items-center text-white text-3xl sm:text-5xl font-bold text-center px-4"
// //         >
// //           Discover Amazing Hotels
// //         </motion.h1>
// //       </div>

// //       {/* Slider Section */}
// //       <div className="py-10 px-5">
// //         <h2 className="text-2xl sm:text-3xl font-bold mb-5 text-center">
// //           Hotels Available In
// //         </h2>
// //         <Swiper
// //           spaceBetween={20}
// //           slidesPerView={3}
// //           autoplay={{ delay: 3000 }}
// //           loop={true}
// //           breakpoints={{
// //             640: { slidesPerView: 2 },
// //             1024: { slidesPerView: 3 },
// //           }}
// //           pagination={{ clickable: true }}
// //           modules={[Pagination, Autoplay]}
// //           className="relative "
// //         >
// //           {hotels.map((hotel, index) => (
// //             <SwiperSlide key={index} className="py-12">
// //               <div className="relative w-full h-40 sm:h-48 overflow-hidden">
// //                 <img
// //                   src={hotel.image}
// //                   alt={hotel.name}
// //                   className="w-full h-full object-contain"
// //                 />
// //               </div>
// //               <div className="text-center mt-2">
// //                 <h3 className="text-lg sm:text-xl font-bold">{hotel.name}</h3>
// //               </div>
// //             </SwiperSlide>
// //           ))}
// //         </Swiper>
// //       </div>

// //       {/* Cards Section */}
// //       {/* <div className="py-10 px-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
// //         {hotels.map((hotel, index) => (
// //           <div
// //             key={index}
// //             className="relative w-full h-48 sm:h-56 rounded-xl overflow-hidden shadow-lg"
// //           >
// //             <img
// //               src={hotel.cardImage}
// //               alt={hotel.name}
// //               className="w-full h-full object-cover"
// //             />
// //             <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40">
// //               <button className="bg-white text-black px-3 py-2 sm:px-4 sm:py-2 rounded-md font-bold hover:bg-gray-300">
// //                 Find Hotels
// //               </button>
// //             </div>
// //           </div>
// //         ))}
// //       </div> */}
// //       <div className="py-10 px-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
// //         {hotels.map((hotel, index) => (
// //           <div
// //             key={index}
// //             className="relative w-full h-48 sm:h-56 rounded-xl overflow-hidden shadow-lg"
// //           >
// //             <img
// //               src={hotel.cardImage}
// //               alt={hotel.name}
// //               className="w-full h-full object-cover"
// //             />
// //             <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40">
// //               <button
// //                 className="bg-white text-black px-3 py-2 sm:px-4 sm:py-2 rounded-md font-bold hover:bg-gray-300"
// //                 onClick={() => navigate(`/hotels/${hotel.name.toLowerCase()}`)}
// //               >
// //                 Find Hotels
// //               </button>
// //             </div>
// //           </div>
// //         ))}
// //       </div>
// //     </div>
// //   );
// // };

// // export default HotelsPage;


// import { useNavigate } from "react-router-dom";
// import cardImage1 from "../assets/Hunzabanner.jpg";
// import cardImage2 from "../assets/Hunzahotel1.jpg";
// import cardImage3 from "../assets/Hunzahotel2.webp";
// import cardImage4 from "../assets/Hunzahotel3.webp";
// import cardImage5 from "../assets/Hunzahotel4.webp";
// import cardImage6 from "../assets/Hunzahotel5.jpg";
// import HeroImage from "../assets/Hotel.jpg"; // Ensure HeroImage is imported

// const hotelsData = [
//   {
//     name: "hunza",
//     hotels: [
//       { title: "Mulberry Hotel Hunza", cardImage: cardImage1, description: "The hotel ensures enhanced cleaning with commercial-grade disinfectants." },
//       { title: "Old Hunza Inn", cardImage: cardImage2, description: "The hotel offers free parking, Wi-Fi, and breakfast with 24-hour front desk." },
//       { title: "Hunza Bliss Hotel", cardImage: cardImage3, description: "Hunza Bliss Hotel & Restaurant, the perfect spot for peace and tranquility!" },
//       { title: "Manasau Resort", cardImage: cardImage4, description: "A sustainable homestay set in Hunza, offering free parking and WiFi." },
//       { title: "Osho Beyaak", cardImage: cardImage5, description: "This accommodation offers a fully equipped kitchen, Wi-Fi, and security." },
//       { title: "Tourist Cottage Hunza", cardImage: cardImage6, description: "The hotel offers free parking, Wi-Fi, and breakfast with full-service laundry." },
//     ],
//   },
// ];

// const HotelsPage = () => {
//   const navigate = useNavigate();
//   return (
//     <div className="w-full max-w-[90%] mx-auto">
//       {/* Hero Section */}
//       <div className="relative w-full h-[60vh] sm:h-[60vh] mt-8 bg-black rounded-lg overflow-hidden">
//         <img
//           src={HeroImage}
//           alt="Hotels"
//           className="w-full h-full object-cover opacity-70"
//         />
//         {/* Tagline over the Hero Image */}
//         <div className="absolute inset-0 flex justify-center items-center text-white text-3xl sm:text-5xl font-bold text-center px-4">
//           <h1>Your Dream Hotel Awaits</h1>
//         </div>
//       </div>

//       {/* Cards Section */}
//       <div className="w-full max-w-[90%] mx-auto py-10">
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
//           {hotelsData[0].hotels.map((hotel, index) => (
//             <div key={index} className="border p-4 rounded-xl bg-purple-100 shadow-lg">
//               <img src={hotel.cardImage} alt={hotel.title} className="w-full h-44 object-cover rounded-xl" />
//               <h1 className="text-xl font-semibold mt-4">{hotel.title || "Hotel Name"}</h1>
//               <h2 className="text-lg mt-2">{hotel.description}</h2>
//               <div className="flex justify-center mt-4">
//                 <button className="bg-black text-white px-4 py-2 rounded-md hover:bg-gray-800">
//                   Book Now
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default HotelsPage;
import { useNavigate } from "react-router-dom";
import cardImage1 from "../assets/Hunzabanner.jpg";
import cardImage2 from "../assets/Hunzahotel1.jpg";
import cardImage3 from "../assets/Hunzahotel2.webp";
import cardImage4 from "../assets/Hunzahotel3.webp";
import cardImage5 from "../assets/Hunzahotel4.webp";
import cardImage6 from "../assets/Hunzahotel5.jpg";
import HeroImage from "../assets/Hotel.jpg";
import { Link } from "react-router-dom";

import cardImage7 from "../assets/hotels/baltistan-hotel.jpg";
import cardImage8 from "../assets/hotels/snowland-guest.jpg";
import cardImage9 from "../assets/hotels/mapple-resort.jpg";
import cardImage10 from "../assets/hotels/qayam-Skardu2.jpg";
import cardImage11 from "../assets/hotels/avari-hotel1.jpg";
import cardImage12 from "../assets/hotels/harriothotel.jpg";
import cardImage13 from "../assets/hotels/kesarhotel2.jpg";
import cardImage14 from "../assets/hotels/Khoj-resort.jpg";
import cardImage15 from "../assets/hotels/shangrillahotel.jpg";
import cardImage16 from "../assets/hotels/byrsahotel.jpg";
import cardImage17 from "../assets/hotels/himmelhotels.webp";
import cardImage18 from "../assets/hotels/riwaj-hotel.avif";


const hotelsData = [
  {
    name: "hunza",
    hotels: [
      {
        title: "Baltistan resort",
        cardImage: cardImage7,
        description:
          "The hotel ensures enhanced cleaning with commercial-grade disinfectants.",
      },
      {
        title: "Mapple resort",
        cardImage: cardImage9,
        description:
          "Hunza Bliss Hotel & Restaurant, the perfect spot for peace and tranquility!",
      },
      {
        title: "Qayaam hotel",
        cardImage: cardImage10,
        description:
          "A sustainable homestay set in Hunza, offering free parking and WiFi.",
      },
      {
        title: "Avari Xpress Skardu Hotel",
        cardImage: cardImage11,
        description:
          "This accommodation offers a fully equipped kitchen, Wi-Fi, and security.",
      },
      {
        title: "Harriot Hotel",
        cardImage: cardImage12,
        description:
          "The hotel offers free parking, Wi-Fi, and breakfast with full-service laundry.",
      },
      {
        title: "Kesar Palace Hotel & Restaurant",
        cardImage: cardImage13,
        description:
          "The hotel offers free parking, Wi-Fi, and breakfast with full-service laundry.",
      },
      {
        title: "Khoj Resorts Shigar",
        cardImage: cardImage14,
        description:
          "The hotel offers free parking, Wi-Fi, and breakfast with full-service laundry.",
      },
      {
        title: "Shangrilla resort",
        cardImage: cardImage15,
        description:
          "The hotel offers free parking, Wi-Fi, and breakfast with full-service laundry.",
      },
      {
        title: "Byrsa hotel",
        cardImage: cardImage16,
        description:
          "The hotel offers free parking, Wi-Fi, and breakfast with full-service laundry.",
      },
      {
        title: "Himmel hotel",
        cardImage: cardImage17,
        description:
          "The hotel offers free parking, Wi-Fi, and breakfast with full-service laundry.",
      },
      {
        title: "Riwaj hotel",
        cardImage: cardImage18,
        description:
          "The hotel offers free parking, Wi-Fi, and breakfast with full-service laundry.",
      },
      {
        title: "Snowland Guest House",
        cardImage: cardImage8,
        description:
          "The hotel offers free parking, Wi-Fi, and breakfast with 24-hour front desk.",
      },
    ],
  },
];

const HotelsPage = () => {
  const navigate = useNavigate();
  const phoneNumber = '923554713444'; 
  const message = 'Hello, I found your services through your website and I’m interested in booking a hotel. Kindly share the available rooms, prices, and how to proceed with the booking. Thanks!';

  const handleClick = () => {
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };
  return (
    <div className="w-full mx-auto">
      {/* Hero Section */}
      <div className="relative w-full h-[60vh] bg-black overflow-hidden">
        <img
          src={HeroImage}
          alt="Hotels"
          className="w-full h-full object-cover opacity-70"
        />
        <div className="absolute inset-0 flex justify-center items-center text-white text-3xl sm:text-5xl font-bold text-center px-4">
          <h1>Your Dream Hotel Awaits</h1>
        </div>
      </div>

      {/* Hotel Cards Section */}
      <div className="w-full max-w-[90%] mx-auto py-10">
        <div className="grid grid-cols-1 md:grid-cols-2  gap-6">
          {hotelsData[0].hotels.map((hotel, index) => (
            <div
              key={index}
              className="flex flex-col sm:flex-row border p-4 rounded-xl bg-purple-100 shadow-lg gap-4"
            >
              {/* Image */}
              <img
                src={hotel.cardImage}
                alt={hotel.title}
                className="w-full sm:w-1/2 h-44 sm:h-44 object-cover rounded-xl"
              />

              {/* Content */}
              <div className="flex flex-col justify-between w-full">
                <div>
                  {/* Hotel Name */}
                  <h1 className="text-xl font-bold text-gray-900">{hotel.title}</h1>

                  {/* Star Ratings */}
                  <div className="flex items-center mt-2">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className={`w-5 h-5 ${i < 4 ? "text-yellow-400" : "text-gray-300"}`}
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M10 15l-5.878 3.09 1.123-6.545L.49 6.91l6.574-.955L10 0l2.936 5.955 6.574.955-4.755 4.635 1.123 6.545z" />
                      </svg>
                    ))}
                    <span className="text-gray-600 ml-2 text-sm">4 Reviews</span>
                  </div>

                  {/* Description */}
                  <p className="mt-2 text-gray-700">{hotel.description}</p>


                  {/* Price */}
                  {/* <div>
                    <span className="text-2xl font-bold text-gray-900">$58.00</span>
                  </div> */}
                </div>

                {/* Book Button */}
                <div className="">
                  <button
                    onClick={handleClick}
                    className="px-3 py-2 bg-[#FAB12F] hover:bg-[#b89c6b] text-white font-medium rounded-lg shadow-lg transition-all transform hover:scale-105 flex items-center gap-3"
                  >
                    <span className="text-sm">Book Now</span>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path
                        fillRule="evenodd"
                        d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HotelsPage;



