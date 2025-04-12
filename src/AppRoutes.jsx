import { Route, Routes } from "react-router-dom";
import About from "./layout/about";
import Explore from "./layout/ExplorePakistan";
import HotelsPage from "./layout/Hotels";
import HotelDetailPage from "./layout/HotelDetailPage";
import CustomTour from "./components/Customtour";
import Home from "./layout/home";
import Form from "./components/form";
import Photography from "./layout/Photography";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/explore-pakistan" element={<Explore/>} />
      <Route path="/custom-tour" element={<CustomTour />} />
      <Route path="/form" element={<Form />} />
      <Route path="/hotels" element={<HotelsPage />} />
      <Route path="/hotels/:name" element={<HotelDetailPage />} />
      <Route path="/photography" element={<Photography/>} />
    </Routes>
  );
};

export default AppRoutes;
