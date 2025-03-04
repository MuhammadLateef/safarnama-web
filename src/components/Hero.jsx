import homeImage from "../assets/hero.png";

export default function Hero() {
  return (
    <div id="hero" className="relative mt-8 w-full h-full">
      <div className="h-full">
        <img src={homeImage} alt="Hero" className="w-full brightness-60" />
      </div>
      <div className="absolute top-0 w-full h-full flex flex-col justify-center items-center text-center gap-4 z-10">
        <div className="text-white">
          <h1 className="text-3xl md:text-4xl tracking-wide">TRAVEL TO EXPLORE</h1>
          <p className="mt-2 text-lg md:text-xl px-10 md:px-48">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere natus, enim ipsam magnam odit deserunt itaque? Minima earum velit tenetur!
          </p>
        </div>
        <div className="bg-white bg-opacity-80 p-4 rounded-md flex flex-col md:flex-row gap-4 items-center">
          <div className="flex flex-col items-center md:items-start">
            <label className="text-blue-900 text-lg">Where you want to go</label>
            <input
              type="text"
              placeholder="Search Your location"
              className="text-center border-none bg-transparent placeholder-black focus:outline-none"
            />
          </div>
          <div className="flex flex-col items-center md:items-start">
            <label className="text-blue-900 text-lg">Check-in</label>
            <input
              type="date"
              className="text-center border-none bg-transparent focus:outline-none"
            />
          </div>
          <div className="flex flex-col items-center md:items-start">
            <label className="text-blue-900 text-lg">Check-out</label>
            <input
              type="date"
              className="text-center border-none bg-transparent focus:outline-none"
            />
          </div>
          <button className="bg-blue-600 text-white py-2 px-4 rounded-md uppercase text-lg transition duration-300 hover:bg-blue-900">
            Explore Now
          </button>
        </div>
      </div>
    </div>
  );
}