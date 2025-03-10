import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { motion } from "framer-motion";

// Import hero image
import HeroImage from "../assets/Hotel.jpg";

// Import icons for the slider
import icon1 from "../assets/Hunzaicon.png";
import icon2 from "../assets/Skarduicon.png";
import icon3 from "../assets/Swaticon.png";
import icon4 from "../assets/Gilgiticon.jpg";
import icon5 from "../assets/Naranicon.png";

// Import unique images for the card section
import cardImage1 from "../assets/Islamabad.jpg";
// import cardImage2 from "../assets/SkarduHotel.jpg";
// import cardImage3 from "../assets/SwatHotel.jpg";
// import cardImage4 from "../assets/GilgitHotel.jpg";
// import cardImage5 from "../assets/NaranHotel.jpg";

const hotels = [
  { name: "Hunza", image: icon1, cardImage: cardImage1 },
  { name: "Swat", image: icon3, cardImage: cardImage1 },
  { name: "Skardu", image: icon2, cardImage: cardImage1 },
  { name: "Gilgit", image: icon4, cardImage: cardImage1 },
  { name: "Naran", image: icon5, cardImage: cardImage1 },
  { name: "Naran", image: icon5, cardImage: cardImage1 },
];

const HotelsPage = () => {
  return (
    <div className="w-full min-h-screen max-w-[90%] mx-auto">
      {/* Hero Section */}
      <div className="relative w-full h-[50vh] sm:h-[60vh] max-w-[90%] mx-auto mt-8 bg-black">
        <img
          src={HeroImage}
          alt="Hotels"
          className="w-full h-full object-cover rounded-md opacity-70"
        />
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="absolute inset-0 flex justify-center items-center text-white text-3xl sm:text-5xl font-bold text-center px-4"
        >
          Discover Amazing Hotels
        </motion.h1>
      </div>

      {/* Slider Section */}
      <div className="py-10 px-5">
        <h2 className="text-2xl sm:text-3xl font-bold mb-5 text-center">
          Hotels Available In
        </h2>
        <Swiper
          spaceBetween={20}
          slidesPerView={3}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          navigation={true}
          modules={[Navigation]}
          className="relative"
        >
          {hotels.map((hotel, index) => (
            <SwiperSlide key={index}>
              <div className="relative w-full h-40 sm:h-48 overflow-hidden">
                <img
                  src={hotel.image}
                  alt={hotel.name}
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="text-center mt-2">
                <h3 className="text-lg sm:text-xl font-bold">{hotel.name}</h3>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Cards Section */}
      <div className="py-10 px-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {hotels.map((hotel, index) => (
          <div
            key={index}
            className="relative w-full h-48 sm:h-56 rounded-xl overflow-hidden shadow-lg"
          >
            <img
              src={hotel.cardImage}
              alt={hotel.name}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40">
              <button className="bg-white text-black px-3 py-2 sm:px-4 sm:py-2 rounded-md font-bold hover:bg-gray-300">
                Find Hotels
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HotelsPage;
