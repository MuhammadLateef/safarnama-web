// import { useState } from "react";
// import { GiHamburgerMenu } from "react-icons/gi";
// import { VscChromeClose } from "react-icons/vsc";
// import { Link } from "react-router-dom";
// import logo from "../assets/logo.png";

// export default function Navbar() {
//   const [navbarState, setNavbarState] = useState(false);

//   return (
//     <>
//       <nav className="bg-white shadow-md">
//         <div className="max-w-[90%] relative mx-auto flex justify-between items-center py-4">
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
//             <li>
//               <Link to="/" className="text-blue-900 font-bold">Home</Link>
//             </li>
//             <li>
//               <Link to="/search-tour" className="text-blue-600 hover:text-blue-900 transition">Search Tour</Link>
//             </li>
//             <li>
//               <Link to="/custom-tour" className="text-blue-600 hover:text-blue-900 transition">Custom Tour</Link>
//             </li>
//             <li>
//               <Link to="/hotels" className="text-blue-600 hover:text-blue-900 transition">Hotels</Link>
//             </li>
//             <li>
//               <Link to="/explore-pakistan" className="text-blue-600 hover:text-blue-900 transition">Explore Pakistan</Link>
//             </li>
//           </ul>
//           <Link to="/contact" className="hidden md:block bg-blue-400 text-white px-4 py-2 rounded-lg uppercase hover:bg-blue-900 transition">
//             Contact
//           </Link>
//         </div>
//       </nav>
//       {navbarState && (
//         <div className="absolute z-[44444] top-16 left-0 w-full bg-white shadow-md md:hidden">
//           <ul className="flex flex-col items-start p-4">
//             <li className="w-full py-2">
//               <Link to="/" className="text-blue-900 font-bold" onClick={() => setNavbarState(false)}>Home</Link>
//             </li>
//             <li className="w-full py-2">
//               <Link to="/about" className="text-blue-600 hover:text-blue-900 transition" onClick={() => setNavbarState(false)}>Search Tour</Link>
//             </li>
//             <li className="w-full py-2">
//               <Link to="/places" className="text-blue-600 hover:text-blue-900 transition" onClick={() => setNavbarState(false)}>Custom Tour</Link>
//             </li>
//             <li className="w-full py-2">
//               <Link to="/testimonials" className="text-blue-600 hover:text-blue-900 transition" onClick={() => setNavbarState(false)}>Hotels</Link>
//             </li>
//             <li className="w-full py-2">
//               <Link to="/testimonials" className="text-blue-600 hover:text-blue-900 transition" onClick={() => setNavbarState(false)}>Explore Pakistan</Link>
//             </li>
//           </ul>

//         </div>
//       )}
//     </>
//   );
// }
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { VscChromeClose } from "react-icons/vsc";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

export default function Navbar() {
  const [navbarState, setNavbarState] = useState(false);
  const [hotelMenuOpen, setHotelMenuOpen] = useState(false);

  return (
    <>
      <nav className="bg-white shadow-md z-[50] relative">
        <div className="max-w-[90%] mx-auto flex justify-between items-center py-4 relative">
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
            {/* Hotels Dropdown */}
            <li
              className="relative z-[100]"
              onMouseEnter={() => setHotelMenuOpen(true)}
              onMouseLeave={() => setHotelMenuOpen(false)}
            >
              {/* <button className="text-blue-600 hover:text-blue-900 transition">Hotels</button> */}
              <Link to="/hotels" className="text-blue-600 hover:text-blue-900 transition">Hotels</Link>
              {hotelMenuOpen && (
                <ul className="absolute left-0  w-40 bg-white shadow-lg rounded-md py-2 z-[200]">
                  <li>
                    <Link to="/hotels/skardu" className="block px-4 py-2 hover:bg-gray-100 text-blue-600">Skardu</Link>
                  </li>
                  <li>
                    <Link to="/hotels/hunza" className="block px-4 py-2 hover:bg-gray-100 text-blue-600">Hunza</Link>
                  </li>
                  <li>
                    <Link to="/hotels/naran" className="block px-4 py-2 hover:bg-gray-100 text-blue-600">Naran</Link>
                  </li>
                  <li>
                    <Link to="/hotels/swat" className="block px-4 py-2 hover:bg-gray-100 text-blue-600">Swat</Link>
                  </li>
                  <li>
                    <Link to="/hotels/gilgit" className="block px-4 py-2 hover:bg-gray-100 text-blue-600">Gilgit</Link>
                  </li>
                </ul>
              )}
            </li>
            <li>
              <Link to="/explore-pakistan" className="text-blue-600 hover:text-blue-900 transition">Explore Pakistan</Link>
            </li>
          </ul>
          <Link to="/contact" className="hidden md:block bg-blue-400 text-white px-4 py-2 rounded-lg uppercase hover:bg-blue-900 transition">
            Contact
          </Link>
        </div>
      </nav>

      {/* Mobile Menu */}
      {navbarState && (
        <div className="absolute z-[1000] top-16 left-0 w-full bg-white shadow-md md:hidden">
          <ul className="flex flex-col items-start p-4">
            <li className="w-full py-2">
              <Link to="/" className="text-blue-900 font-bold" onClick={() => setNavbarState(false)}>Home</Link>
            </li>
            <li className="w-full py-2">
              <Link to="/search-tour" className="text-blue-600 hover:text-blue-900 transition" onClick={() => setNavbarState(false)}>Search Tour</Link>
            </li>
            <li className="w-full py-2">
              <Link to="/custom-tour" className="text-blue-600 hover:text-blue-900 transition" onClick={() => setNavbarState(false)}>Custom Tour</Link>
            </li>
            {/* Mobile Hotels Dropdown */}
            <li className="w-full py-2">
            <Link
    to="/hotels"
    className="text-blue-600 hover:text-blue-900 transition w-full block text-left"
    onClick={() => setHotelMenuOpen(!hotelMenuOpen)}
  >
    Hotels
  </Link>
              {hotelMenuOpen && (
                <ul className="ml-4 mt-1">
                  <li>
                    <Link to="/hotels/skardu" className="block py-1 text-blue-600" onClick={() => setNavbarState(false)}>Sakrdu</Link>
                  </li>
                  <li>
                    <Link to="/hotels/hunza" className="block py-1 text-blue-600" onClick={() => setNavbarState(false)}>Hunza</Link>
                  </li>
                  <li>
                    <Link to="/hotels/swat" className="block py-1 text-blue-600" onClick={() => setNavbarState(false)}>Swat</Link>
                  </li>
                  <li>
                    <Link to="/hotels/gilgit" className="block py-1 text-blue-600" onClick={() => setNavbarState(false)}>Gilgit</Link>
                  </li>
                  <li>
                    <Link to="/hotels/naran" className="block py-1 text-blue-600" onClick={() => setNavbarState(false)}>Naran</Link>
                  </li>
                </ul>
              )}
            </li>
            <li className="w-full py-2">
              <Link to="/explore-pakistan" className="text-blue-600 hover:text-blue-900 transition" onClick={() => setNavbarState(false)}>Explore Pakistan</Link>
            </li>
          </ul>
        </div>
      )}
    </>
  );
}


