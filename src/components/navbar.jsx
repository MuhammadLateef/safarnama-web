// import { useState } from "react";
// import { useLocation, Link } from "react-router-dom";
// import { GiHamburgerMenu } from "react-icons/gi";
// import { VscChromeClose } from "react-icons/vsc";
// import logo from "../assets/logo.png";

// export default function Navbar() {
//   const [navbarState, setNavbarState] = useState(false);
//   const [hotelMenuOpen, setHotelMenuOpen] = useState(false);
//   const location = useLocation();

//   const isCustomTourPage = ["/custom-tour", "/form"].includes(location.pathname);
//   const isHotelsPage = [
//     "/hotels",
//     "/hotels/skardu",
//     "/hotels/hunza",
//     "/hotels/astore",
//     "/hotels/ghizer",
//     "/hotels/gilgit",
//   ].includes(location.pathname);

//   const isActive = (condition) =>
//     condition
//       ? "text-blue-900 font-bold"
//       : "text-blue-600 hover:text-blue-900 transition";

//   return (
//     <>
//       <nav className="bg-blue-50 shadow-md z-[50] relative">
//         <div className="max-w-[90%] mx-auto flex justify-between items-center py-4 relative">
//           <div className="flex items-center gap-2 cursor-pointer">
//             <img src={logo} alt="Travelo" className="w-[100px] h-30 object-contain" />
//             <span className="text-lg font-bold uppercase text-blue-600">
              
//             </span>
//           </div>
//           <div className="md:hidden">
//             {navbarState ? (
//               <VscChromeClose
//                 className="text-2xl cursor-pointer"
//                 onClick={() => setNavbarState(false)}
//               />
//             ) : (
//               <GiHamburgerMenu
//                 className="text-2xl cursor-pointer"
//                 onClick={() => setNavbarState(true)}
//               />
//             )}
//           </div>
//           <ul className="hidden md:flex gap-4">
//             <li>
//               <Link to="/" className={isActive(location.pathname === "/")}>
//                 Home
//               </Link>
//             </li>
           
//             <li>
//               <Link
//                 to="/custom-tour"
//                 className={isActive(isCustomTourPage)}
//               >
//                 Custom Tour
//               </Link>
//             </li>
//             <li
//               className="relative z-[100]"
//               onMouseEnter={() => setHotelMenuOpen(true)}
//               onMouseLeave={() => setHotelMenuOpen(false)}
//             >
//               <Link to="/hotels" className={isActive(isHotelsPage)}>
//                 Hotels
//               </Link>
//               {hotelMenuOpen && (
//                 <ul className="absolute left-0 w-40 bg-white shadow-lg rounded-md py-2 z-[200]">
//                   <li>
//                     <Link
//                       to="/hotels/skardu"
//                       className={`${isActive(
//                         location.pathname === "/hotels/skardu"
//                       )} block px-4 py-2 hover:bg-gray-100 text-blue-600`}
//                     >
//                       Skardu
//                     </Link>
//                   </li>
//                   <li>
//                     <Link
//                       to="/hotels/hunza"
//                       className={`${isActive(
//                         location.pathname === "/hotels/hunza"
//                       )} block px-4 py-2 hover:bg-gray-100 text-blue-600`}
//                     >
//                       Hunza
//                     </Link>
//                   </li>
//                   <li>
//                     <Link
//                       to="/hotels/astore"
//                       className={`${isActive(
//                         location.pathname === "/hotels/astore"
//                       )} block px-4 py-2 hover:bg-gray-100 text-blue-600`}
//                     >
//                       Astore
//                     </Link>
//                   </li>
//                   <li>
//                     <Link
//                       to="/hotels/ghizer"
//                       className={`${isActive(
//                         location.pathname === "/hotels/ghizer"
//                       )} block px-4 py-2 hover:bg-gray-100 text-blue-600`}
//                     >
//                       Ghizer
//                     </Link>
//                   </li>
//                   <li>
//                     <Link
//                       to="/hotels/gilgit"
//                       className={`${isActive(
//                         location.pathname === "/hotels/gilgit"
//                       )} block px-4 py-2 hover:bg-gray-100 text-blue-600`}
//                     >
//                       Gilgit
//                     </Link>
//                   </li>
//                 </ul>
//               )}
//             </li>
//             <li>
//               <Link
//                 to="/explore-pakistan"
//                 className={isActive(location.pathname === "/explore-pakistan")}
//               >
//                 Explore Gilgit Baltistan
//               </Link>
//             </li>
//             <li>
//               <Link
//                 to="/transportation"
//                 className={isActive(location.pathname === "/transportation")}>
              
