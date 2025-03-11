import { Route, Routes } from "react-router-dom";
// g
import About from "./layout/About";
import Contact from "./layout/Contact";
import HotelsPage from "./layout/Hotels";
import HotelDetailPage from "./layout/HotelDetailPage";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import CustomTour from "./components/Customtour";
const AppRoutes = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/custom-tour" element={<CustomTour />} />
        <Route path="/hotels" element={<HotelsPage />} />
        <Route path="/hotels/:name" element={<HotelDetailPage />} />
      </Routes>
      <Footer />
    </>
  );
};

export default AppRoutes;
