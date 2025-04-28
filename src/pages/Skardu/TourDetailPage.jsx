import { useState } from "react"
import { useParams, useNavigate, Link } from "react-router-dom"
import { FaCalendarAlt, FaPhone, FaWhatsapp, FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa"
import { LuArrowLeft } from "react-icons/lu"
import { tourPackages, companyInfo } from "../../assets/data/Skardu_data_tour"
import TourGrid from "../../components/Skardu_grid"
function TourDetailPage() {
  const { id } = useParams()
  const navigate = useNavigate()
  const [activeTab, setActiveTab] = useState("Overview")

  const tour = tourPackages.find((tour) => tour.id === id)

  if (!tour) {
    return (
      <div className="container mx-auto px-4 py-12 text-center">
        <h1 className="text-3xl font-bold mb-6">Tour Not Found</h1>
        <button
          onClick={() => navigate("/")}
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-md transition-all"
        >
          Back to Tours
        </button>
      </div>
    )
  }

  const tourDetails = tour.details || {
    overview: { description: "Tour details coming soon. Please contact us for more information." },
    itinerary: [],
    inclusions: [],
    exclusions: [],
    gallery: [],
  }

  return (
    <div className="w-full bg-white">
      {/* Hero Section */}
      <div className="relative w-full h-[400px]">
        <img
          src={tour.imageUrl || "/placeholder.svg?height=400&width=1000"}
          alt={tour.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50 flex flex-col justify-end p-8">
          <h1 className="text-4xl font-bold text-white mb-3">{tour.title}</h1>
          <div className="flex items-center text-white">
            <FaCalendarAlt className="mr-2" />
            <span>{tour.duration}</span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex flex-col lg:flex-row gap-8 w-full max-w-[90%] mx-auto my-10 px-4">
        {/* Left Section */}
        <div className="w-full lg:w-2/3 space-y-8">
          {/* Back Button */}
          <Link
            to="/skardu-visits"
            className="inline-flex items-center gap-2 border border-gray-300 bg-blue-600 hover:bg-blue-700 text-white font-medium px-4 py-2 rounded-md transition-all"
          >
            <LuArrowLeft className="transition-transform duration-300 group-hover:-translate-x-1" />
            Back to Book Page
          </Link>
          {/* Tabs */}
          <div className="flex border-b border-gray-300">
            {["Overview", "Itinerary", "Inclusions", "Gallery"].map((tab) => (
              <button
                key={tab}
                className={`px-6 py-3 text-sm font-semibold transition-colors ${activeTab === tab
                    ? "text-blue-600 border-b-2 border-blue-600"
                    : "hover:text-blue-500"
                  }`}
                onClick={() => setActiveTab(tab)}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="pt-6">
            {activeTab === "Overview" && (
              <>
                <p className="mb-6 text-gray-700">{tourDetails.overview.description}</p>

                {tourDetails.itinerary.some((day) => day.highlights) && (
                  <>
                    <h2 className="text-2xl font-bold mb-4">Tour Highlights</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {tourDetails.itinerary
                        .filter((day) => day.highlights)
                        .slice(0, 2)
                        .map((day) => (
                          <div key={day.day}>
                            <h3 className="text-lg font-semibold mb-3">Day {day.day}</h3>
                            <ul className="space-y-2">
                              {day.highlights.map((highlight, index) => (
                                <li key={index} className="flex items-start gap-2 text-gray-600">
                                  <span className="text-blue-600">⚡</span> {highlight}
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                    </div>
                  </>
                )}
              </>
            )}

            {activeTab === "Itinerary" && (
              <div className="space-y-8">
                {tourDetails.itinerary.length > 0 ? (
                  tourDetails.itinerary.map((day) => (
                    <div key={day.day} className="pl-4 border-l-4 border-blue-600">
                      <h3 className="text-xl font-bold">{`Day ${day.day}: ${day.title}`}</h3>
                      <p className="mt-2 text-gray-700">{day.description}</p>
                    </div>
                  ))
                ) : (
                  <p className="text-gray-500">Itinerary details coming soon.</p>
                )}
              </div>
            )}

            {activeTab === "Inclusions" && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-bold mb-4">Inclusions</h3>
                  <ul className="space-y-2">
                    {tourDetails.inclusions.length > 0 ? (
                      tourDetails.inclusions.map((item, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-green-600">
                          {item.type === "major" ? "✓" : "•"} {item.text}
                        </li>
                      ))
                    ) : (
                      <p className="text-gray-500">Inclusion details coming soon.</p>
                    )}
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-4">Exclusions</h3>
                  <ul className="space-y-2">
                    {tourDetails.exclusions.length > 0 ? (
                      tourDetails.exclusions.map((item, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-red-600">
                          ✕ {item.text}
                        </li>
                      ))
                    ) : (
                      <p className="text-gray-500">Exclusion details coming soon.</p>
                    )}
                  </ul>
                </div>
              </div>
            )}

            {activeTab === "Gallery" && (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {tourDetails.gallery.length > 0 ? (
                  tourDetails.gallery.map((img, idx) => (
                    <div key={idx} className="overflow-hidden rounded-lg shadow-md">
                      <img
                        src={img || "/placeholder.svg"}
                        alt={`Tour image ${idx + 1}`}
                        className="w-full h-48 object-cover hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                  ))
                ) : (
                  <p className="col-span-3 text-center text-gray-500 py-8">Gallery coming soon.</p>
                )}
              </div>
            )}
          </div>
        </div>

        {/* Right Sidebar */}
        <aside className="w-full lg:w-1/3 space-y-8 sticky top-24 self-start bg-gray-50 p-6 rounded-lg shadow-md">
          {/* Price */}
          <div className="text-center">
            <h2 className="text-4xl font-bold text-blue-600">{tour.price}</h2>
            <p className="text-gray-600">per person</p>
          </div>

          {/* Book Button */}
          <button className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-3 rounded-lg flex items-center justify-center gap-2 transition-all">
            <FaWhatsapp className="text-xl" /> Book via WhatsApp
          </button>

          {/* Duration */}
          <div className="flex items-center justify-center text-gray-700 gap-2">
            <FaCalendarAlt className="text-blue-600" />
            {tour.duration}
          </div>

          {/* Phone */}
          <div className="flex items-center justify-center text-gray-700 gap-2">
            <FaPhone className="text-blue-600" />
            {tourDetails.phone || companyInfo.phone}
          </div>

          {/* Divider */}
          <hr />

          {/* Social Media */}
          <div className="text-center space-y-4">
            <p className="text-gray-500">Follow us for updates</p>
            <div className="flex justify-center gap-4 text-2xl text-blue-600">
              <FaFacebook className="hover:text-blue-500 cursor-pointer" />
              <FaInstagram className="hover:text-pink-500 cursor-pointer" />
              <FaLinkedin className="hover:text-blue-500 cursor-pointer" />
            </div>
          </div>

          {/* WhatsApp Community */}
          <div className="flex items-center justify-center text-green-600 gap-2">
            <FaWhatsapp />
            Join WhatsApp Community
          </div>

          {/* Divider */}
          <hr />

          {/* Office Address */}
          <div className="text-center text-gray-700">
            <h3 className="font-bold mb-2">Our Office</h3>
            <p>{tourDetails.companyInfo?.name || companyInfo.name}</p>
            <p>{tourDetails.companyInfo?.address || companyInfo.address}</p>
            <p>{tourDetails.companyInfo?.street || companyInfo.street}</p>
            <p>{tourDetails.companyInfo?.location || companyInfo.location}</p>
            <button className="text-blue-600 hover:underline mt-2">Get Directions</button>
          </div>
        </aside>
      </div>
      <div className=" max-w-[90%] mx-auto container py-10">
        <TourGrid tours={tourPackages} />
      </div>
    </div>
  )
}

export default TourDetailPage
