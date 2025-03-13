





// import { useParams } from "react-router-dom";
// import { useEffect, useState } from "react";
// import icon1 from "../assets/Hunzabanner.jpg";
// import icon2 from "../assets/skarduicon.png";
// import icon3 from "../assets/Swaticon.png";
// import icon4 from "../assets/Gilgiticon.jpg";
// import icon5 from "../assets/Naranicon.png";

// import cardImage1 from "../assets/Hunzahotel1.jpg";
// import cardImage2 from "../assets/Hunzahotel2.webp";
// import cardImage3 from "../assets/Hunzahotel3.webp";
// import cardImage4 from "../assets/Hunzahotel4.webp";
// import cardImage5 from "../assets/Hunzahotel5.jpg";

// const hotelsData = [
//   {
//     name: "hunza",
//     image: icon1, // Banner image
//     hotels: [
//       { title: "Mulberry Hotel Hunza", cardImage: cardImage1, description: "The hotel ensures enhanced cleaning with commercial-grade disinfectants, trained staff, and protective gear. Physical distancing is maintained with limited occupancy and safety dividers." },
//       { title: "Old Hunza Inn", cardImage: cardImage2, description: "The hotel offers free parking, Wi-Fi, and breakfast. A 24-hour front desk and full-service laundry are available. Amenities include a restaurant, room service, child-friendly services." },
//       { title: "Hunza Bliss Hotel", cardImage: cardImage3, description: "Hunza Bliss Hotel & Restaurant, the perfect spot for peace and tranquility! Take a break from the hustle and bustle of your daily life and escape to our mountain paradise." },
//       { title: "Manasau Resort - Deluxe Double Room", cardImage: cardImage4, description: "A sustainable homestay set in Hunza, Manasau Resort features a garden. This property offers access to a terrace, free private parking and free WiFi. The homestay features family rooms." },
//       { title: "Osho Beyaak", cardImage: cardImage5, description: "This accommodation offers a fully equipped kitchen, Wi-Fi, linens, towels, a private entrance, 24-hour security, free parking, a balcony, a garden, professional cleaning, and essential amenities for a comfortable stay." },
//       { title: "Tourist Cottage Hunza", cardImage: cardImage2, description: "The hotel offers free parking, Wi-Fi, and breakfast. It features a restaurant, room service, a 24-hour front desk, and full-service laundry. Amenities include private bathrooms, a local shuttle, and pet-friendly services." },
//     ],
//   },
//   {
//     name: "swat",
//     image: icon3,
//     hotels: [
//       { title: "Swat Resort", cardImage: cardImage1, description: "Resort with scenic river views." },
//       { title: "Swat Inn", cardImage: cardImage1, description: "Family-friendly hotel with modern amenities." },
//     ],
//   },
//   {
//     name: "skardu",
//     image: icon2,
//     hotels: [
//       { title: "Mountain Lodge", cardImage: cardImage1, description: "Eco-lodge near the mountains." },
//       { title: "Skardu Retreat", cardImage: cardImage1, description: "Luxury lakeside resort." },
//     ],
//   },
//   {
//     name: "gilgit",
//     image: icon4,
//     hotels: [
//       { title: "Gilgit Central", cardImage: cardImage1, description: "Central hotel with easy access to attractions." },
//       { title: "Royal Gilgit", cardImage: cardImage1, description: "Boutique hotel with excellent dining options." },
//     ],
//   },
//   {
//     name: "naran",
//     image: icon5,
//     hotels: [
//       { title: "Valley View Lodge", cardImage: cardImage1, description: "Lodge with breathtaking valley views." },
//       { title: "Lake Cabins", cardImage: cardImage1, description: "Cozy cabins near Saif-ul-Malook Lake." },
//     ],
//   },
// ];

// const HotelDetailPage = () => {
//   const { name } = useParams();
//   const [cityHotels, setCityHotels] = useState(null);

//   useEffect(() => {
//     if (!name) return;
//     const foundCity = hotelsData.find(h => h.name.toLowerCase() === name.toLowerCase());
//     setCityHotels(foundCity || null);
//   }, [name]);

//   if (!cityHotels) {
//     return <h2 className="text-center text-2xl font-bold mt-10">No hotels found for {name || "this location"}</h2>;
//   }

