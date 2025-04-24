import { useState } from "react"
import { FaArrowRight } from "react-icons/fa6";
import { Link } from "react-router-dom"

export function DestinationCard({ title, description, image, link }) {
  const [isHovered, setIsHovered] = useState(false)
console.log("LINK: ", link )
  return (
    <Link
      to={`${link}`}
      className="group block relative overflow-hidden rounded-xl"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative h-[300px] overflow-hidden">
        <img
          src={image || "/placeholder.svg"}
          alt={title}
         
          className={`w-full h-full object-cover transition-transform duration-700 ${isHovered ? "scale-110" : "scale-100"}`}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
      </div>

      <div className="absolute bottom-0 left-0 right-0 p-6">
        <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
        <p className="text-white/80 mb-4 line-clamp-2">{description}</p>
        <div
          className={`flex items-center text-emerald-400 transition-transform duration-300 ${isHovered ? "translate-x-2" : "translate-x-0"}`}
        >
          <span className="text-sm font-medium mr-2">Explore</span>
          <FaArrowRight className="h-4 w-4" />
        </div>
      </div>
    </Link>
  )
}
