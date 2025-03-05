// import homeImage from "../assets/chota-deosai.webp";

// export default function Hero() {
//   return (
//     <div id="hero" className="relative mt-8 w-full h-full">
//       <div className="h-full">
//         <img src={homeImage} alt="Hero" className="w-full h-[460px] rounded-md  brightness-60  object-cover" />
//       </div>
      
//       <div className="absolute top-0 w-full h-full flex flex-col justify-center items-center text-center gap-4 z-10">
//         <div className="text-white">
//           <h1 className="text-3xl md:text-4xl  text-blue-600 font-bold tracking-wide">TRAVEL TO EXPLORE</h1>
//           <p className="mt-2 text-lg md:text-xl px-10 md:px-48">
//           From mesmerizing natural wonders to vibrant cityscapes, we curate exceptional travel experiences that cater to every explorer. Discover new destinations, immerse yourself in diverse cultures, and create unforgettable memories with us. </p>       </div>
//         <div className="bg-white bg-opacity-80 p-4 rounded-md flex flex-col md:flex-row gap-4 items-center">
//           <div className="flex flex-col items-center md:items-start">
//             <label className="text-blue-900 text-lg">Where you want to go</label>
//             <input
//               type="text"
//               placeholder="Search Your location"
//               className="text-center border-none bg-transparent placeholder-black focus:outline-none"
//             />
//           </div>
//           <div className="flex flex-col items-center md:items-start">
//             <label className="text-blue-900 text-lg">Check-in</label>
//             <input
//               type="date"
//               className="text-center border-none bg-transparent focus:outline-none"
//             />
//           </div>
//           <div className="flex flex-col items-center md:items-start">
//             <label className="text-blue-900 text-lg">Check-out</label>
//             <input
//               type="date"
//               className="text-center border-none bg-transparent focus:outline-none"
//             />
//           </div>
//           <button className="bg-blue-600 text-white py-2 px-4 rounded-md uppercase text-lg transition duration-300 hover:bg-blue-900">
//             Explore Now
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }
import homeImage from "../assets/chota-deosai.webp";

export default function Hero() {
  return (
    <div id="hero" className="relative mt-8 w-full h-full">
      <div className="h-full">
        <img
          src={homeImage}
          alt="Hero"
          className="w-full h-[460px] md:h-[600px] lg:h-[700px] rounded-md brightness-60 object-cover"
        />
      </div>

      <div className="absolute top-0 w-full h-full flex flex-col justify-center items-center text-center gap-4 z-10 px-4 md:px-10">
        <div className="text-white">
          <h1 className="text-3xl md:text-4xl lg:text-5xl text-blue-600 font-bold tracking-wide">
            TRAVEL TO EXPLORE
          </h1>
          <p className="mt-2 text-lg md:text-xl lg:text-2xl px-4 md:px-20 lg:px-48">
            From mesmerizing natural wonders to vibrant cityscapes, we curate exceptional travel experiences that cater to every explorer. Discover new destinations, immerse yourself in diverse cultures, and create unforgettable memories with us.
          </p>
        </div>
        <div className="bg-white bg-opacity-80 p-4 rounded-md flex flex-col md:flex-row gap-4 items-center w-full max-w-4xl">
          <div className="flex flex-col w-full md:w-1/4 items-center md:items-start">
            <label className="text-blue-900 text-lg">Where you want to go</label>
            <input
              type="text"
              placeholder="Search Your location"
              className="text-center border-none bg-transparent placeholder-black focus:outline-none w-full"
            />
          </div>
          <div className="flex flex-col w-full md:w-1/4 items-center md:items-start">
            <label className="text-blue-900 text-lg">Check-in</label>
            <input
              type="date"
              className="text-center border-none bg-transparent focus:outline-none w-full"
            />
          </div>
          <div className="flex flex-col w-full md:w-1/4 items-center md:items-start">
            <label className="text-blue-900 text-lg">Check-out</label>
            <input
              type="date"
              className="text-center border-none bg-transparent focus:outline-none w-full"
            />
          </div>
          <button className="bg-blue-600 text-white py-2 px-4 rounded-md uppercase text-lg transition duration-300 hover:bg-blue-900 w-full md:w-auto">
            Explore Now
          </button>
        </div>
      </div>
    </div>
  );
}
