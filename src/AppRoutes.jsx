import { Route, Routes } from "react-router-dom";
// import About from "./layout/About";
// import Contact from "./layout/Contact";
import HotelsPage from "./layout/Hotels";
import HotelDetailPage from "./layout/HotelDetailPage";
import CustomTour from "./components/Customtour";
import Home from "./layout/home";
import Form from "./components/form";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      {/* <Route path="/about" element={<About />} /> */}
      {/* <Route path="/contact" element={<Contact />} /> */}
      <Route path="/custom-tour" element={<CustomTour />} />
      <Route path="/form" element={<Form />} />
      <Route path="/hotels" element={<HotelsPage />} />
      <Route path="/hotels/:name" element={<HotelDetailPage />} />
    </Routes>
  );
};

export default AppRoutes;
