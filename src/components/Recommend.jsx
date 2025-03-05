import { useState } from "react";
import Destination1 from "../assets/Kashmir.webp";
import Destination2 from "../assets/Skardu.jpg";
import Destination3 from "../assets/Hunza.jpg";
import Destination4 from "../assets/Destination4.png";
import Destination5 from "../assets/Destination5.png";
import Destination6 from "../assets/Destination6.png";
import info1 from "../assets/car.png";
import info2 from "../assets/info2.png";
import info3 from "../assets/info3.png";

export default function Recommend() {
  const data = [
    {
      image: Destination1,
      title: "Kashmir",
      subTitle: "Three Days Trip To Kashmir –    Group Tour",
      cost: "15,500",
      duration: "3 Days Tour",
    },
    {
      image: Destination2,
      title: "Hunza + Naltar",
      subTitle: "Five Days Trip To Hunza and Naltar git – Group Tour",
      cost: "25000",
      duration: "5 Days Tour",
    },
    {
      image: Destination3,
      title: "Sakrdu + Hunza",
      subTitle: "Eight Days Trip To Skardu and Hunza – Group Tour",
      cost: "35000",
      duration: "8 Days Tour",
    },
    // {
    //   image: Destination4,
    //   title: "New Zealand",
    //   subTitle: "New Zealand is an island country in the",
    //   cost: "24,100",
    //   duration: "Approx 1 night trip",
    // },
    // {
    //   image: Destination5,
    //   title: "Bora Bora",
    //   subTitle: "Bora Bora is a small South Pacific island northwest of",
    //   cost: "95,400",
    //   duration: "Approx 2 night 2 day trip",
    // },
    // {
    //   image: Destination6,
    //   title: "London",
    //   subTitle: "London, the capital of England and the United",
    //   cost: "38,800",
    //   duration: "Approx 3 night 2 day trip",
    // },
  ];

  // const packages = [
  //   "The Weekend Break",
  //   "The Package Holiday",
  //   "The Group Tour",
  //   "Long Term Slow Travel",
  // ];

  const [active, setActive] = useState(1);

  return (
    <section className="py-8">
      <div className="text-center max-w-[90%] max-auto">
        <h2 className="text-3xl font-bold mb-6">Top Upcoming Pakistan Tours</h2>
      </div>
      {/* <div className="flex justify-center mb-8">
        <ul className="flex space-x-4">
          {packages.map((pkg, index) => (
            <li
              key={index}
              className={`cursor-pointer px-6 py-2 border-b-2 ${
                active === index + 1 ? "border-purple-600" : "border-black"
              }`}
              onClick={() => setActive(index + 1)}
            >
              {pkg}
            </li>
          ))}
        </ul>
      </div> */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 px-6">
        {data.map((destination, index) => (
          <div
            key={index}
            className="p-4 bg-purple-100 rounded-lg shadow-lg transition-transform transform hover:-translate-y-4 hover:shadow-2xl"
          >
            <img src={destination.image} alt={destination.title} className="w-full  rounded-md mb-4" />
            <h3 className="text-xl font-semibold">{destination.title}</h3>
            <p className="text-gray-600 mb-4">{destination.subTitle}</p>
            <div className="flex justify-between items-center">
              <div className="flex space-x-2">
                <img src={info1} alt="info" className="w-10 h-10 rounded-full bg-purple-400 p-2" />
                <img src={info2} alt="info" className="w-10 h-10 rounded-full bg-purple-400 p-2" />
                <img src={info3} alt="info" className="w-10 h-10 rounded-full bg-purple-400 p-2" />
              </div>
              <h4 className="text-lg font-bold">{destination.cost}</h4>
            </div>
            <div className="flex justify-between text-gray-600">
              <span></span>
              <span>{destination.duration}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}