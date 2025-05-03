import RideSelection from "./ride-selection"

export default function RidePage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-2">Choose Your Ride</h1>
        <p className="text-gray-600 text-center mb-8">Select the perfect vehicle for your journey</p>

        <RideSelection />
      </div>
    </main>
  )
}
