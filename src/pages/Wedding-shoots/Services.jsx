import Image2 from "../../assets/WEEDING.jpg"
import Image1 from "../../assets/drone-shoot/white-drone2.png"
import Image3 from "../../assets/wedding/weeding1.jpeg";
import Image4 from "../../assets/wedding/weeding2.jpeg";
import Image5 from "../../assets/wedding/weeding3.jpeg";

function WeddingServices() {
  return (
    <div className="py-16">
      <div className="container max-w-[90%] mx-auto px-4">

        <div className="w-full flex flex-col md:flex-row items-center mb-20 gap-8">
          <div className="md:w-1/2">
            <div className="grid grid-cols-2 gap-4">
              <img
                src={Image3}
                alt="Wedding videography"
                className="w-auto h-[350px] rounded-2xl"
              />
              <img
                src={Image2}
                alt="Wedding videography"
                className="w-auto h-[400px] rounded-2xl"
              />
            </div>
          </div>
          <div className="md:w-1/2 ">
            <h2 className="text-2xl font-bold mb-4">📸 Premium Wedding Photography in Skardu – Capture Love in the Heart of Nature</h2>
            <p className="mb-4">
              Capture every beautiful emotion of your big day with our professional wedding photography.
              At SCO Trensing, we turn your special day into timeless art with our premium wedding photography services in Skardu. From romantic pre-wedding portraits to full-day event coverage, we specialize in capturing emotion, elegance, and unforgettable landscapes. Whether you're planning a traditional ceremony or a modern celebration, our expert photographers frame each moment with passion and precision.
            </p>
            <ul className=" list-disc space-y-2">
              <h3 className=" font-bold">Our top wedding shoot locations in Skardu include:</h3>
              <li className=" ml-5 text-sm"> <span className="font-bold "> Shangrila Resort </span>  – Iconic red-roof cottages and reflective lakeside views perfect for romantic shots.</li>
              <li className=" ml-5 text-sm"> <span className="font-bold "> Basho Valley </span>  – Green meadows, pine-covered mountains, and waterfalls ideal for couple portraits.</li>
              <li className=" ml-5 text-sm"> <span className="font-bold "> Shigar Fort </span>  – Royal and historical vibes, ideal for regal wedding themes.</li>
              <li className=" ml-5 text-sm"> <span className="font-bold "> Upper Kachura Lake </span>  – Crystal-clear turquoise water offers serene, magical backgrounds.</li>
              <li className=" ml-5 text-sm"> <span className="font-bold "> Katpana Desert </span>  – Where sand meets snow: striking backdrops with stunning contrast.</li>
              <li className=" ml-5 text-sm"> <span className="font-bold "> Deosai National Park </span>  – A paradise of wildflowers and plains—perfect for nature lovers.</li>
              <li className=" ml-5 text-sm">   <span className="font-bold ">  Manthal Buddha Rock </span>  – A peaceful and spiritual space for meaningful captures.</li>
              <li className=" ml-5 text-sm"> <span className="font-bold "> Skardu City Viewpoint </span>  – Sunset portraits with the full city in the backdrop.</li>
              <li className=" ml-5 text-sm"> <span className="font-bold "> Manthal Buddha Rock  </span>  –  A peaceful and spiritual space for meaningful captures.</li>
            </ul>
          </div>
        </div>

        {/* Wedding Videography Services */}
        <div className="flex flex-col md:flex-row-reverse items-center gap-8">
          <div className="md:w-1/2">
            <div className="grid grid-cols-2 gap-4">
              <img
                src={Image5}
                alt="Wedding videography"
                className="w-auto h-[350px] rounded-2xl"
              />
              <img
                src={Image4}
                alt="Wedding videography"
                className="w-auto h-[250px] rounded-2xl"
              />
            </div>
          </div>
          <div className="md:w-1/2">
            <h2 className="text-2xl font-bold mb-4">Cinematic Drone Video Shoots – Skardu from the Sky</h2>
            <p className="mb-4">
              Our cinematic wedding videography captures the magic, emotions, and celebration of your special day.
              We craft a beautiful narrative that brings your wedding story to life, allowing you to relive every moment
              — from the first look to the final dance — in stunning detail and quality.
            </p>
            <ul className=" list-disc space-y-2">
              <h3 className=" font-bold">We cover all major drone wedding shoot locations in Skardu, including:</h3>
              <li className=" ml-5 text-sm"> <span className="font-bold "> Sarfaranga Cold Desert  </span>  – The world’s highest cold desert with golden dunes and dramatic skies.</li>
              <li className=" ml-5 text-sm"> <span className="font-bold "> Sarfaranga Cold Desert  </span>  – The world’s highest cold desert with golden dunes and dramatic skies.</li>
              <li className=" ml-5 text-sm"> <span className="font-bold ">Upper & Lower Kachura Lakes </span>  – Capture love gliding over glassy waters.</li>
              <li className=" ml-5 text-sm"> <span className="font-bold ">Katpana Desert & Skardu Mountains  </span>  – A unique fusion of rugged and romantic.</li>
              <li className=" ml-5 text-sm"> <span className="font-bold ">Shigar Valley & Fort </span>  –  Blend of culture and landscape in cinematic motion.</li>
              <li className=" ml-5 text-sm"> <span className="font-bold ">Manthoka Waterfall </span>  –  A dramatic cascade surrounded by lush cliffs—a dreamlike setting for romantic photography.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WeddingServices;
