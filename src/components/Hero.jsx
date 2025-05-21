
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  mainImage1,
  mainImage2,
  mainImage3,
  mainImage4,
  mainImage5,
  mainImage6
} from "../Index";
const words = ["Travel", "Discover", "Experience", "Adventure"];
const images = [
  mainImage1,
  mainImage2,
  mainImage3,
  mainImage4,
  mainImage5,
  mainImage6];

export default function Hero() {
  const [index, setIndex] = useState(0);
  const [imgIndex, setImgIndex] = useState(0);
  const [formData, setFormData] = useState({
    name: "",
    checkin: "",
    checkout: "",
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { name, checkin, checkout } = formData;

    // Format message for WhatsApp
    const whatsappMessage =
      `*Name :* ${name}%0a` +
      `*Check in :* ${checkin}%0a` +
      `*Check out :* ${checkout}%0a`;

    // Replace with your WhatsApp number
    const whatsappUrl = `https://wa.me/923401557615?text=${whatsappMessage}`;

    // Open WhatsApp in new tab
    window.open(whatsappUrl, '_blank').focus();
  };
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
      setImgIndex((prev) => (prev + 1) % images.length);
    }, 3000); // Change every 3 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div id="hero" className="relative z-0 w-full h-full mx-auto">
      {/* Background Image with Overlay */}
      <div className="relative h-full">
        <img
          src={images[imgIndex]}
          alt="Hero"
          className="w-full h-[560px] md:h-[500px] lg:h-[700px] object-fill transition-opacity duration-700"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 rounded-md"></div>
      </div>

      {/* Hero Content */}
      <div className="absolute top-0 w-full h-full flex flex-col justify-center items-center text-center gap-4 z-10 px-4 md:px-10">
        <div className="text-white">
          <h1 className="text-3xl md:text-4xl lg:text-5xl text-white font-bold tracking-wide">
            It's Time to{" "}
            <motion.span
              key={index}
              className="text-[#FAB12F]"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.8 }}
            >
              {words[index]}
            </motion.span>{" "}
            Gilgit Baltistan
          </h1>
          <p className="my-7 text-sm md:text-md lg:text-lg px-4 md:px-20 lg:px-48">
            From mesmerizing natural wonders to vibrant cityscapes, we curate exceptional travel experiences that cater to every explorer.
          </p>
        </div>

        {/* Booking Form */}
        <form onSubmit={handleSubmit} className="bg-white opacity-90 p-4 rounded-md flex flex-col md:flex-row gap-4 items-center w-full max-w-4xl z-20">

          <div className="flex flex-col w-full md:w-1/4">
            <label className="text-blue-900 text-lg">Where you want to go</label>
            <input
              type="text"
              id="name"
              required
              value={formData.name}
              onChange={handleChange}
              placeholder="Search Your location"
              className="text-center border border-gray-300 placeholder:text-grey-700 rounded-md px-2 py-1 w-full focus:outline-blue-500"
            />
          </div>


          <div className="flex flex-col md:flex-row gap-4 w-full md:w-3/4">

            <div className="flex flex-col w-full md:w-1/3">
              <label className="text-blue-900 text-lg">Check-in</label>
              <input
                id="checkin"
                required
                value={formData.checkin}
                onChange={handleChange}
                type="date"
                className="text-center border border-gray-300 rounded-md px-2 py-1 w-full focus:outline-blue-500"
              />
            </div>

            <div className="flex flex-col w-full md:w-1/3">
              <label className="text-blue-900 text-lg">Check-out</label>
              <input
                id="checkout"
                required
                value={formData.checkout}
                onChange={handleChange}
                type="date"
                className="text-center border border-gray-300 rounded-md px-2 py-1 w-full focus:outline-blue-500"
              />
            </div>
            <div className="w-full md:w-1/3 flex justify-center md:justify-end">
              <button type="submit" className="bg-blue-600 text-white py-2 px-4 rounded-md uppercase text-lg transition duration-300 hover:bg-blue-900 w-full md:w-auto">
                Explore Now
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
