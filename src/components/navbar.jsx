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
//   const isHotelsPage = ["/hotels", "/hotels/skardu", "/hotels/hunza", "/hotels/naran", "/hotels/swat", "/hotels/gilgit"].includes(location.pathname);

//   const isActive = (condition) => condition ? "text-blue-900 font-bold" : "text-blue-600 hover:text-blue-900 transition";

//   return (
//     <>
//       <nav className="bg-white shadow-md z-[50] relative">
//         <div className="max-w-[90%] mx-auto flex justify-between items-center py-4 relative">
//           <div className="flex items-center gap-2 cursor-pointer">
//             <img src={logo} alt="Travelo" className="w-10 h-10" />
//             <span className="text-lg font-bold uppercase text-blue-600">Travel</span>
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
//             <li><Link to="/" className={isActive(location.pathname === "/")}>Home</Link></li>
//             <li><Link to="/search-tour" className={isActive(location.pathname === "/search-tour")}>Search Tour</Link></li>
//             <li><Link to="/custom-tour" className={isActive(isCustomTourPage)}>Custom Tour</Link></li>
//             <li
//               className="relative z-[100]"
//               onMouseEnter={() => setHotelMenuOpen(true)}
//               onMouseLeave={() => setHotelMenuOpen(false)}
//             >
//               <Link to="/hotels" className={isActive(isHotelsPage)}>Hotels</Link>
//               {hotelMenuOpen && (
//                 <ul className="absolute left-0 w-40 bg-white shadow-lg rounded-md py-2 z-[200]">
//                   <li><Link to="/hotels/skardu" className=`{isActive(location.pathname === "/hotels/skardu") block px-4 py-2 hover:bg-gray-100 text-blue-600}`>Skardu</Link></li>
//                   <li><Link to="/hotels/hunza" className={isActive(location.pathname === "/hotels/hunza")"block px-4 py-2 hover:bg-gray-100 text-blue-600"}>Hunza</Link></li>
//                   <li><Link to="/hotels/naran" className={isActive(location.pathname === "/hotels/naran")"block px-4 py-2 hover:bg-gray-100 text-blue-600"}>Naran</Link></li>
//                   <li><Link to="/hotels/swat" className={isActive(location.pathname === "/hotels/swat")"block px-4 py-2 hover:bg-gray-100 text-blue-600"}>Swat</Link></li>
//                   <li><Link to="/hotels/gilgit" className={isActive(location.pathname === "/hotels/gilgit")"block px-4 py-2 hover:bg-gray-100 text-blue-600"}>Gilgit</Link></li>
//                 </ul>
//               )}
//             </li>
//             <li><Link to="/explore-pakistan" className={isActive(location.pathname === "/explore-pakistan")}>Explore Pakistan</Link></li>
//           </ul>
//           <Link to="/contact" className="hidden md:block bg-blue-400 text-white px-4 py-2 rounded-lg uppercase hover:bg-blue-900 transition">
//             Contact
//           </Link>
//         </div>
//       </nav>

