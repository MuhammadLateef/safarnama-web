import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { VscChromeClose } from "react-icons/vsc";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

export default function Navbar() {
  const [navbarState, setNavbarState] = useState(false);

  return (
    <>
      <nav className="bg-white shadow-md">
        <div className="max-w-[90%] relative mx-auto flex justify-between items-center py-4">
          <div className="flex items-center gap-2 cursor-pointer">
            <img src={logo} alt="Travelo" className="w-10 h-10" />
            <span className="text-lg font-bold uppercase text-blue-600">Travel</span>
          </div>
          <div className="md:hidden">
            {navbarState ? (
              <VscChromeClose
                className="text-2xl cursor-pointer"
                onClick={() => setNavbarState(false)}
              />
            ) : (
              <GiHamburgerMenu
                className="text-2xl cursor-pointer"
                onClick={() => setNavbarState(true)}
              />
            )}
          </div>
          <ul className="hidden md:flex gap-4">
            <li>
              <Link to="/" className="text-blue-900 font-bold">Home</Link>
            </li>
            <li>
              <Link to="/search-tour" className="text-blue-600 hover:text-blue-900 transition">Search Tour</Link>
            </li>
            <li>
              <Link to="/custom-tour" className="text-blue-600 hover:text-blue-900 transition">Custom Tour</Link>
            </li>
            <li>
              <Link to="/hotels" className="text-blue-600 hover:text-blue-900 transition">Hotels</Link>
            </li>
            <li>
              <Link to="/explore-pakistan" className="text-blue-600 hover:text-blue-900 transition">Explore Pakistan</Link>
            </li>
          </ul>
          <button className="hidden md:block bg-blue-400 text-white px-4 py-2 rounded-lg uppercase hover:bg-blue-900 transition">
            Contact
          </button>
        </div>
      </nav>
      {navbarState && (
        <div className="absolute z-[44444] top-16 left-0 w-full bg-white shadow-md md:hidden">
          <ul className="flex flex-col items-start p-4">
            <li className="w-full py-2">
              <Link to="/" className="text-blue-900 font-bold" onClick={() => setNavbarState(false)}>Home</Link>
            </li>
            <li className="w-full py-2">
              <Link to="/about" className="text-blue-600 hover:text-blue-900 transition" onClick={() => setNavbarState(false)}>Search Tour</Link>
            </li>
            <li className="w-full py-2">
              <Link to="/places" className="text-blue-600 hover:text-blue-900 transition" onClick={() => setNavbarState(false)}>Custom Tour</Link>
            </li>
            <li className="w-full py-2">
              <Link to="/testimonials" className="text-blue-600 hover:text-blue-900 transition" onClick={() => setNavbarState(false)}>Hotels</Link>
            </li>
            <li className="w-full py-2">
              <Link to="/testimonials" className="text-blue-600 hover:text-blue-900 transition" onClick={() => setNavbarState(false)}>Explore Pakistan</Link>
            </li>
          </ul>

        </div>
      )}
    </>
  );
}
