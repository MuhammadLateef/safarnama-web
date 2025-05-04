import { BsLinkedin, BsFacebook } from "react-icons/bs";
import { AiFillInstagram } from "react-icons/ai";
import logo from "../assets/logo.png";
import { FaInstagram, FaSquareFacebook } from "react-icons/fa6";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa6";
import { Link } from "react-router-dom";
export default function Footer() {
  return (
    <div className="bg-purple-100">

      <footer className="mx-auto max-w-[90%] py-12">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <div className="mb-4 lg:-mt-2">
                <a href="/" className="inline-flex items-center gap-2 text-xl font-bold text-white-100 md:text-2xl" aria-label="logo">
                  <img className="w-[150px] h-100" src={logo} alt="" />
                </a>
              </div>
              <p className=" mb-4">
                Your journey to the heart of Northern Pakistan begins with us. Experience the magic of Gilgit-Baltistan
                with expert guides.
              </p>


              <div className="flex gap-4">
                <a href="https://www.facebook.com/share/1P7vdqR83F/?mibextid=wwXIfr" target="_blank" className="text-2xl text-black-400 transition duration-100 hover:text-black-500 active:text-white-600">
                  <FaSquareFacebook />
                </a>

                <a href="https://www.instagram.com/emran_safarnama?igsh=dDl4NXkzejlleTNv" target="_blank" className="text-2xl text-black-400 transition duration-100 hite-600">
                  <FaSquareInstagram />
                </a>

                <a href="#" target="_blank" className="text-2xl text-black-400 transition duration-100 hover:text-black-500 active:text-black-600">
                  <FaSquareXTwitter />
                </a>

                <a href="https://youtube.com/@emransafarnama?si=nscrIuG0tQDKjkmb" target="_blank" className="text-2xl text-black-400 transition duration-100 hover:text-black-500 active:text-white-600">
                  <FaYoutube />
                </a>
              </div>


            </div>

            <div>
              <h3 className="font-bold text-lg mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <Link to="/" className=" ">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/photography" className=" ">
                    Photography
                  </Link>
                </li>
                <li>
                  <Link to="#" className=" ">
                    Seasons
                  </Link>
                </li>
                <li>
                  <Link to="#" className=" ">
                    Stories
                  </Link>
                </li>
                <li>
                  <Link to="/tourism" className=" ">
                    Book Now
                  </Link>
                </li>
                <li>
                  <Link to="#" className=" ">
                    Travel Blog
                  </Link>
                </li>
                <li>
                  <Link to="/about" className=" ">
                    About Us
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-lg mb-4">Popular Tours</h3>
              <ul className="space-y-2">
                <li>
                  <Link to="/explore-pakistan" className=" ">
                    Hunza Valley Explorer
                  </Link>
                </li>
                <li>
                  <Link to="/explore-pakistan" className=" ">
                    Skardu & Deosai Adventure
                  </Link>
                </li>
                <li>
                  <Link to="/explore-pakistan" className=" ">
                    Fairy Meadows Trek
                  </Link>
                </li>
                <li>
                  <Link to="/explore-pakistan" className=" ">
                    K2 Base Camp Expedition
                  </Link>
                </li>
                <li>
                  <Link to="/explore-pakistan" className=" ">
                    Khaplu Valley Cultural Tour
                  </Link>
                </li>
                <li>
                  <Link to="/explore-pakistan" className=" ">
                    Northern Pakistan Grand Tour
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-lg mb-4">Contact Us</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5 text-emerald-400 mt-0.5"
                  >
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                  </svg>
                  <span className="">+92 3554713444</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5 text-emerald-400 mt-0.5"
                  >
                    <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                  </svg>
                  <span className="">info@safarnama.com</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5 text-emerald-400 mt-0.5"
                  >
                    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg>
                  <span className="">SAFARNAMA TOURS SMC PVT LTD, safarnama tours, airport road skardu, airport Rd, Skardu, Gilgit Baltistan
                    </span>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-slate-800 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center">
            <p className="text-slate-700 text-sm">© {new Date().getFullYear()} Safarnama. All rights reserved.</p>
            <div className="flex gap-4 mt-4 md:mt-0">
              <Link href="#" className="text-slate-700 n-colors">
                Privacy Policy
              </Link>
              <Link href="#" className="text-slate-700 n-colors">
                Terms of Service
              </Link>
              <Link href="#" className="text-slate-700 n-colors">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}