//       {/* Mobile Menu */}
//       {navbarState && (
//         <div className="absolute z-[1000] top-16 left-0 w-full bg-white shadow-md md:hidden">
//           <ul className="flex flex-col items-start p-4">
//             <li className="w-full py-2"><Link to="/" className={isActive(location.pathname === "/")} onClick={() => setNavbarState(false)}>Home</Link></li>
//             <li className="w-full py-2"><Link to="/search-tour" className={isActive(location.pathname === "/search-tour")} onClick={() => setNavbarState(false)}>Search Tour</Link></li>
//             <li className="w-full py-2"><Link to="/custom-tour" className={isActive(isCustomTourPage)} onClick={() => setNavbarState(false)}>Custom Tour</Link></li>
//             <li className="w-full py-2">
//               <Link to="/hotels" className={isActive(isHotelsPage)} onClick={() => setHotelMenuOpen(!hotelMenuOpen)}>Hotels</Link>
//               {hotelMenuOpen && (
//                 <ul className="ml-4 mt-1">
//                   <li><Link to="/hotels/skardu" className={isActive(location.pathname === "/hotels/skardu")} onClick={() => setNavbarState(false)}>Skardu</Link></li>
//                   <li><Link to="/hotels/hunza" className={isActive(location.pathname === "/hotels/hunza")} onClick={() => setNavbarState(false)}>Hunza</Link></li>
//                   <li><Link to="/hotels/swat" className={isActive(location.pathname === "/hotels/swat")} onClick={() => setNavbarState(false)}>Swat</Link></li>
//                   <li><Link to="/hotels/gilgit" className={isActive(location.pathname === "/hotels/gilgit")} onClick={() => setNavbarState(false)}>Gilgit</Link></li>
//                   <li><Link to="/hotels/naran" className={isActive(location.pathname === "/hotels/naran")} onClick={() => setNavbarState(false)}>Naran</Link></li>
//                 </ul>
//               )}
//             </li>
//             <li className="w-full py-2"><Link to="/explore-pakistan" className={isActive(location.pathname === "/explore-pakistan")} onClick={() => setNavbarState(false)}>Explore Pakistan</Link></li>
//           </ul>
//         </div>
//       )}
//     </>
//   );
// }
import { useState } from "react";
import { useLocation, Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { VscChromeClose } from "react-icons/vsc";
import logo from "../assets/IMG.png";

export default function Navbar() {
  const [navbarState, setNavbarState] = useState(false);
  const [hotelMenuOpen, setHotelMenuOpen] = useState(false);
  const location = useLocation();

  const isCustomTourPage = ["/custom-tour", "/form"].includes(location.pathname);
  const isHotelsPage = [
    "/hotels",
    "/hotels/skardu",
    "/hotels/hunza",
    "/hotels/naran",
    "/hotels/swat",
    "/hotels/gilgit",
  ].includes(location.pathname);

  const isActive = (condition) =>
    condition
      ? "text-blue-900 font-bold"
      : "text-blue-600 hover:text-blue-900 transition";

  return (
    <>
      <nav className="bg-blue-50 shadow-md z-[50] relative">
        <div className="max-w-[90%] mx-auto flex justify-between items-center py-4 relative">
          <div className="flex items-center gap-2 cursor-pointer">
            <img src={logo} alt="Travelo" className="w-[100px] h-30 object-contain" />
            <span className="text-lg font-bold uppercase text-blue-600">
              
            </span>
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
              <Link to="/" className={isActive(location.pathname === "/")}>
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className={isActive(location.pathname === "/")}>
              
                About
              </Link>
            </li>
            <li>
              <Link
                to="/custom-tour"
                className={isActive(isCustomTourPage)}
              >
                Custom Tour
              </Link>
            </li>
            <li
              className="relative z-[100]"
              onMouseEnter={() => setHotelMenuOpen(true)}
              onMouseLeave={() => setHotelMenuOpen(false)}
            >
              <Link to="/hotels" className={isActive(isHotelsPage)}>
                Hotels
              </Link>
              {hotelMenuOpen && (
                <ul className="absolute left-0 w-40 bg-white shadow-lg rounded-md py-2 z-[200]">
                  <li>
                    <Link
                      to="/hotels/skardu"
                      className={`${isActive(
                        location.pathname === "/hotels/skardu"
                      )} block px-4 py-2 hover:bg-gray-100 text-blue-600`}
                    >
                      Skardu
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/hotels/hunza"
                      className={`${isActive(
                        location.pathname === "/hotels/hunza"
                      )} block px-4 py-2 hover:bg-gray-100 text-blue-600`}
                    >
                      Hunza
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/hotels/naran"
                      className={`${isActive(
                        location.pathname === "/hotels/naran"
                      )} block px-4 py-2 hover:bg-gray-100 text-blue-600`}
                    >
                      Naran
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/hotels/swat"
                      className={`${isActive(
                        location.pathname === "/hotels/swat"
                      )} block px-4 py-2 hover:bg-gray-100 text-blue-600`}
                    >
                      Swat
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/hotels/gilgit"
                      className={`${isActive(
                        location.pathname === "/hotels/gilgit"
                      )} block px-4 py-2 hover:bg-gray-100 text-blue-600`}
                    >
                      Gilgit
                    </Link>
                  </li>
                </ul>
              )}
            </li>
            <li>
              <Link
                to="/explore-pakistan"
                className={isActive(location.pathname === "/explore-pakistan")}
              >
                Explore Pakistan
              </Link>
            </li>
          </ul>
          <Link
            to="/contact"
            className="hidden md:block bg-blue-400 text-white px-4 py-2 rounded-lg uppercase hover:bg-blue-900 transition"
          >
            Contact
          </Link>
        </div>
      </nav>

      {/* Mobile Menu */}
      {navbarState && (
        <div className="absolute z-[1000] top-16 left-0 w-full bg-white shadow-md md:hidden">
          <ul className="flex flex-col items-start p-4">
            <li className="w-full py-2">
              <Link
                to="/"
                className={isActive(location.pathname === "/")}
                onClick={() => setNavbarState(false)}
              >
                Home
              </Link>
            </li>
            <li className="w-full py-2">
              <Link
                to="/about"
                className={isActive(location.pathname === "/")}
                onClick={() => setNavbarState(false)}
              >
                About
              </Link>
            </li>
            <li className="w-full py-2">
              <Link
                to="/custom-tour"
                className={isActive(isCustomTourPage)}
                onClick={() => setNavbarState(false)}
              >
                Custom Tour
              </Link>
            </li>
            <li className="w-full py-2">
              <Link
                to="/hotels"
                className={isActive(isHotelsPage)}
                onClick={() => setHotelMenuOpen(!hotelMenuOpen)}
              >
                Hotels
              </Link>
              {hotelMenuOpen && (
                <ul className="ml-4 mt-1">
                  <li>
                    <Link
                      to="/hotels/skardu"
                      className={isActive(location.pathname === "/hotels/skardu")}
                      onClick={() => setNavbarState(false)}
                    >
                      Skardu
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/hotels/hunza"
                      className={isActive(location.pathname === "/hotels/hunza")}
                      onClick={() => setNavbarState(false)}
                    >
                      Hunza
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/hotels/naran"
                      className={isActive(location.pathname === "/hotels/naran")}
                      onClick={() => setNavbarState(false)}
                    >
                      Naran
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/hotels/swat"
                      className={isActive(location.pathname === "/hotels/swat")}
                      onClick={() => setNavbarState(false)}
                    >
                      Swat
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/hotels/gilgit"
                      className={isActive(location.pathname === "/hotels/gilgit")}
                      onClick={() => setNavbarState(false)}
                    >
                      Gilgit
                    </Link>
                  </li>
                </ul>
              )}
            </li>
            <li className="w-full py-2">
              <Link
                to="/explore-pakistan"
                className={isActive(location.pathname === "/explore-pakistan")}
                onClick={() => setNavbarState(false)}
              >
                Explore Pakistan
              </Link>
            </li>
          </ul>
        </div>
      )}
    </>
  );
}
