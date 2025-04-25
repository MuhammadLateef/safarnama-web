import { useState } from "react"
import ContactForm from "./Contact-form"
import HeroSection from "./Hero-section"
import DroneServices from "./Services"

function DronePage() {
  const [isFormOpen, setIsFormOpen] = useState(false)

  const openForm = () => {
    setIsFormOpen(true)
  }

  const closeForm = () => {
    setIsFormOpen(false)
  }

  return (
    <div className="min-h-screen bg-gray-200 text-black">
      {/* Hero Section */}
      <HeroSection />

      {/* Services Sections */}
      <DroneServices />
      <div
        className="py-16 bg-cover bg-center relative"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1527977966376-1c8408f9f108?q=80&w=1000&auto=format&fit=crop')",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-70"></div>
        <div className="container mx-auto px-4 text-white text-center relative z-10">
          <h2 className="text-2xl font-bold mb-6">Ready to start your Arial Video?</h2>
          <button
            onClick={openForm}
            className="border border-white px-6 py-2 hover:bg-white hover:text-black transition duration-300 inline-flex items-center"
          >
            TALK WITH US
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 ml-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </button>
        </div>
      </div>
      {isFormOpen && <ContactForm onClose={closeForm} />}
    </div>
  )
}

export default DronePage;
