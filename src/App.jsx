import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import Form from "./components/form";
import Home from "./layout/home";
import About from "./layout/about";
import Contact from "./layout/contact";
import Hotels from "./layout/Hotels";
import CustomTour from "./components/Customtour";

export default function App() {


  return (
    <main className="w-full overflow-hidden">
       
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
      
        <Route path="/custom-tour" element={<CustomTour />} />

        <Route path="/form" element={<Form />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/hotels" element={<Hotels/>} />
      </Routes>
      <Footer />
  
    </main>
  );
}
