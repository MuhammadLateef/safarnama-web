import React from 'react'

import { DestinationCard } from "../components/destination-card";
import Hunza from "../assets/top_destinations/IMG_4678.JPG";
import Skardu from "../assets/top_destinations/IMG_4651.JPG";
import Nagar from "../assets/top_destinations/IMG_4680.JPG";
import Gilgit from "../assets/top_destinations/IMG_4655.JPG";
import Astore from "../assets/top_destinations/IMG_4654.JPG";
import Deosai from "../assets/top_destinations/IMG_4665.JPG";
const Destinition = () => {
  return (
    <section id="destinations" className="py-12 md:py-16 bg-slate-50">
    <div className="max-w-[90%] mx-auto container">
      <div className="flex flex-col items-center text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Top Destinations</h2>
        <p className="text-slate-600 max-w-2xl">
          Explore the breathtaking landscapes and cultural treasures of Northern Pakistan's most iconic
          destinations
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <DestinationCard
          title="Hunza"
          description="A mountainous valley known for its scenic beauty, apricot farms, and historic forts."
          image={Hunza}
          link="#"
        />
        <DestinationCard
          title="Nagar"
          description="Home to some of the world's highest peaks and traditional villages with rich culture."
          image={Nagar}
          link="#"
        />
        <DestinationCard
          title="Gilgit"
          description="The capital city of Gilgit-Baltistan, offering a blend of natural beauty and urban amenities."
          image={Gilgit}
          link="#"
        />
        <DestinationCard
          title="Astore"
          description="Known for its lush meadows, dense forests, and the gateway to Deosai National Park."
          image={Astore}
          link="#"
        />
        <DestinationCard
          title="Skardu"
          description="Famous for its desert, lakes, and proximity to the world's second-highest mountain, K2."
          image={Skardu}
          link="#"
        />
        <DestinationCard
          title="Deosai National Park"
          description="One of the world's highest plateaus, known as 'The Land of Giants' with unique flora and fauna."
          image={Deosai}
          link="#"
        />
      </div>
    </div>
  </section>
  )
}

export default Destinition;