//   return (
//     <div className="w-full mt-8">
//       {/* Banner with Heading */}
//       <div className="relative w-full  h-64">
//         <img src={cityHotels.image} alt={cityHotels.name} className="w-full h-full  object-cover max-w-[90%] mx-auto md rounded brightness-50" />
//         <div className="absolute inset-0 flex items-center justify-center mt-8">
//           <h1 className="text-white text-3xl sm:text-4xl font-bold">
//             Hotels in {cityHotels.name.charAt(0).toUpperCase() + cityHotels.name.slice(1)}
//           </h1>
//         </div>
//       </div>

//       {/* Hotel List */}
//       <div className="w-full max-w-[90%] mx-auto py-10">
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//           {cityHotels.hotels.map((hotel, index) => (
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

// export default HotelDetailPage;
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import icon1 from "../assets/Hunzabanner.jpg";
import icon2 from "../assets/skarduicon.png";
import icon3 from "../assets/Swaticon.png";
import icon4 from "../assets/Gilgiticon.jpg";
import icon5 from "../assets/Naranicon.png";
import cardImage1 from "../assets/Hunzahotel1.jpg";
import cardImage2 from "../assets/Hunzahotel2.webp";
import cardImage3 from "../assets/Hunzahotel3.webp";
import cardImage4 from "../assets/Hunzahotel4.webp";
import cardImage5 from "../assets/Hunzahotel5.jpg";
import cardImage6 from "../assets/Hunzahotel6.webp";

const hotelsData = [
  {
    name: "hunza",
    image: icon1,
    hotels: [
      { title: "Mulberry Hotel Hunza", cardImage: cardImage1, description: "The hotel ensures enhanced cleaning with commercial-grade disinfectants." },
      { title: "Old Hunza Inn", cardImage: cardImage2, description: "The hotel offers free parking, Wi-Fi, and breakfast with 24-hour front desk." },
      { title: "Hunza Bliss Hotel", cardImage: cardImage3, description: "Hunza Bliss Hotel & Restaurant, the perfect spot for peace and tranquility!" },
      { title: "Manasau Resort", cardImage: cardImage4, description: "A sustainable homestay set in Hunza, offering free parking and WiFi." },
      { title: "Osho Beyaak", cardImage: cardImage5, description: "This accommodation offers a fully equipped kitchen, Wi-Fi, and security." },
      { title: "Tourist Cottage Hunza", cardImage: cardImage6, description: "The hotel offers free parking, Wi-Fi, and breakfast with full-service laundry." },
    ],
  },
  {
    name: "swat",
    image: icon1,
    hotels: [
      { title: "Mulberry Hotel Hunza", cardImage: cardImage1, description: "The hotel ensures enhanced cleaning with commercial-grade disinfectants." },
      { title: "Old Hunza Inn", cardImage: cardImage2, description: "The hotel offers free parking, Wi-Fi, and breakfast with 24-hour front desk." },
      { title: "Hunza Bliss Hotel", cardImage: cardImage3, description: "Hunza Bliss Hotel & Restaurant, the perfect spot for peace and tranquility!" },
      { title: "Manasau Resort", cardImage: cardImage4, description: "A sustainable homestay set in Hunza, offering free parking and WiFi." },
      { title: "Osho Beyaak", cardImage: cardImage5, description: "This accommodation offers a fully equipped kitchen, Wi-Fi, and security." },
      { title: "Tourist Cottage Hunza", cardImage: cardImage6, description: "The hotel offers free parking, Wi-Fi, and breakfast with full-service laundry." },
    ],
  },
  {
    name: "skardu",
    image: icon1,
    hotels: [
      { title: "Mulberry Hotel Hunza", cardImage: cardImage1, description: "The hotel ensures enhanced cleaning with commercial-grade disinfectants." },
      { title: "Old Hunza Inn", cardImage: cardImage2, description: "The hotel offers free parking, Wi-Fi, and breakfast with 24-hour front desk." },
      { title: "Hunza Bliss Hotel", cardImage: cardImage3, description: "Hunza Bliss Hotel & Restaurant, the perfect spot for peace and tranquility!" },
      { title: "Manasau Resort", cardImage: cardImage4, description: "A sustainable homestay set in Hunza, offering free parking and WiFi." },
      { title: "Osho Beyaak", cardImage: cardImage5, description: "This accommodation offers a fully equipped kitchen, Wi-Fi, and security." },
      { title: "Tourist Cottage Hunza", cardImage: cardImage6, description: "The hotel offers free parking, Wi-Fi, and breakfast with full-service laundry." },
    ],
  },
  {
    name: "gilgit",
    image: icon1,
    hotels: [
      { title: "Mulberry Hotel Hunza", cardImage: cardImage1, description: "The hotel ensures enhanced cleaning with commercial-grade disinfectants." },
      { title: "Old Hunza Inn", cardImage: cardImage2, description: "The hotel offers free parking, Wi-Fi, and breakfast with 24-hour front desk." },
      { title: "Hunza Bliss Hotel", cardImage: cardImage3, description: "Hunza Bliss Hotel & Restaurant, the perfect spot for peace and tranquility!" },
      { title: "Manasau Resort", cardImage: cardImage4, description: "A sustainable homestay set in Hunza, offering free parking and WiFi." },
      { title: "Osho Beyaak", cardImage: cardImage5, description: "This accommodation offers a fully equipped kitchen, Wi-Fi, and security." },
      { title: "Tourist Cottage Hunza", cardImage: cardImage6, description: "The hotel offers free parking, Wi-Fi, and breakfast with full-service laundry." },
    ],
  },
  {
    name: "naran",
    image: icon1,
    hotels: [
      { title: "Mulberry Hotel Hunza", cardImage: cardImage1, description: "The hotel ensures enhanced cleaning with commercial-grade disinfectants." },
      { title: "Old Hunza Inn", cardImage: cardImage2, description: "The hotel offers free parking, Wi-Fi, and breakfast with 24-hour front desk." },
      { title: "Hunza Bliss Hotel", cardImage: cardImage3, description: "Hunza Bliss Hotel & Restaurant, the perfect spot for peace and tranquility!" },
      { title: "Manasau Resort", cardImage: cardImage4, description: "A sustainable homestay set in Hunza, offering free parking and WiFi." },
      { title: "Osho Beyaak", cardImage: cardImage5, description: "This accommodation offers a fully equipped kitchen, Wi-Fi, and security." },
      { title: "Tourist Cottage Hunza", cardImage: cardImage6, description: "The hotel offers free parking, Wi-Fi, and breakfast with full-service laundry." },
    ],
  },
];