//                 Transport
//               </Link>
//             </li>
//             <li>
//               <Link
//                 to="/photography"
//                 className={isActive(location.pathname === "/photography")}>
              
//                 Photography Service
//               </Link>
//             </li>
//             <li>
//               <Link
//                 to="/about"
//                 className={isActive(location.pathname === "/about")}>
              
//                 About
//               </Link>
//             </li>
//           </ul>
//           <Link
//             to="/contact"
//             className="hidden md:block bg-blue-400 text-white px-4 py-2 rounded-lg uppercase hover:bg-blue-900 transition"
//           >
//             Contact
//           </Link>
//         </div>
//       </nav>

//       {/* Mobile Menu */}
//       {navbarState && (
//         <div className="absolute z-[1000] top-16 left-0 w-full bg-white shadow-md md:hidden">
//           <ul className="flex flex-col items-start p-4">
//             <li className="w-full py-2">
//               <Link
//                 to="/"
//                 className={isActive(location.pathname === "/")}
//                 onClick={() => setNavbarState(false)}
//               >
//                 Home
//               </Link>
//             </li>
        
//             <li className="w-full py-2">
//               <Link
//                 to="/custom-tour"
//                 className={isActive(isCustomTourPage)}
//                 onClick={() => setNavbarState(false)}
//               >
//                 Custom Tour
//               </Link>
//             </li>
//             <li className="w-full py-2">
//               <Link
//                 to="/hotels"
//                 className={isActive(isHotelsPage)}
//                 onClick={() => setHotelMenuOpen(!hotelMenuOpen)}
//               >
//                 Hotels
//               </Link>
//               {hotelMenuOpen && (
//                 <ul className="ml-4 mt-1">
//                   <li>
//                     <Link
//                       to="/hotels/skardu"
//                       className={isActive(location.pathname === "/hotels/skardu")}
//                       onClick={() => setNavbarState(false)}
//                     >
//                       Skardu
//                     </Link>
//                   </li>
//                   <li>
//                     <Link
//                       to="/hotels/hunza"
//                       className={isActive(location.pathname === "/hotels/hunza")}
//                       onClick={() => setNavbarState(false)}
//                     >
//                       Hunza
//                     </Link>
//                   </li>
//                   <li>
//                     <Link
//                       to="/hotels/astore"
//                       className={isActive(location.pathname === "/hotels/astore")}
//                       onClick={() => setNavbarState(false)}
//                     >
//                       Astore
//                     </Link>
//                   </li>
//                   <li>
//                     <Link
//                       to="/hotels/ghizer"
//                       className={isActive(location.pathname === "/hotels/ghizer")}
//                       onClick={() => setNavbarState(false)}
//                     >
//                       Ghizer
//                     </Link>
//                   </li>
//                   <li>
//                     <Link
//                       to="/hotels/gilgit"
//                       className={isActive(location.pathname === "/hotels/gilgit")}
//                       onClick={() => setNavbarState(false)}
//                     >
//                       Gilgit
//                     </Link>
//                   </li>
//                 </ul>
//               )}
//             </li>
//             <li className="w-full py-2">
//               <Link
//                 to="/explore-pakistan"
//                 className={isActive(location.pathname === "/explore-pakistan")}
//                 onClick={() => setNavbarState(false)}
//               >
//                 Explore Explore Gilgit Baltistan
//               </Link>
//             </li>
//               <li className="w-full py-2">
//               <Link
//                 to="/photography"
//                 className={isActive(location.pathname === "/")}
//                 onClick={() => setNavbarState(false)}
//               >
//                 Photography Service
//               </Link>
//             </li>
//              <li className="w-full py-2">
//               <Link
//                 to="/transportation"
//                 className={isActive(location.pathname === "/")}
//                 onClick={() => setNavbarState(false)}
//               >
//                 Transport
//               </Link>
//             </li>
//              <li className="w-full py-2">
//               <Link
//                 to="/about"
//                 className={isActive(location.pathname === "/")}
//                 onClick={() => setNavbarState(false)}
//               >
//                 About
//               </Link>
//             </li>
//           </ul>
//         </div>
//       )}
//     </>
//   );
// }

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
      path: "/photography",
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