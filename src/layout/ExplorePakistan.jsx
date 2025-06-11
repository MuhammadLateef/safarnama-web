import { useNavigate } from "react-router-dom";
import heroImage from "../assets/main-image1.png";
import Hunza from "../assets/hunza/altitfort.jpeg";
import Nagar from "../assets/nagar/hoparglacier1.jpg";
import Skardu from "../assets/skardu/basho-meadows-camping3.jpeg";
import Tormik from "../assets/gilgit/Tormik_valley.jpeg";
import Astore from "../assets/astore/minimarg.jpeg";
import Ghizer from "../assets/ghizer/phander-valley.jpg";
import Ghanche from "../assets/ghanche/khaplu7.png";
import Kharmang from "../assets/kharmang/kharmang-district.jpg";
import Shigar from "../assets/shigar/shigar-fort.jpg";
import Diamer from "../assets/diamer/fairy-meadows1.jpeg";
import Roundu from "../assets/roundu/bilamik-valley1.JPG";
import Deosai from "../assets/top_destinations/IMG_4665.JPG";
import SEOHelmet from "../SEO/SEOHelmet";

export const destinations = [
  { image: Hunza, title: "Hunza Valley", slug: "hunza", description: "A mountainous valley known for its scenic beauty, apricot farms, and historic forts." },
  { image: Nagar, title: "Rakaposhi Base Camp", slug: "nagar", description: "Home to some of the world's highest peaks and traditional villages with rich culture." },
  { title: "Tormik Valley", description: "The valley lies on the Gilgit-Skardu link road near the headquarters of Subdivision Roundu, Dambudas. ", image: Tormik, slug: "gilgit" },
  { title: "Minimarg Valley", description: "Known for its lush meadows, dense forests, and the gateway to Deosai National Park.", image: Astore, slug: "astore" },
  { image: Skardu, title: "Skardu Valley", slug: "skardu", description: "Famous for its desert, lakes, and proximity to the world's second-highest mountain, K2." },
  { image: Deosai, title: "Deosai National Park", slug: "deosai-national-park", description: "One of the world's highest plateaus, known as 'The Land of Giants' with unique flora and fauna." },
  { image: Ghanche, title: "Khaplu Valley", slug: "ghanche", description: "The easternmost district of Pakistan, known for Khaplu Palace and major peaks like K7." },
  { image: Ghizer, title: "Phander Valley", slug: "ghizer", description: "Known for Phander Lake, Shandur Pass, trout fishing, and diverse cultures." },
  { image: Shigar, title: "Shigar Valley", slug: "shigar", description: "Famous for its valley, wooden mosques, and as the gateway to Baltoro glacier." },
  { image: Kharmang, title: "Manthokha Waterfall", slug: "kharmang", description: "This waterfall is approx 180 feet high from ground and located 60 km away from main Skardu town." },
  { image: Roundu, title: "Bilamik Valley", slug: "roundu", description: "Bilamik Valley, also known as Bilamik Roundu, lies in the Skardu District of Gilgit Baltistan." },
  { image: Diamer, title: "Fairy Meadows", slug: "diamer", description: "Home to Nanga Parbat and Fairy Meadows, offering stunning trekking." }
];

export default function ExplorePakistan() {
  const navigate = useNavigate();

  return (
    <div className="w-full">
      {/* SEO Meta Tags */}
      <SEOHelmet
        title="Explore Gilgit Baltistan - Top Tourist Destinations in Pakistan"
        description="Discover breathtaking destinations across Gilgit Baltistan. From Fairy Meadows to Skardu, explore valleys, lakes, waterfalls, and cultural heritage."
        keywords="Explore Pakistan, Gilgit Baltistan, Skardu, Hunza, Fairy Meadows, Deosai, Khaplu, travel, tourism, top destinations"
      />

      {/* Hero Section */}
      <div className="relative z-0 w-full h-full mx-auto">
        <div className="relative w-full h-[60vh] bg-black rounded-lg overflow-hidden">
          <img
            src={heroImage}
            alt="Explore Gilgit Baltistan"
            className="w-full h-full object-cover opacity-70"
          />
          <div className="absolute inset-0 bg-black bg-opacity-5 rounded-md" />
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
          All Destinations of Gilgit Baltistan
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
                alt={destination.title}
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="absolute bottom-4 left-4 right-4 z-10 text-white">
                <h3 className="text-xl font-bold mb-2 transition-transform duration-300 translate-y-0 group-hover:-translate-y-2">
                  {destination.title}
                </h3>
                <div className="transition-all duration-300 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0">
                  <p className="text-sm">{destination.description}</p>
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
