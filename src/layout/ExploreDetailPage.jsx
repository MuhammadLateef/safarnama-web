import { useParams } from "react-router-dom";

// Sample destination data, you can update it with actual paths and more destinations
const destinationData = {
  hunza: {
    image: "/assets/hunza.jpg", // Update with actual path
    description: "Hunza is known for its stunning valleys, hospitable people, and breathtaking views of snow-covered peaks.",
    famousPlaces: ["Altit Fort", "Baltit Fort", "Attabad Lake", "Passu Cones"]
  },
  skardu: {
    image: "/assets/skardu.jpg", // Update with actual path
    description: "Skardu is a gateway to some of the world's highest peaks and a treasure trove of natural beauty.",
    famousPlaces: ["Shangrila Lake", "Shigar Fort", "Satpara Lake", "Deosai Plains"]
  },
  // Add more destinations here
};

export default function ExploreDetailPage() {
  const { name } = useParams(); // Get the 'name' param from the URL
  const data = destinationData[name.toLowerCase()]; // Match data based on lowercase name

  if (!data) {
    return <div className="p-8 text-center text-xl text-gray-600">Destination not found.</div>;
  }

  return (
    <div className="w-full max-w-screen-lg mx-auto p-6">
      {/* Hero Image Section */}
      <div className="relative w-full h-80 sm:h-[60vh] mb-6 rounded-lg overflow-hidden">
        <img
          src={data.image}
          alt={name}
          className="w-full h-full object-cover opacity-70"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center text-center text-white">
          <h1 className="text-3xl sm:text-4xl font-bold">{name}</h1>
        </div>
      </div>

      {/* Content Section */}
      <div className="text-center">
        <p className="text-lg sm:text-xl text-gray-700 mb-6">{data.description}</p>

        <h2 className="text-2xl sm:text-3xl font-semibold mb-4">Famous Places to Visit</h2>
        <ul className="list-disc list-inside text-gray-600 text-lg">
          {data.famousPlaces.map((place, index) => (
            <li key={index} className="mb-2">{place}</li>
          ))}
        </ul>
      </div>

      {/* Button to Explore More or Book */}
      <div className="text-center mt-8">
        <button
          className="bg-blue-500 text-white py-2 px-6 rounded-lg hover:bg-blue-600 transition duration-300"
          onClick={() => alert('Redirecting to booking page or more details')}
        >
          Book a Trip
        </button>
      </div>
    </div>
  );
}