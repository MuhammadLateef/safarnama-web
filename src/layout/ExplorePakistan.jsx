import { useNavigate } from "react-router-dom";
import heroImage from "../assets/Gilgit.jpg";
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

const destinations = [
  { image: Hunza, title: "Hunza", slug: "hunza", description: "A mountainous valley known for its scenic beauty, apricot farms, and historic forts." },
  { image: Nagar, title: "Nagar", slug: "nagar", description: "Home to some of the world's highest peaks and traditional villages with rich culture." },
  { image: Gilgit, title: "Gilgit", slug: "gilgit", description: "The capital city of Gilgit-Baltistan, offering a blend of natural beauty and urban amenities." },
  { image: Astore, title: "Astore", slug: "astore", description: "Known for its lush meadows, dense forests, and the gateway to Deosai National Park." },
  { image: Skardu, title: "Skardu", slug: "skardu", description: "Famous for its desert, lakes, and proximity to the world's second-highest mountain, K2." },
  { image: Deosai, title: "Deosai National Park", slug: "deosai-national-park", description: "One of the world's highest plateaus, known as 'The Land of Giants' with unique flora and fauna." },
  { image: Ghanche, title: "Ghanche", slug: "ghanche", description: "The easternmost district of Pakistan, known for Khaplu Palace and major peaks like K7." },
  { image: Ghizer, title: "Ghizer", slug: "ghizer", description: "Known for Phander Lake, Shandur Pass, trout fishing, and diverse cultures." },
  { image: Shigar, title: "Shigar", slug: "shigar", description: "Famous for its valley, wooden mosques, and as the gateway to Baltoro glacier." },
  { image: Kharmang, title: "Kharmang", slug: "kharmang", description: "A border district with beautiful landscapes and ancient heritage sites." },
  { image: Roundu, title: "Roundu", slug: "roundu", description: "A remote district with stunning natural beauty and traditional lifestyles." },
  { image: Diamer, title: "Diamer", slug: "diamer", description: "Home to Nanga Parbat and Fairy Meadows, offering stunning trekking." }
];

export default function ExplorePakistan() {
  const navigate = useNavigate();

  return (
    <div className="w-full">
      {/* Hero Section */}
      <div id="hero" className="relative z-0 mt-8 w-full h-full max-w-[90%] mx-auto">
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
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-wide">
              EXPLORE GILGIT BALTISTAN
            </h1>
            <p className="mt-4 text-lg md:text-xl max-w-3xl mx-auto">
              Discover the breathtaking landscapes, rich culture, and unique experiences across all districts of Gilgit Baltistan
            </p>
          </div>
        </div>
      </div>

      {/* All Districts Section */}
      <div className="py-16 max-w-[90%] mx-auto">
        <h2 className="mb-8 text-center text-2xl font-bold text-gray-800 md:mb-12 lg:text-3xl">
          All Districts of Gilgit Baltistan
        </h2>

        <div className="mb-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {destinations.map((destination, index) => (
            <div
              key={index}
              className="group relative h-64 overflow-hidden rounded-lg shadow-lg cursor-pointer"
              onClick={() => navigate(`/destinations/${destination.slug}`)}
            >
              <img
                src={destination.image}
                loading="lazy"
                alt={destination.title}
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>

              {/* Title + Description + Explore */}
              <div className="absolute bottom-4 left-4 right-4 z-10 text-white transition-all duration-300">
                <h3 className="text-2xl font-bold transition-all duration-300 group-hover:-translate-y-4">
                  {destination.title}
                </h3>

                <div className="mt-2 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                  <p className="text-sm">
                    {destination.description}
                  </p>
                  <span className="mt-2 inline-block text-sm font-semibold text-green-400">
                    Explore →
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
