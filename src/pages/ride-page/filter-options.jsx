
// import { Slider } from "@/components/ui/slider"


export default function FilterOptions({ filters, onFilterChange }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4">Filter Options</h2>

      <div className="space-y-6">
        {/* Car Type Filter */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Car Type</label>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
            {["all", "Private Car", "SUV Car", "Toyota Car"].map((type) => (
              <button
                key={type}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                  filters.type === type ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-800 hover:bg-gray-200"
                }`}
                onClick={() => onFilterChange({ type })}
              >
                {type === "all" ? "All Types" : type}
              </button>
            ))}
          </div>
        </div>

        {/* Minimum Seats Filter */}
        {/* <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Minimum Seats: {filters.minSeats}</label>
          <Slider
            defaultValue={[filters.minSeats]}
            max={8}
            step={1}
            onValueChange={(value) => onFilterChange({ minSeats: value[0] })}
            className="w-full"
          />
        </div> */}

        {/* Maximum Price Filter */}
        <div>
          {/* <label className="block text-sm font-medium text-gray-700 mb-2">Maximum Price: ${filters.maxPrice}</label>
          <Slider
            defaultValue={[filters.maxPrice]}
            max={100}
            step={5}
            onValueChange={(value) => onFilterChange({ maxPrice: value[0] })}
            className="w-full"
          /> */}
        </div>
      </div>
    </div>
  )
}
