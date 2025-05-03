import { useState } from "react"
import { Link } from "react-router-dom"

export default function TourCard({ tour }) {
    const [isHovered, setIsHovered] = useState(false)

    return (
        <div
            className="relative h-80 rounded-sm overflow-hidden shadow-lg group"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {/* Background Image */}
            <div className="absolute inset-0 transition-transform duration-500 ease-in-out group-hover:scale-105">
                <img
                    src={tour.imageUrl || "/placeholder.svg"}
                    alt={tour.title}
                    className="w-full h-full object-cover"
                />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />

                {/* Hover Overlay with bottom-to-top animation */}
                <div
                    className={`absolute inset-0 bg-black/40 transition-all duration-150 ease-in-out transform ${isHovered ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"
                        }`}
                />
            </div>

            {/* Tour Info */}
            <div
                className={`absolute bottom-10  text-start px-4 w-full text-white z-10 transition-all duration-300 ${isHovered ? "translate-y-[-60px]" : "translate-y-0"
                    }`}
            >
                <p className=" text-xs font-medium mb-1">
                    {tour.duration} • Start From {tour.price}
                </p>
                <Link
                    to={`/tour/${tour.id}`} className="text-md font-bold hover:text-[#337ab7]">{tour.title}</Link>
            </div>

            {/* Book Now Button */}
            <div
                className={`absolute left-3 bottom-3 w-full flex z-10  transition-all duration-300 ${isHovered ? "opacity-100 translate-y-[-40px]" : "opacity-0 translate-y-0"
                    }`}
            >
                <Link
                    to={`/tour/${tour.id}`}
                    className="bg-[#337ab7] hover:bg-blue-500 text-white text-sm font-normal py-1 px-3 transition-colors"
                >
                    Book Now
                </Link>
            </div>
        </div>
    )
}
