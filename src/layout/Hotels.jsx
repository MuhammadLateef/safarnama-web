import { useNavigate } from "react-router-dom";
import HeroImage from "../assets/Hotel.jpg";
import cardImage7 from "../assets/hotels/baltistan-hotel.jpg";
import cardImage8 from "../assets/hotels/snowland-guest.jpg";
import cardImage9 from "../assets/hotels/mapple-resort.jpg";
import cardImage10 from "../assets/hotels/qayam-Skardu2.jpg";
import cardImage11 from "../assets/hotels/avari-hotel1.jpg";
import cardImage12 from "../assets/hotels/harriothotel.jpg";
import cardImage13 from "../assets/hotels/kesarhotel2.jpg";
import cardImage14 from "../assets/hotels/khoj-resort.jpg";
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



