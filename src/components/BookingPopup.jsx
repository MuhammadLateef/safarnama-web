import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Send, Users, Clock } from "lucide-react";
import Skardu from "../assets/skarduicon.png"
export default function BookingPopup() {
  const [isOpen, setIsOpen] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    travelers: "2",
    date: "",
    packageName: "Tour Package – Gilgit Baltistan",
    duration: "5 days",
  });

  // Show popup after 40 seconds
  useEffect(() => {
    const timer = setTimeout(() => setIsOpen(true), 40000);
    return () => clearTimeout(timer);
  }, []);

 

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const generateMessage = () => {
    return encodeURIComponent(
      `Hello, I found your tour on your website. Please provide all further details.

Package Name: ${formData.packageName}
Duration: ${formData.duration}
Travelers: ${formData.travelers}
Date: ${formData.date}

My Info:
Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}`
    );
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -100, x: 100 }}
          animate={{ opacity: 1, y: 0, x: 0 }}
          exit={{ opacity: 0, y: 50 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="fixed bottom-18 right-4 z-50 w-full max-w-md rounded-lg shadow-lg bg-white border p-5"
        >
          <div className="flex justify-between items-center mb-4">
            <div>
              <h2 className="text-lg font-semibold text-emerald-700">Book Your Dream Vacation</h2>
              <p className="text-sm text-gray-500">Special offer available now!</p>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-gray-500 hover:text-red-500"
            >
              <X />
            </button>
          </div>

          <div className="bg-emerald-50 p-3 rounded-lg mb-4 flex items-center gap-4">
            <div className="bg-white p-2 rounded-md shadow">
              <img src={Skardu} alt="Package" className="w-12 h-12" />
            </div>
            <div>
              <p className="text-emerald-800 font-medium">{formData.packageName}</p>
              <div className="flex text-sm gap-4 text-emerald-700 mt-1">
                <span className="flex items-center gap-1"><Clock className="w-4 h-4" /> {formData.duration}</span>
              </div>
            </div>
          </div>

          <form className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input type="text" name="name" placeholder="Full Name" value={formData.name} onChange={handleChange} className="border rounded p-2 col-span-1" />
            <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} className="border rounded p-2 col-span-1" />
            <input type="tel" name="phone" placeholder="Phone Number" value={formData.phone} onChange={handleChange} className="border rounded p-2 col-span-1" />
            <select name="travelers" value={formData.travelers} onChange={handleChange} className="border rounded p-2 col-span-1">
              <option value="1">1 Person</option>
              <option value="2">2 People</option>
              <option value="3">3 People</option>
              <option value="4">4 People</option>
              <option value="5+">5+ People</option>
            </select>
            <input type="date" name="date" value={formData.date} onChange={handleChange} className="border rounded p-2 col-span-2" />
          </form>

          <a
            href={`https://wa.me/923554713444?text=${generateMessage()}`}
            target="_blank"
            rel="noopener noreferrer"
            className="block mt-6 w-full bg-emerald-600 hover:bg-emerald-700 text-white py-3 text-center rounded-lg font-semibold transition"
          >
            <Send className="inline-block w-4 h-4 mr-1" />
            Book via WhatsApp
          </a>

          <p className="text-xs text-center text-gray-400 mt-2">By booking, you accept our terms and conditions.</p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
