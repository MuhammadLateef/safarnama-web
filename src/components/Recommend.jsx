import { useState } from "react";
import Destination1 from "../assets/Destination1.png";
import Destination2 from "../assets/Destination2.png";
import Destination3 from "../assets/Destination3.png";
import Destination4 from "../assets/Destination4.png";
import Destination5 from "../assets/Destination5.png";
import Destination6 from "../assets/Destination6.png";
import info1 from "../assets/info1.png";
import info2 from "../assets/info2.png";
import info3 from "../assets/info3.png";

export default function Recommend() {
  const data = [
    {
      image: Destination1,
      title: "Singapore",
      subTitle: "Singapore, officially the Republic of Singapore, is a",
      cost: "38,800",
      duration: "Approx 2 night trip",
    },
    {
      image: Destination2,
      title: "Thailand",
      subTitle: "Thailand is a Southeast Asia country. It's known for",
      cost: "54,200",
      duration: "Approx 2 night trip",
    },
    {
      image: Destination3,
      title: "Paris",
      subTitle: "Paris, France's capital, is a major European city and a",
      cost: "45,500",
      duration: "Approx 2 night trip",
    },
    {
      image: Destination4,
      title: "New Zealand",
      subTitle: "New Zealand is an island country in the",
      cost: "24,100",
      duration: "Approx 1 night trip",
    },
    {
      image: Destination5,
      title: "Bora Bora",
      subTitle: "Bora Bora is a small South Pacific island northwest of",
      cost: "95,400",
      duration: "Approx 2 night 2 day trip",
    },
    {
      image: Destination6,
      title: "London",
      subTitle: "London, the capital of England and the United",
      cost: "38,800",
      duration: "Approx 3 night 2 day trip",
    },
  ];

  const packages = [
    "The Weekend Break",
    "The Package Holiday",
    "The Group Tour",
    "Long Term Slow Travel",
  ];

  const [active, setActive] = useState(1);

  return (
    <section className="py-8">
      <div className="text-center">
        <h2 className="text-3xl font-bold mb-6">Recommended Destinations</h2>
      </div>
      <div className="flex justify-center mb-8">
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
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 px-6">
        {data.map((destination, index) => (
          <div
            key={index}
            className="p-4 bg-purple-100 rounded-lg shadow-lg transition-transform transform hover:-translate-y-4 hover:shadow-2xl"
          >
            <img src={destination.image} alt={destination.title} className="w-full rounded-md mb-4" />
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
            <div className="flex justify-between mt-4 text-sm text-gray-700">
              <span>1000 Kms</span>
              <span>{destination.duration}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}