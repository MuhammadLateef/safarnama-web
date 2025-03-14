// import heroImage from "../assets/Gilgit.jpg"; // Add your hero image
// import skardu from "../assets/chota-deosai.webp";




// export default function ExplorePakistan() {
//   return (
//     <div className="w-full pt-8 max-w-[90%] mx-auto">
//      <section class="mx-auto max-w-screen-2xl px-4 md:px-8">
//     <div class="mb-8 flex flex-wrap justify-between md:mb-16">
//       <div class="mb-6 flex w-full flex-col justify-center sm:mb-12 lg:mb-0 lg:w-1/3 lg:pb-24 lg:pt-48">
//         <h1 class="mb-4 text-4xl font-bold text-black sm:text-5xl md:mb-8 md:text-6xl">Find your<br />Destination</h1>

//         <p class="max-w-md leading-relaxed text-gray-500 xl:text-lg ">This is a section of some simple filler text, also known as placeholder text. It shares characteristics of real text.</p>
//       </div>

//       <div class="mb-12 flex w-full md:mb-16 lg:w-2/3">
//         <div class="relative left-12 top-12 z-10 -ml-12 overflow-hidden rounded-lg bg-gray-100 shadow-lg md:left-16 md:top-16 lg:ml-0">
//           <img src={skardu} loading="lazy" alt="Photo by Kaung Htet" class="h-full w-full object-cover object-center" />
//         </div>

//         <div class="overflow-hidden rounded-lg bg-gray-100 shadow-lg">
//           <img src={heroImage} loading="lazy" alt="Photo by Manny Moreno" class="h-full w-full object-cover object-center" />
//         </div>
//       </div>
//     </div>

  
//   </section>
//   <h2 class="mb-8 text-center text-2xl font-bold text-gray-800 md:mb-12 lg:text-3xl">Destination</h2>

// <div class="grid gap-4 sm:grid-cols-2 md:gap-6 lg:grid-cols-3 xl:grid-cols-4">
 
//   <div>
//     <a href="#" class="group relative flex h-96 items-end overflow-hidden rounded-lg bg-gray-100 p-4 shadow-lg">
//       <img src={heroImage} loading="lazy" alt="Photo by Austin Wade" class="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />

//       <div class="relative flex w-full flex-col rounded-lg bg-white p-4 text-center">
       
//         <span class="text-lg font-bold text-gray-800 lg:text-xl">Gilgit</span>
//       </div>
//     </a>
//   </div>
  
//   <div>
//     <a href="#" class="group relative flex h-96 items-end overflow-hidden rounded-lg bg-gray-100 p-4 shadow-lg">
//       <img src={skardu} loading="lazy" alt="Photo by engin akyurt" class="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />

//       <div class="relative flex w-full flex-col rounded-lg bg-white p-4 text-center">
        
//         <span class="text-lg font-bold text-gray-800 lg:text-xl">Skardu</span>
//       </div>
//     </a>
//   </div>
  
//   <div>
//     <a href="#" class="group relative flex h-96 items-end overflow-hidden rounded-lg bg-gray-100 p-4 shadow-lg">
//       <img src={heroImage} loading="lazy" alt="Photo by Austin Wade" class="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />

//       <div class="relative flex w-full flex-col rounded-lg bg-white p-4 text-center">
        
//         <span class="text-lg font-bold text-gray-800 lg:text-xl">Gilgit</span>
//       </div>
//     </a>
//   </div>
  
//   <div>
//     <a href="#" class="group relative flex h-96 items-end overflow-hidden rounded-lg bg-gray-100 p-4 shadow-lg">
//       <img src={skardu} loading="lazy" alt="Photo by Austin Wade" class="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />

//       <div class="relative flex w-full flex-col rounded-lg bg-white p-4 text-center">
      
//         <span class="text-lg font-bold text-gray-800 lg:text-xl">Skardu</span>
//       </div>
//     </a>
//   </div>
  
