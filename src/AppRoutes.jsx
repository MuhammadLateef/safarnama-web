import { Route, Routes } from "react-router-dom";
import About from "./layout/about";
import Explore from "./layout/ExplorePakistan";
import ExploreDetailPage from "./layout/ExploreDetailPage";
import HotelsPage from "./layout/Hotels";
import HotelDetailPage from "./layout/HotelDetailPage";
import CustomTour from "./components/Customtour";
import Home from "./layout/home";
import Form from "./components/form";
import Photography from "./layout/Photography";
import Transportation from "./layout/Transport";
import ContactForm from "./layout/ContactForm";
const AppRoutes = () => {

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/explore-pakistan" element={<Explore/>} />
      <Route path="/destination/:name" element={<ExploreDetailPage />} />
      <Route path="/custom-tour" element={<CustomTour />} />
      <Route path="/form" element={<Form />} />
      <Route path="/hotels" element={<HotelsPage />} />
      <Route path="/hotels/:name" element={<HotelDetailPage />} />
      <Route path="/photography" element={<Photography/>} />
      <Route path="/transportation" element={<Transportation/>} />
      <Route path="/contact" element={<ContactForm />} />
    </Routes>
  );
};

export default AppRoutes;
