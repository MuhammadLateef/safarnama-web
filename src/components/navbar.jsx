import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { VscChromeClose } from "react-icons/vsc";
import logo from "../assets/logo.png";

export default function Navbar() {
  const [navbarState, setNavbarState] = useState(false);

  return (
    <>
      <nav className="flex justify-between items-center p-4 bg-white shadow-md">
        <div className="flex items-center gap-2 cursor-pointer">
          <img src={logo} alt="Travelo" className="w-10 h-10" />
          <span className="text-lg font-bold uppercase text-blue-600">Travelo</span>
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
            <a href="#home" className="text-blue-900 font-bold">Home</a>
          </li>
          <li>
            <a href="#services" className="text-blue-600 hover:text-blue-900 transition">About</a>
          </li>
          <li>
            <a href="#recommend" className="text-blue-600 hover:text-blue-900 transition">Places</a>
          </li>
          <li>
            <a href="#testimonials" className="text-blue-600 hover:text-blue-900 transition">Testimonials</a>
          </li>
        </ul>
        <button className="hidden md:block bg-blue-400 text-white px-4 py-2 rounded-lg uppercase hover:bg-blue-900 transition">
          Connect
        </button>
      </nav>
      {navbarState && (
        <div className="absolute top-16 left-0 w-full bg-white shadow-md md:hidden">
          <ul className="flex flex-col items-start p-4">
            <li className="w-full py-2">
              <a href="#home" className="text-blue-900 font-bold" onClick={() => setNavbarState(false)}>Home</a>
            </li>
            <li className="w-full py-2">
              <a href="#services" className="text-blue-600 hover:text-blue-900 transition" onClick={() => setNavbarState(false)}>About</a>
            </li>
            <li className="w-full py-2">
              <a href="#recommend" className="text-blue-600 hover:text-blue-900 transition" onClick={() => setNavbarState(false)}>Places</a>
            </li>
            <li className="w-full py-2">
              <a href="#testimonials" className="text-blue-600 hover:text-blue-900 transition" onClick={() => setNavbarState(false)}>Testimonials</a>
            </li>
          </ul>
        </div>
      )}
    </>
  );
}
