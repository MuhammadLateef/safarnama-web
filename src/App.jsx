import ScrollToTop from "./components/ScrollToTop";
import Navbar from "./components/navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Recommend from "./components/Recommend";
import Testimonials from "./components/Testimonials";
import Footer from "./components/footer";
// import scrollreveal from "scrollreveal";
import { useEffect } from "react";
import HoneyMoon from "./components/HoneyMoon";
import HoneyMoon2 from "./components/HoneyMoon2";

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
      <HoneyMoon/>
      <HoneyMoon2/>
      <Testimonials />
      <Footer />
    </main>
  );
}
