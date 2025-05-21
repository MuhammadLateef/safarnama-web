
import { useState } from "react";
import { useLocation, Link, Links } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { VscChromeClose } from "react-icons/vsc";
import logo from "../assets/logo.png";

export default function Navbar() {
  const [navbarState, setNavbarState] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const location = useLocation();

  // Simplified route checking
  const isActive = (path) => {
    if (typeof path === "string") {
      return location.pathname === path ? "text-blue-900 font-semibold" : "";
    }
    return path.some(route => location.pathname.includes(route)) ? "text-blue-900 font-semibold" : "";
  };

  // Toggle dropdown menu
  const toggleDropdown = (menu) => {
    setActiveDropdown(activeDropdown === menu ? null : menu);
  };

  // Navigation items with their properties
  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Tours", path: "/tourism" },
    { 
      name: "Hotels", 
      path: "/hotels",
      // dropdown: [
      //   { name: "Skardu", path: "/hotels/skardu" },
      //   { name: "Hunza", path: "/hotels/hunza" },
      //   { name: "Astore", path: "/hotels/astore" },
      //   { name: "Ghizer", path: "/hotels/ghizer" },
      //   { name: "Gilgit", path: "/hotels/gilgit" }
      // ]
    },
    { name: "Explore Gilgit Baltistan", path: "/explore-pakistan" },
    { name: "Transport", path: "/ride-page" },
    { 
      name: "Photography Service", 
      path: "/#",
      dropdown: [
        { name: "Wedding Shots", path: "/wedding-shots" },
        { name: "Drone Shots", path: "/drone-shots" }
      ]
    },

  ];

  return (
    <>
      <nav className="bg-blue-50 shadow-md z-50 relative">
        <div className="max-w-[90%] mx-auto flex justify-between items-center py-4">
          {/* Logo */}
          <Link to={`/`} className="flex items-center gap-2">
            <img src={logo} alt="Travelo" className="w-[100px] h-auto object-contain" />
          </Link>
          
          {/* Mobile Menu Button */}
          <div className="md:hidden">
            {navbarState ? (
              <VscChromeClose
                className="text-2xl cursor-pointer text-blue-700"
                onClick={() => setNavbarState(false)}
              />
            ) : (
              <GiHamburgerMenu
                className="text-2xl cursor-pointer text-blue-700"
                onClick={() => setNavbarState(true)}
              />
            )}
          </div>
          
          {/* Desktop Navigation */}
          <ul className="hidden md:flex items-center gap-6">
            {navItems.map((item, index) => (
              <li 
                key={index} 
                className="relative group"
                onMouseEnter={() => item.dropdown && setActiveDropdown(item.name)}
                onMouseLeave={() => item.dropdown && setActiveDropdown(null)}
              >
                <Link 
                  to={item.path} 
                  className={`text-blue-600 hover:text-blue-900 font-medium text-base transition-all duration-300 ${isActive(item.dropdown ? [item.path] : item.path)}`}
                >
                  {item.name}
                </Link>
                
                {/* Dropdown Menu with Smooth Transition */}
                {item.dropdown && (
                  <ul 
                    className={`absolute left-0 w-44 bg-white shadow-lg rounded-md py-2 mt-2 z-50 
                              transform origin-top opacity-0 scale-y-0 group-hover:opacity-100 group-hover:scale-y-100
                              transition-transform duration-300 ease-out`}
                    style={{ 
                      visibility: activeDropdown === item.name ? 'visible' : 'hidden',
                      transformOrigin: 'top'
                    }}
                  >
                    {item.dropdown.map((dropItem, idx) => (
                      <li key={idx}>
                        <Link
                          to={dropItem.path}
                          className={`block px-4 py-2 hover:bg-blue-50 text-blue-600 hover:text-blue-900 transition-all duration-200 ${isActive(dropItem.path)}`}
                        >
                          {dropItem.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
          
          {/* Contact Button */}
          <Link
            to="/contact"
            className="hidden md:block bg-blue-500 text-white px-5 py-2 rounded-md font-medium text-sm hover:bg-blue-700 transition-all duration-300 shadow-sm"
          >
            Contact Us
          </Link>
        </div>
      </nav>

      {/* Mobile Navigation */}
      {navbarState && (
        <div className="fixed top-28 left-0 w-full h-screen bg-white shadow-md md:hidden z-50 overflow-y-auto transform transition-transform duration-300 ease-out">
          <ul className="flex flex-col p-4">
            {navItems.map((item, index) => (
              <li key={index} className="border-b border-gray-100 py-3">
                <div className="flex justify-between items-center">
                  <Link
                    to={item.path}
                    className={`text-blue-600 hover:text-blue-900 font-medium ${isActive(item.path)}`}
                    onClick={() => !item.dropdown && setNavbarState(false)}
                  >
                    {item.name}
                  </Link>
                  {item.dropdown && (
                    <button 
                      onClick={() => toggleDropdown(item.name)}
                      className="px-2 py-1 text-blue-600"
                    >
                      {activeDropdown === item.name ? "−" : "+"}
                    </button>
                  )}
                </div>
                
                {/* Mobile Dropdown with Transition */}
                {item.dropdown && (
                  <ul 
                    className={`ml-4 mt-2 border-l-2 border-blue-100 pl-2
                                overflow-hidden transition-all duration-300 ease-out
                                ${activeDropdown === item.name ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'}`}
                  >
                    {item.dropdown.map((dropItem, idx) => (
                      <li key={idx} className="py-2">
                        <Link
                          to={dropItem.path}
                          className={`text-blue-600 hover:text-blue-900 transition-all duration-200 ${isActive(dropItem.path)}`}
                          onClick={() => setNavbarState(false)}
                        >
                          {dropItem.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
            
            {/* Mobile Contact Button */}
            <li className="mt-4">
              <Link
                to="/contact"
                className="block w-full bg-blue-500 text-white text-center py-3 rounded-md font-medium hover:bg-blue-700 transition-all duration-300"
                onClick={() => setNavbarState(false)}
              >
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
      )}
    </>
  );
}