const HotelDetailPage = () => {
  const { name } = useParams();
  const [cityHotels, setCityHotels] = useState(null);

  useEffect(() => {
    if (!name) return;
    const foundCity = hotelsData.find(h => h.name.toLowerCase() === name.toLowerCase());
    setCityHotels(foundCity || null);
  }, [name]);

  if (!cityHotels) {
    return <h2 className="text-center text-2xl font-bold mt-10">No hotels found for {name || "this location"}</h2>;
  }

  return (
    <div className="w-full mt-8">
      {/* Banner with Heading */}
      <div className="relative w-full h-64 max-w-[90%] mx-auto ">
        <img src={cityHotels.image} alt={cityHotels.name} className="w-full h-full object-cover rounded-md brightness-50" />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-white text-3xl sm:text-4xl md:text-5xl font-bold text-center px-4">
            Hotels in {cityHotels.name.charAt(0).toUpperCase() + cityHotels.name.slice(1)}
          </h1>
        </div>
      </div>

      {/* Hotel List */}
      <div className="w-full max-w-[90%] mx-auto py-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {cityHotels.hotels.map((hotel, index) => (
            <div key={index} className="border p-4 rounded-xl bg-purple-100 shadow-lg transition-transform transform hover:scale-105">
              <img src={hotel.cardImage} alt={hotel.title} className="w-full h-48 object-cover rounded-xl" />
              <h1 className="text-lg sm:text-xl font-semibold mt-4">{hotel.title}</h1>
              <h2 className="text-sm sm:text-base mt-2 text-gray-600">{hotel.description}</h2>
              <div className="flex justify-center mt-4">
                <button className="bg-black text-white px-4 py-2 rounded-md hover:bg-gray-800 transition-all">
                  Book Now
                </button>
              </div>
            </div> 
          ))}
        </div>
      </div>
    </div>
  );
};

export default HotelDetailPage;