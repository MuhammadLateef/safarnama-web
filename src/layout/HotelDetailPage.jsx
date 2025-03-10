import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import icon1 from "../assets/Hunzaicon.png";
import icon2 from "../assets/skarduicon.png";
import icon3 from "../assets/Swaticon.png";
import icon4 from "../assets/Gilgiticon.jpg";
import icon5 from "../assets/Naranicon.png";
import cardImage1 from "../assets/Islamabad.jpg";

const hotels = [
  { name: "hunza", image: icon1, cardImage: cardImage1, description: "A beautiful valley in the Gilgit-Baltistan region." },
  { name: "swat", image: icon3, cardImage: cardImage1, description: "Known as the Switzerland of Pakistan." },
  { name: "skardu", image: icon2, cardImage: cardImage1, description: "A gateway to some of the highest peaks in the world." },
  { name: "gilgit", image: icon4, cardImage: cardImage1, description: "A hub for adventure tourism and mountaineering." },
  { name: "naran", image: icon5, cardImage: cardImage1, description: "A popular tourist destination with beautiful lakes and valleys." },
];



const HotelDetailPage = () => {
  const { name } = useParams();
  const [hotel, setHotel] = useState(null);

  useEffect(() => {
    const foundHotel = hotels.find(h => h.name.toLowerCase() === name.toLowerCase());
    setHotel(foundHotel);
  }, [name]);

  if (!hotel) {
    return <h2 className="text-center text-2xl font-bold mt-10">Hotel not found</h2>;
  }

  return (
    <div className="w-full max-w-[90%] mx-auto py-10">
      <h1 className="text-3xl sm:text-4xl font-bold text-center mb-6">
        Hotels in {hotel.name.charAt(0).toUpperCase() + hotel.name.slice(1)}
      </h1>

      <div className="flex flex-col sm:flex-row items-center gap-6">
        <img src={hotel.cardImage} alt={hotel.name} className="w-full sm:w-1/2 h-64 object-cover rounded-xl shadow-lg" />
        <div className="text-lg sm:text-xl">
          <p>{hotel.description}</p>
          <button className="mt-4 bg-black text-white px-4 py-2 rounded-md hover:bg-gray-800">
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default HotelDetailPage;
