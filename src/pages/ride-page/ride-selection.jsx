import { useState } from "react"
import RideCard from "./ride-card"
import FilterOptions from "./filter-options"
import transportHero from "../../assets/transport-hero-img.jpg";
import carIcon from "../../assets/Motorcar.jpg";
import vanIcon from "../../assets/Suvcar.jpg";
import busIcon from "../../assets/toyota car.jpg";
export default function RideSelection() {
  const [cars, setCars] = useState([
    {
      id: 1,
      type: "Private Car",
      name: "Luxury Sedan",
      description:
        "Comfortable and elegant ride for up to 4 passengers. Perfect for business trips or city exploration.",
      price: 0,
      image: carIcon,
      seats: 4,
      features: ["WiFi", "Water Bottles", "Charging Ports", "Professional Driver"],
    },
    {
      id: 2,
      type: "SUV Car",
      name: "Premium SUV",
      description: "Spacious and versatile vehicle for up to 6 passengers. Ideal for families or groups with luggage.",
      price: 0,
      image: vanIcon,
      seats: 6,
      features: ["WiFi", "Water Bottles", "Charging Ports", "Extra Luggage Space"],
    },
    {
      id: 3,
      type: "Toyota Car",
      name: "Toyota Camry",
      description: "Reliable and fuel-efficient sedan for up to 4 passengers. Great value for everyday travel needs.",
      price: 0,
      image: busIcon,
      seats: 4,
      features: ["Air Conditioning", "Charging Ports", "Fuel Efficient"],
    },
  ])

  const [filters, setFilters] = useState({
    type: "all",
    minSeats: 0,
    maxPrice: 100,
  })

  const filteredCars = cars.filter((car) => {
    return (
      (filters.type === "all" || car.type === filters.type) &&
      car.seats >= filters.minSeats &&
      car.price <= filters.maxPrice
    )
  })

  const handleFilterChange = (newFilters) => {
    setFilters({ ...filters, ...newFilters })
  }

  return (
    <div className="space-y-8">
      <FilterOptions filters={filters} onFilterChange={handleFilterChange} />

      {filteredCars.length === 0 ? (
        <div className="text-center py-12 bg-white rounded-lg shadow">
          <h3 className="text-xl font-medium text-gray-700">No rides match your filters</h3>
          <p className="text-gray-500 mt-2">Try adjusting your filter criteria</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCars.map((car) => (
            <RideCard key={car.id} car={car} />
          ))}
        </div>
      )}
    </div>
  )
}
