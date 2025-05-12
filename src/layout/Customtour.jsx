import React from "react";
import transportHero from "../assets/transport-hero-img.jpg";
import skardu from "../assets/Skardu.jpg";
import hunza from "../assets/Hunza.jpg";
import SEOHelmet from "../SEO/SEOHelmet"; 

const tourData = [
  {
    image: skardu,
    title: "5-Day Skardu Adventure Tour",
    price: "25,000",
    details: [
      { label: "Hotel", value: "Standard" },
      { label: "Guide", value: "Included" },
      { label: "Meals", value: "Breakfast" },
      { label: "Transport", value: "AC Van" },
      { label: "Day 1", value: "Islamabad" },
      { label: "Day 5", value: "Skardu" },
    ],
    pricing: [
      { label: "Per Person", amount: "25,000" },
      { label: "Per Couple", amount: "45,000" },
      { label: "Per Family", amount: "70,000" },
    ],
  },
  {
    image: hunza,
    title: "Hunza Valley Scenic Tour",
    price: "22,000",
    details: [
      { label: "Hotel", value: "Deluxe" },
      { label: "Guide", value: "Yes" },
      { label: "Meals", value: "Half Board" },
      { label: "Transport", value: "Jeep" },
      { label: "Day 1", value: "Gilgit" },
      { label: "Day 5", value: "Hunza" },
    ],
    pricing: [
      { label: "Per Person", amount: "22,000" },
      { label: "Per Couple", amount: "40,000" },
      { label: "Per Family", amount: "65,000" },
    ],
  },
];

const TourCard = ({ image, title, price, details, pricing }) => (
  <div className="max-w-md w-full bg-white rounded-xl shadow-xl overflow-hidden border mx-auto">
    <img src={image} alt={title} className="w-full h-48 object-cover rounded-t-xl" />
    <div className="p-4 flex justify-between items-center">
      <h2 className="text-xl font-bold text-gray-800">{title}</h2>
      <span className="text-lg font-semibold text-indigo-600">PKR {price}</span>
    </div>
    <div className="px-4 grid grid-cols-2 gap-x-4 gap-y-1 text-sm text-gray-600 mb-4">
      {details.map((item, index) => (
        <div key={index} className="flex justify-between">
          <span>{item.label}</span>
          <span>{item.value}</span>
        </div>
      ))}
    </div>
    <div className="px-4 pb-4 flex flex-col gap-2">
      {pricing.map((option, index) => (
        <div key={index} className="flex justify-between items-center text-sm">
          <span>{option.label}</span>
          <span className="font-medium text-gray-800">PKR {option.amount}</span>
        </div>
      ))}
    </div>
    <div className="px-4 pb-4">
      <button className="bg-blue-400 hover:bg-green-600 text-white px-5 py-2 rounded-lg text-sm font-medium">
        Book Now
      </button>
    </div>
  </div>
);

const CustomTourPage = () => {
  return (
    <>
      <SEOHelmet
        title="Custom Tour Packages in Northern Pakistan | Book Your Adventure"
        description="Discover personalized travel packages to Skardu, Hunza, and beyond. Choose your ideal hotel, transport, and more. Book your adventure now!"
        keywords="custom tours Pakistan, Skardu tour, Hunza tour, Northern Pakistan travel, book tours, Pakistan travel deals"
        image="https://yourwebsite.com/path-to-transportHero.jpg"
      />
      <div className="w-full max-w-[90%] mx-auto">
        {/* Hero Section */}
        <section className="relative h-[60vh] rounded-xl overflow-hidden m-4 shadow-lg">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${transportHero})` }}
          >
            <div className="absolute inset-0 bg-black bg-opacity-50" />
          </div>
          <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Custom Tour</h1>
          </div>
        </section>

        {/* Cards Section */}
        <section className="py-10 px-4 bg-gray-50">
          <div className="max-w-7xl mx-auto grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {tourData.map((tour, idx) => (
              <TourCard key={idx} {...tour} />
            ))}
          </div>
        </section>
      </div>
    </>
  );
};

export default CustomTourPage;
