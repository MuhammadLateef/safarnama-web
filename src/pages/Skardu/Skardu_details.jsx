import TourGrid from "../../components/Skardu_grid"
import { tourPackages } from "../../assets/data/Skardu_data_tour"

function HomePage() {
  return (
    <main className="w-full bg-gray-100 mx-auto  pb-20">
      <div className="container max-w-[90%] mx-auto px-4 py-12 text-center mb-12">
        <h1 className="text-3xl font-semibold text-gray-700 mb-2">Skardu Tour Packages</h1>
        <p className="text-lg text-gray-600 mb-2">A lifetime experience of Deserts, lakes, mountains and culture</p>
        <p className="text-gray-500 lg:mb-8 mb-4">list of travel packages to cater your travel desire</p>
        <TourGrid tours={tourPackages} />
      </div>

   
    </main>
  )
}

export default HomePage