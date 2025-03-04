import ScrollToTop from "./components/ScrollToTop";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Recommend from "./components/Recommend";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";
// import scrollreveal from "scrollreveal";
import { useEffect } from "react";

export default function App() {
  // useEffect(() => {
  //   const sr = scrollreveal({
  //     origin: "top",
  //     distance: "80px",
  //     duration: 2000,
  //     reset: true,
  //   });
  //   sr.reveal(
  //     `nav, #hero, #services, #recommend, #testimonials, footer`,
  //     {
  //       opacity: 0.8,
  //       interval: 300,
  //     }
  //   );
  // }, []);

  return (
    <main className="w-full overflow-hidden">
      <ScrollToTop />
      <Navbar />
      <Hero />
      <Services />
      <Recommend />
      <Testimonials />
      <Footer />
    </main>
  );
}
