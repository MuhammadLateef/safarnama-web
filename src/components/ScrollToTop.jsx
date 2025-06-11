import { useState, useEffect } from "react";
import logo from "../assets/whatsapplog.png";

export default function ScrollToTop() {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowButton(window.pageYOffset > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []); 
  const openWhatsApp = () => {
    window.open("https://wa.me/9203554713444?text=Hello!%20I%20need%20some%20information", "_blank");
  };

  return (
    <div
    className={`fixed bottom-4 right-6 z-10 p-4 rounded-full bg-green-500 cursor-pointer transition-opacity ${showButton ? "opacity-100" : "opacity-0"}`}
    onClick={openWhatsApp}
  >
    <img src={logo} alt="WhatsApp" className="h-10 w-10 object-cover" />
  </div>
  );
}
