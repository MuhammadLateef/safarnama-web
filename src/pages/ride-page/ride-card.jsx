import { useState } from "react"
import { Check, Users, DollarSign } from "lucide-react"



export default function RideCard({ car }) {
  const [isHovered, setIsHovered] = useState(false)
  const [isSelected, setIsSelected] = useState(false)

  const handleBookNow = () => {
    setIsSelected(!isSelected)
    const phoneNumber = '923554713444';
    const message = `Hello, I found your services through your website and I’m interested in booking the ride: ${car.name}. Kindly share the availability, prices, and how to proceed. Thanks!`;
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  }

  return (
    <div
      className={`bg-white rounded-sm overflow-hidden shadow-md transition-all duration-300 ${isHovered ? "shadow-lg transform -translate-y-1" : ""
        } ${isSelected ? "ring-2 ring-gray-900" : ""}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative h-48">
        <img src={car.image || "/placeholder.svg"} alt={car.name} fill className="object-cover h-56 w-full" />
        <div className="absolute top-3 left-3">
          {/* <Badge variant="secondary" className="font-medium">
            {car.type}
          </Badge> */}
        </div>
      </div>

      <div className="p-5 space-y-4 mt-8">
        <div>
          <h3 className="text-xl font-bold">{car.name}</h3>
          <p className="text-gray-600 mt-1">{car.description}</p>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center text-gray-700">
            <Users className="h-5 w-5 mr-1" />
            <span>{car.seats} seats</span>
          </div>
          <div className="flex items-center font-bold text-lg">
            <DollarSign className="h-5 w-5" />
            <span>{car.price}</span>
            <span className="text-sm text-gray-500 ml-1">/hour</span>
          </div>
        </div>

        <div className="flex flex-wrap gap-2">
          {car.features.map((feature, index) => (
            <div key={index} className="flex items-center text-sm text-gray-600">
              <Check className="h-4 w-4 mr-1 text-gray-900" />
              <span>{feature}</span>
            </div>
          ))}
        </div>

        <button
          onClick={handleBookNow}
          className="w-full bg-gradient-to-r from-green-600 to-green-700 text-white py-2 rounded-md hover:from-green-700 hover:to-green-800 transition"
        >
          Book Now via WhatsApp
        </button>
      </div>
    </div>
  )
}
