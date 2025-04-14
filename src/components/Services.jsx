// import service1 from "../assets/service1.png";
// import service2 from "../assets/service2.png";
// import service3 from "../assets/service3.png";
// import service4 from "../assets/service4.png";

// export default function Services() {
//   const data = [
//     {
//       icon: service1,
//       title: "Get Best Prices",
//       subTitle:
//         "Pay through our application and save thousands and get amazing rewards.",
//     },
//     {
//       icon: service2,
//       title: "Covid Safe",
//       subTitle:
//         "We have all the curated hotels that have all the precaution for a covid safe environment.",
//     },
//     {
//       icon: service3,
//       title: "Flexible Payment",
//       subTitle:
//         " Enjoy the flexible payment through our app and get rewards on every payment.",
//     },
//     {
//       icon: service4,
//       title: "Find The Best Near You",
//       subTitle:
//         "Find the best hotels and places to visit near you in a single click.",
//     },
//   ];

//   return (
//     <section id="services" className="py-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
//       {data.map((service, index) => (
//         <div
//           key={index}
//           className="flex flex-col gap-4 p-8 bg-blue-50 shadow-lg transition-transform duration-300 hover:translate-x-2 hover:-translate-y-4 hover:shadow-xl"
//         >
//           <div className="icon">
//             <img src={service.icon} alt="" className="h-10" />
//           </div>
//           <h3 className="text-xl font-bold">{service.title}</h3>
//           <p className="text-gray-600">{service.subTitle}</p>
//         </div>
//       ))}
//     </section>
//   );
// }
//  import service1 from "../assets/service1.png";
// import service2 from "../assets/service2.png";
// import service3 from "../assets/service3.png";

// export default function Services() {
//   const data = [
//     {
//       icon: service1,
//       title: "Get Best Prices",
//       subTitle:
//         "Pay through our application and save thousands and get amazing rewards.",
//     },
//     {
//       icon: service3,
//       title: "Flexible Payment",
//       subTitle:
//         " Enjoy the flexible payment through our app and get rewards on every payment.",
//     },
//     {
//       icon: service2,
//       title: "Find The Best Near You",
//       subTitle:
//         "Find the best hotels and places to visit near you in a single click.",
//     },
//   ];

//   return (
//     <section id="services" className="py-20 grid grid-cols-1 md:grid-cols-3 gap-4 justify-center">
//       {data.map((service, index) => (
//         <div
//           key={index}
//           className="flex flex-col gap-4 p-8 bg-blue-50 shadow-lg transition-transform duration-300 hover:translate-x-2 hover:-translate-y-4 hover:shadow-xl"
//         >
//           <div className="icon">
//             <img src={service.icon} alt="" className="h-10" />
//           </div>
//           <h3 className="text-xl font-bold">{service.title}</h3>
//           <p className="text-gray-600">{service.subTitle}</p>
//         </div>
//       ))}
//     </section>
//   );
// }
import service1 from "../assets/Choosetrip.png";
import service2 from "../assets/Enjoy2.png";
import service3 from "../assets/Ticket.png";

export default function Services() {
  const data = [
    {
      icon: service1,
      title: "Transport",
      subTitle:
      "Travel comfortably and safely with our reliable transport services. Whether it's a solo trip or group travel, we've got the perfect ride for every journey.",
    },
    {
      icon: service3,
      title: "Hotel",
      subTitle:
      "Relax and unwind in top-rated hotels handpicked for your comfort. From cozy rooms to luxury stays, we ensure you feel at home wherever you go.",
    },
    {
      icon: service2,
      title: "Photography",
      subTitle:
      "Capture every special moment with our professional photography service. Let us turn your adventures into timeless memories with stunning visuals.",
    },
  ];

  return (
    <section id="services" className="py-20 ">
      <h2 className="text-3xl font-bold mb-10 text-center font-bold">How to Plan Your Trip ?</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 max-w-[90%] mx-auto gap-4 justify-center">
        {data.map((service, index) => (
          <div
            key={index}
            className="flex flex-col gap-4 p-8 bg-blue-50 shadow-lg transition-transform duration-300 hover:translate-x-2 hover:-translate-y-4 hover:shadow-xl"
          >
            <div className="icon">
              <img src={service.icon} alt="" className="h-20 " />
            </div>
            <h3 className="text-xl font-bold ">{service.title}</h3>
            <p className="text-gray-600">{service.subTitle}</p>
          </div>
        ))}
      </div>
    </section>
  );
}


