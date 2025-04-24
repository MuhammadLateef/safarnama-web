import { useParams, useNavigate, Link } from "react-router-dom"
import { tourPackages } from "../../data/Skardu_data_tour"
import { LuArrowLeft } from "react-icons/lu";

function TourDetailPage() {
  const { id } = useParams()
  const navigate = useNavigate()

  const tour = tourPackages.find((tour) => tour.id === id)

  if (!tour) {
    // Handle not found
    return (
      <div className="container mx-auto px-4 py-12 text-center">
        <h1 className="text-3xl font-bold mb-6">Tour Not Found</h1>
        <button
          onClick={() => navigate("/")}
          className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-md transition-colors"
        >
          Back to Tours
        </button>
      </div>
    )
  }

  return (
    <div className="container max-w-[90%] mx-auto px-4 py-12">
    
      <button>
        <Link
          to={`/skardu-visits`}
          className="group border border-gray-400 flex items-center gap-2 bg-[#337ab7] hover:bg-blue-500 text-white text-sm font-normal py-1 px-3 transition-all duration-300 rounded-md"
        >
          {/* Arrow Icon - initially hidden, then slide in from right on hover */}
          <span className="transform translate-x-4 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300">
            <LuArrowLeft />
          </span>

          {/* Text Content */}
          <p className="tracking-wide whitespace-nowrap">Back to Book page</p>
        </Link>
      </button>
      <h1 className="text-3xl font-bold my-6">{tour.title}</h1>
      <div className="relative h-80 rounded-lg overflow-hidden mb-8">
        <img src={tour.imageUrl || "/placeholder.svg"} alt={tour.title} className="w-full h-full object-cover" />
      </div>
      <div className="bg-gray-100 p-4 rounded-md mb-6">
        <p className="text-lg">Duration: {tour.duration}</p>
        <p className="text-lg">Starting Price: {tour.price}</p>
      </div>
      <p className="text-gray-600 mb-8">
        This is a detailed page for the {tour.title} package. Here you would find more information about the itinerary,
        accommodations, inclusions, exclusions, and booking options.
      </p>
      <button className="bg-[#337ab7] hover:bg-blue-500 text-white font-medium py-3 px-8 rounded-md transition-colors">
        Book This Tour
      </button>
    </div>
  )
}

export default TourDetailPage;
