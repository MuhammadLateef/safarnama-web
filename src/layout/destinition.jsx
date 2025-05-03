// import React from 'react';
// import { Link } from 'react-router-dom';
// import Hunza from "../assets/hunza/altitfort.jpg";
// import Skardu from "../assets/top_destinations/IMG_4651.JPG";
// import Nagar from "../assets/nagar/hoparglacier1.jpg";
// import Gilgit from "../assets/gilgit/gilgit-river1.jpg";
// import Astore from "../assets/astore/rama-lake2.jpg";
// import Deosai from "../assets/top_destinations/IMG_4665.JPG";

// const Destination = () => {
//   const destinations = [
//     {
//       title: "Hunza",
//       description: "A mountainous valley known for its scenic beauty, apricot farms, and historic forts.",
//       image: Hunza,
//       slug: "hunza"
//     },
//     {
//       title: "Nagar",
//       description: "Home to some of the world's highest peaks and traditional villages with rich culture.",
//       image: Nagar,
//       slug: "nagar"
//     },
//     {
//       title: "Gilgit",
//       description: "The capital city of Gilgit-Baltistan, offering a blend of natural beauty and urban amenities.",
//       image: Gilgit,
//       slug: "gilgit"
//     },
//     {
//       title: "Astore",
//       description: "Known for its lush meadows, dense forests, and the gateway to Deosai National Park.",
//       image: Astore,
//       slug: "astore"
//     },
//     {
//       title: "Skardu",
//       description: "Famous for its desert, lakes, and proximity to the world's second-highest mountain, K2.",
//       image: Skardu,
//       slug: "skardu"
//     },
//     {
//       title: "Deosai National Park",
//       description: "One of the world's highest plateaus, known as 'The Land of Giants' with unique flora and fauna.",
//       image: Deosai,
//       slug: "deosai-national-park"
//     }
//   ];

//   return (
//     <section id="destinations" className="py-12 md:py-16 bg-slate-50">
//       <div className="max-w-[90%] mx-auto container">
//         <div className="flex flex-col items-center text-center mb-12">
//           <h2 className="text-3xl md:text-4xl font-bold mb-4">Top Destinations</h2>
//           <p className="text-slate-600 max-w-2xl">
//             Explore the breathtaking landscapes and cultural treasures of Northern Pakistan's most iconic
//             destinations
//           </p>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//           {destinations.map((destination) => (
//             <div
//               key={destination.slug}
//               className="group relative bg-white border rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
//             >
//               {/* Image */}
//               <img
//                 src={destination.image}
//                 alt={destination.title}
//                 className="w-full h-64 object-cover group-hover:scale-105 transition-all duration-300"
//               />

//               {/* Overlay content with hover reveal effect */}
//               <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-60 transition-all duration-300 flex flex-col justify-end p-4">
//                 <h3 className="text-2xl font-bold text-white mb-2 transform group-hover:-translate-y-3 transition-all duration-300">
//                   {destination.title}
//                 </h3>
//                 <p className="text-sm text-white opacity-0 group-hover:opacity-100 transform group-hover:translate-y-0 translate-y-4 transition-all duration-300">
//                   {destination.description}
//                 </p>
//                 <Link
//                   to={`/destinations/${destination.slug}`}
//                   className="mt-2 text-sm font-semibold text-[#FAB12F] opacity-0 group-hover:opacity-100 transition-all duration-300"
//                 >
//                   Explore →
//                 </Link>
//               </div>
//             </div>
//           ))}
//         </div>

//         <div className="flex justify-center pt-6 pb-8">
//           <Link
//             to="/explore-pakistan"
//             className="px-6 py-2 bg-[#FAB12F] hover:bg-[#b89c6b] text-white font-medium rounded-lg shadow-lg transition-all transform hover:scale-105 flex items-center gap-3"
//           >
//             <span className="text-lg">Explore Gilgit Baltistan</span>
//             <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
//               <path
//                 fillRule="evenodd"
//                 d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
//                 clipRule="evenodd"
//               />
//             </svg>
//           </Link>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Destination;
import React from 'react';
import { Link } from 'react-router-dom';
import Hunza from "../assets/hunza/altitfort.jpg";
import Skardu from "../assets/top_destinations/IMG_4651.JPG";
import Nagar from "../assets/nagar/hoparglacier1.jpg";
import Gilgit from "../assets/gilgit/gilgit-river1.jpg";
import Astore from "../assets/astore/rama-lake2.jpg";
import Deosai from "../assets/top_destinations/IMG_4665.JPG";
import {destinationData} from "./destination-details-page";
const Destination = () => {
  const destinations = [
    { title: "Hunza Valley", description: "A mountainous valley known for its scenic beauty, apricot farms, and historic forts.", image: Hunza, slug: "hunza" },
    { title: "Rakaposhi Nagar", description: "Home to some of the world's highest peaks and traditional villages with rich culture.", image: Nagar, slug: "nagar" },
    { title: "Gilgit City", description: "The capital city of Gilgit-Baltistan, offering a blend of natural beauty and urban amenities.", image: Gilgit, slug: "gilgit" },
    { title: "Astore Valley", description: "Known for its lush meadows, dense forests, and the gateway to Deosai National Park.", image: Astore, slug: "astore" },
    { title: "Skardu valley", description: "Famous for its desert, lakes, and proximity to the world's second-highest mountain, K2.", image: Skardu, slug: "skardu" },
    { title: "Deosai National Park", description: "One of the world's highest plateaus, known as 'The Land of Giants' with unique flora and fauna.", image: Deosai, slug: "deosai-national-park" }
  ];

  return (
    <section id="destinations" className="py-12 md:py-16 bg-slate-50">
      <div className="max-w-[90%] mx-auto container">
        <div className="flex flex-col items-center text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Top Destinations</h2>
          <p className="text-slate-600 max-w-2xl">
            Explore the breathtaking landscapes and cultural treasures of Northern Pakistan's most iconic destinations
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {destinations.map((destination) => (
            <div
              key={destination.slug}
              className="group relative bg-white border rounded-sm overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
            >
              {/* Image */}
              <img
                src={destination.image}
                alt={destination.title}
                className="w-full h-64 object-cover group-hover:scale-105 transition-all duration-300"
              />

              {/* Overlay Content */}
              <div className="absolute inset-0 bg-black bg-opacity-30 group-hover:bg-opacity-60 transition-all duration-300 flex flex-col justify-end p-4">
                {/* Title and Description */}
                <div className="flex flex-col justify-end h-full">
                  {/* Title at the bottom */}
                  <h3 className="text-2xl font-bold text-white mb-2 transform transition-all duration-300 group-hover:-translate-y-16 absolute bottom-0 left-0 p-4">
                    {destination.title}
                  </h3>

                  {/* Description at the bottom */}
                  <div className="opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                    <p className="text-sm text-white">
                      {destination.description}
                    </p>
                    <Link
                      to={`/destinations/${destination.slug}`}
                      className="mt-2 inline-block text-sm font-semibold text-[#FAB12F]"
                    >
                      Explore →
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center pt-6 pb-8">
          <Link
            to="/explore-pakistan"
            className="px-6 py-2 bg-[#FAB12F] hover:bg-[#b89c6b] text-white font-medium rounded-lg shadow-lg transition-all transform hover:scale-105 flex items-center gap-3"
          >
            <span className="text-lg">Explore Gilgit Baltistan</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path
                fillRule="evenodd"
                d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Destination;


