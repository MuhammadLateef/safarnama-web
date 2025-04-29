import { useState } from "react";
import ContactForm from "./Contact-form";
import HeroSection from "./Hero-section";
import WeddingServices from "./Services"; // You might want a separate WeddingServices component, or adjust the DroneServices one.

function WeddingShotPage() {
  const [isFormOpen, setIsFormOpen] = useState(false);

  const openForm = () => {
    setIsFormOpen(true);
  };

  const closeForm = () => {
    setIsFormOpen(false);
  };

  return (
    <div className="min-h-screen text-black">
      {/* Hero Section */}
      <HeroSection />

      {/* Services Sections */}
      <WeddingServices />
      
      <div
        className="py-16 bg-cover bg-center relative"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=1000&q=80')",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        <div className="container mx-auto px-4 text-white text-center relative z-10">
          <h2 className="text-2xl font-bold mb-6">Capture Your Special Day Beautifully</h2>
          <button
            onClick={openForm}
            className="border border-white px-6 py-2 hover:bg-white hover:text-black transition duration-300 inline-flex items-center"
          >
            BOOK A SESSION
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
  );
}

export default WeddingShotPage;
