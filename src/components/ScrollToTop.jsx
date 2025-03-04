import { useState, useEffect } from "react";
import logo from "../assets/logo.png";

export default function ScrollToTop() {
  const [scrollState, setScrollState] = useState(false);

  const toTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrollState(window.pageYOffset > 200);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`fixed bottom-4 right-6 z-10 p-4 rounded-full bg-blue-600 cursor-pointer transition-opacity ${scrollState ? "opacity-100" : "opacity-0"}`}
      onClick={toTop}
    >
      <img src={logo} alt="Scroll to Top" className="h-6" />
    </div>
  );
}