// </div>
// </div>



    
//   );
// }
import heroImage from "../assets/Gilgit.jpg"; // Add your hero image
import skardu from "../assets/chota-deosai.webp";
const destinations = [
  { image: heroImage, title: "Gilgit" },
  { image: skardu, title: "Skardu" },
  { image: heroImage, title: "Gilgit" },
  { image: skardu, title: "Skardu" },
  { image: skardu, title: "Skardu" },
  { image: skardu, title: "Skardu" },
  { image: skardu, title: "Skardu" },
  { image: skardu, title: "Skardu" }

];

export default function ExplorePakistan() {
  return (
    <div className="w-full  max-w-[90%] mx-auto">
      {/* Hero Section */}
      <div id="hero" className="relative z-0 mt-8 w-full h-full max-w-[90%] mx-auto">
        {/* Background Image with Overlay */}
        <div className="relative w-full h-[60vh] sm:h-[60vh] mt-8 bg-black rounded-lg overflow-hidden">
          <img
            src={heroImage}
            alt="Hero"
            className="w-full h-full object-cover opacity-70"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 rounded-md"></div>
        </div>
        <div className="absolute top-0 w-full h-full flex flex-col justify-center items-center text-center gap-4 z-10 px-4 md:px-10">
          <div className="text-white">
            <h1 className="text-3xl md:text-4xl lg:text-5xl text-white font-bold tracking-wide">
              TRAVEL TO EXPLORE
            </h1>
            
          </div>
        </div>
      </div>
      
      <section className="mx-auto max-w-[90%] max-w-screen-2xl px-4 md:px-8">
        <div className="mb-8 flex flex-wrap justify-between md:mb-16">
          <div className="mb-6 flex w-full flex-col justify-center sm:mb-12 lg:mb-0 lg:w-1/3 lg:pb-24 lg:pt-48">
            <h1 className="mb-4 text-4xl font-bold text-black sm:text-5xl md:mb-8 md:text-6xl">Find your<br />Destination</h1>
            <p className="max-w-md leading-relaxed text-gray-500 xl:text-lg">This is a section of some simple filler text, also known as placeholder text. It shares characteristics of real text.</p>
          </div>
          <div className="mb-12 mt-8 flex w-full md:mb-16 lg:w-2/3 mx-auto max-w-[90%] ">
            <div className=" mx-auto max-w-[90%] relative left-12 top-12 z-10 -ml-12 overflow-hidden rounded-lg bg-gray-100 shadow-lg md:left-16 md:top-16 lg:ml-0">
              <img src={skardu} loading="lazy" alt="Skardu" className="h-full w-full object-cover object-center" />
            </div>
            <div className="overflow-hidden rounded-lg bg-gray-100 shadow-lg mx-auto max-w-[90%]">
              <img src={heroImage} loading="lazy" alt="Gilgit" className="h-full w-full object-cover object-center" />
            </div>
          </div>
        </div>
      </section>
      <h2 className="mb-8 text-center text-2xl font-bold text-gray-800 md:mb-12 lg:text-3xl">
        Destination
      </h2>
      <div className=" mb-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mx-auto max-w-[90%]">
        {destinations.map((destination, index) => (
          <div key={index} className="group relative h-64 overflow-hidden rounded-lg shadow-lg">
            <img
              src={destination.image}
              loading="lazy"
              alt={destination.title}
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40"></div>
            
            {/* Static Title */}
            <div className="absolute bottom-4 left-0 right-0 text-center">
              <h3 className="text-lg font-bold text-white lg:text-xl">{destination.title}</h3>
            </div>

            {/* Hover Content */}
            <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              <div className="bg-black bg-opacity-60 px-4 py-2 rounded-lg">
                <p className="text-sm text-white lg:text-base">Explore the beauty of {destination.title}</p>
              </div>
            </div>
          </div>
      
        ))}
      </div>
    </div>
  );
}


