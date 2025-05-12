import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet";

// Sample destination data
const destinationData = {
  hunza: {
    title: "Hunza Valley - Explore Gilgit Baltistan",
    image: "/assets/hunza.jpg",
    description: "Hunza is known for its stunning valleys, hospitable people, and breathtaking views of snow-covered peaks.",
    famousPlaces: ["Altit Fort", "Baltit Fort", "Attabad Lake", "Passu Cones"]
  },
  skardu: {
    title: "Skardu - Gateway to the Karakoram",
    image: "/assets/skardu.jpg",
    description: "Skardu is a gateway to some of the world's highest peaks and a treasure trove of natural beauty.",
    famousPlaces: ["Shangrila Lake", "Shigar Fort", "Satpara Lake", "Deosai Plains"]
  },
  // Add more destinations here...
};

export default function ExploreDetailPage() {
  const { name } = useParams();
  const slug = name.toLowerCase();
  const data = destinationData[slug];

  if (!data) {
    return (
      <>
        <Helmet>
          <title>Destination Not Found - Explore Gilgit Baltistan</title>
          <meta name="description" content="The requested destination could not be found in our list." />
        </Helmet>
        <div className="p-8 text-center text-xl text-gray-600">Destination not found.</div>
      </>
    );
  }

  return (
    <>
      <Helmet>
        <title>{data.title}</title>
        <meta name="description" content={data.description} />
        <meta property="og:title" content={data.title} />
        <meta property="og:description" content={data.description} />
        <meta property="og:image" content={data.image} />
      </Helmet>

      <div className="w-full max-w-screen-lg mx-auto p-6">
        {/* Hero Image */}
        <section className="relative w-full h-80 sm:h-[60vh] mb-6 rounded-lg overflow-hidden">
          <img
            src={data.image}
            alt={`${name} landscape view`}
            className="w-full h-full object-cover opacity-70"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center text-center text-white">
            <h1 className="text-3xl sm:text-4xl font-bold capitalize">{name}</h1>
          </div>
        </section>

        {/* Main Content */}
        <section className="text-center">
          <p className="text-lg sm:text-xl text-gray-700 mb-6">{data.description}</p>

          <h2 className="text-2xl sm:text-3xl font-semibold mb-4">Top Places to Visit in {name}</h2>
          <ul className="list-disc list-inside text-gray-600 text-lg">
            {data.famousPlaces.map((place, index) => (
              <li key={index} className="mb-2">{place}</li>
            ))}
          </ul>
        </section>

        {/* Booking CTA */}
        <section className="text-center mt-8">
          <button
            className="bg-blue-500 text-white py-2 px-6 rounded-lg hover:bg-blue-600 transition duration-300"
            onClick={() => alert('Redirecting to booking page or more details')}
          >
            Book a Trip
          </button>
        </section>
      </div>
    </>
  );
}
