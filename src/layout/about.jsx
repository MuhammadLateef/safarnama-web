import React from "react";
import heroImage from "../assets/Gilgit.jpg";
import person from "../assets/person1.jpg.";

const About = () => {
  return (
    <div id="hero" className="relative z-0 mt-8 w-full h-full max-w-[90%] mx-auto">
      {/* Background Image with Overlay */}
      <div className="relative w-full h-[60vh] sm:h-[60vh] mt-8 bg-black rounded-lg overflow-hidden">
        <img
          src={heroImage}
          alt="Hero"
          className="w-full h-full object-cover opacity-70"
        />
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-50 rounded-md"></div>

        {/* Centered Heading */}
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4 md:px-10 z-20">
          <h1 className="text-3xl md:text-4xl lg:text-5xl text-white font-bold tracking-wide">
            About Us
          </h1>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto p-8">
        {/* WHY WE ARE THE BEST Section */}
        <section className="text-center mb-12">
          <h2 className="text-3xl font-bold">WHY WE ARE THE BEST</h2>
          <p className="text-gray-600 mt-2 max-w-2xl mx-auto">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-8">
            {[
              { title: "Amazing Travel", icon: "✈️" },
              { title: "Discover", icon: "🌊" },
              { title: "Book Your Trip", icon: "🏴" },
              { title: "Nice Support", icon: "💬" },
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl">{item.icon}</div>
                <h3 className="font-semibold mt-2">{item.title}</h3>
                <p className="text-gray-500 text-sm">
                  Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim.
                </p>
                <a
                  href="#"
                  onClick={(e) => e.preventDefault()}
                  className="text-blue-500 text-sm mt-2 inline-block"
                >
                  Read More
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* WHAT WE OFFER Section */}
        <section className="text-center mb-12">
          <h2 className="text-3xl font-bold">WHAT WE OFFER?</h2>
          <p className="text-gray-600 mt-2 max-w-2xl mx-auto">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.
          </p>
          <div className="flex flex-col md:flex-row mt-8 items-start">
            <div className="md:w-1/2">
              {[
                "Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet.",
                "Option congue nihil imperdiet doming id quod mazim placerat facer.",
                "Eodem modo typi, qui nunc nobis videntur parum clari, fiant sollemnes.",
                "Investigationes demonstraverunt lectores.",
              ].map((item, index) => (
                <div key={index} className="flex items-center space-x-2 mt-2">
                  <span className="text-green-500">✔</span>
                  <p className="text-gray-600">{item}</p>
                </div>
              ))}
            </div>
            <div className="md:w-1/2 border-l-2 border-green-500 pl-4">
              <p className="text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. 
                Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
              </p>
            </div>
          </div>
        </section>

        {/* OUR TEAM Section */}
        <section className="text-center mb-12">
          <h2 className="text-3xl font-bold">OUR TEAM</h2>
          <p className="text-gray-600 mt-2 max-w-2xl mx-auto">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-8">
            {[
              { name: "Jynda Martin", img: person },
              { name: "George Smith", img: person },
              { name: "Bill Amadeus", img: person },
              { name: "Amanda Stoun", img: person },
            ].map((member, index) => (
              <div key={index} className="text-center">
                <img src={member.img} alt={member.name} className="w-32 h-32 rounded-lg mx-auto object-cover" />
                <h3 className="font-semibold mt-2">{member.name}</h3>
                <p className="text-gray-500 text-sm">
                  Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim.
                </p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
