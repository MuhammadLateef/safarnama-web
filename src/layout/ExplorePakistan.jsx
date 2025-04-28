import { useNavigate } from "react-router-dom";
import heroImage from "../assets/Gilgit.jpg";
// import skardu from "../assets/chota-deosai.webp";
import Hunza from "../assets/hunza/altitfort.jpg";
import Nagar from "../assets/nagar/hoparglacier1.jpg";
import Skardu from "../assets/top_destinations/skardu.jpg";
import Gilgit from "../assets/gilgit/gilgit-river2.jpg";
import Astore from "../assets/astore/rama-lake2.jpg";
import Ghizer from "../assets/ghizer/gupis_fort.jpg";
import Ghanche from "../assets/ghanche/khaplu-fort.jpg";
import Kharmang from "../assets/kharmang/kharmang-district.jpg";
import Shigar from "../assets/shigar/shigar-fort.jpg";
import Diamer from "../assets/diamer/fairy-meadows.webp";
import Roundu from "../assets/ghizer/gupis_fort.jpg";
import Deosai from "../assets/top_destinations/IMG_4665.JPG";
// Define the destinations array with all districts including the new ones
const destinations = [
  // Original top destinations
  { 
    image: Hunza, 
    title: "Hunza", 
    slug: "hunza",
    description: "A mountainous valley known for its scenic beauty, apricot farms, and historic forts."
  },
  { 
    image: Nagar, 
    title: "Nagar", 
    slug: "nagar",
    description: "Home to some of the world's highest peaks and traditional villages with rich culture."
  },
  { 
    image: Gilgit, 
    title: "Gilgit", 
    slug: "gilgit",
    description: "The capital city of Gilgit-Baltistan, offering a blend of natural beauty and urban amenities."
  },
  { 
    image: Astore, 
    title: "Astore", 
    slug: "astore",
    description: "Known for its lush meadows, dense forests, and the gateway to Deosai National Park."
  },
  { 
    image: Skardu, 
    title: "Skardu", 
    slug: "skardu",
    description: "Famous for its desert, lakes, and proximity to the world's second-highest mountain, K2."
  },
  { 
    image: Deosai, 
    title: "Deosai National Park", 
    slug: "deosai-national-park",
    description: "One of the world's highest plateaus, known as 'The Land of Giants' with unique flora and fauna."
  },
  
  // Additional districts
  { 
    image: Ghanche, 
    title: "Ghanche", 
    slug: "ghanche",
    description: "The easternmost district of Pakistan, bordering India, known for Khaplu Palace and access to major peaks like K7."
  },
  { 
    image: Ghizer, 
    title: "Ghizer", 
    slug: "ghizer",
    description: "A picturesque district known for Phander Lake, Shandur Pass, trout fishing, and diverse cultural influences."
  },
  { 
    image: Shigar, 
    title: "Shigar", 
    slug: "shigar",
    description: "Famous for its beautiful valley, historical wooden mosques, and as the gateway to the Baltoro glacier."
  },
  { 
    image: Kharmang, 
    title: "Kharmang", 
    slug: "kharmang",
    description: "A border district with beautiful landscapes, traditional villages, and ancient heritage sites."
  },
  { 
    image: Roundu, 
    title: "Roundu", 
    slug: "roundu",
    description: "A remote district with stunning natural beauty, deep valleys, and traditional lifestyles."
  },
  {
    image: Diamer,
    title: "Diamer",
    slug: "diamer",
    description: "Home to the majestic Nanga Parbat mountain and Fairy Meadows, offering stunning trekking opportunities."
  }
];

export default function ExplorePakistan() {
  const navigate = useNavigate();

  return (
    <div className="w-full">
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
              EXPLORE GILGIT BALTISTAN
            </h1>
            <p className="mt-4 text-lg md:text-xl text-white max-w-3xl mx-auto">
              Discover the breathtaking landscapes, rich culture, and unique experiences across all districts of Gilgit Baltistan
            </p>
          </div>
        </div>
      </div>

      {/* Destination Section */}
      <div className="py-16 max-w-[90%] mx-auto">
        <h2 className="mb-8 text-center text-2xl font-bold text-gray-800 md:mb-12 lg:text-3xl">
          All Districts of Gilgit Baltistan
        </h2>

        <div className="mb-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {destinations.map((destination, index) => (
            <div key={index} className="group relative h-64 overflow-hidden rounded-lg shadow-lg">
              <img
                src={destination.image}
                loading="lazy"
                alt={destination.title}
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                <h3 className="text-xl font-bold mb-2">{destination.title}</h3>
                <p className="text-sm text-white/80 line-clamp-2 mb-3">{destination.description}</p>
                <div className="flex items-center text-emerald-400 transition-transform duration-300 group-hover:translate-x-2">
                  <span className="text-sm font-medium mr-2">Explore</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>

              {/* Click to navigate to detailed page */}
              <div
                className="absolute inset-0 cursor-pointer"
                onClick={() => navigate(`/destinations/${destination.slug}`)}
              ></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}