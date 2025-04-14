import { useNavigate } from "react-router-dom"; // Import useNavigate hook
import heroImage from "../assets/Gilgit.jpg"; // Add your hero image
import skardu from "../assets/chota-deosai.webp";

// Define the destinations array
const destinations = [
  { image: heroImage, title: "Skardu", slug: "skardu" },
  { image: skardu, title: "Hunza", slug: "hunza" },
  { image: heroImage, title: "Khapulo", slug: "khapulo" },
  { image: skardu, title: "Deosai", slug: "deosai" },
  { image: skardu, title: "Astore", slug: "astore" },
  { image: skardu, title: "Ghizer", slug: "ghizer" },
  { image: skardu, title: "Yaseen", slug: "yaseen" },
  { image: skardu, title: "Nagar", slug: "nagar" }
];

export default function ExplorePage() {
  const navigate = useNavigate(); // Initialize navigate function

  return (
    <div className="w-full max-w-[90%] mx-auto">
      {/* Hero Section */}
      <div id="hero" className="relative z-0 mt-8 w-full h-full max-w-[90%] mx-auto">
        {/* Background Image with Overlay */}
        <div className="relative w-full h-[60vh] sm:h-[60vh] mt-8 bg-black rounded-lg overflow-hidden">
          <img
            src={heroImage}
            alt="Hero"
            className="w-full h-full object-cover opacity-70"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 rounded-md"></div>
        </div>
        <div className="absolute top-0 w-full h-full flex flex-col justify-center items-center text-center gap-4 z-10 px-4 md:px-10">
          <div className="text-white">
            <h1 className="text-3xl md:text-4xl lg:text-5xl text-white font-bold tracking-wide">
              EXPLORE PAKISTAN
            </h1>
          </div>
        </div>
      </div>

      {/* Destination Section */}
      <h2 className="mb-8 text-center text-2xl font-bold text-gray-800 md:mb-12 lg:text-3xl">
        Destinations
      </h2>

      <div className="mb-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mx-auto max-w-[90%]">
        {destinations.map((destination, index) => (
          <div key={index} className="group relative h-64 overflow-hidden rounded-lg shadow-lg">
            <img
              src={destination.image}
              loading="lazy"
              alt={destination.title}
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40"></div>

            {/* Static Title */}
            <div className="absolute bottom-4 left-0 right-0 text-center">
              <h3 className="text-lg font-bold text-white lg:text-xl">{destination.title}</h3>
            </div>

            {/* Hover Content */}
            <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              <div className="bg-black bg-opacity-60 px-4 py-2 rounded-lg">
                <p className="text-sm text-white lg:text-base">Explore the beauty of {destination.title}</p>
              </div>
            </div>

            {/* Click to navigate to detailed page */}
            <div
              className="absolute inset-0 cursor-pointer"
              onClick={() => navigate(`/destinations/${destination.slug}`)} // Navigate to destination detail page
            ></div>
          </div>
        ))}
      </div>
    </div>
  );
}
