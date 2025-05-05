import { Route, Routes } from "react-router-dom";

import About from "./layout/about";
import Explore from "./layout/ExplorePakistan";
import ExploreDetailPage from "./layout/ExploreDetailPage";
import HotelsPage from "./layout/Hotels";
import HotelDetailPage from "./layout/HotelDetailPage";
import CustomTour from "./layout/Customtour";
import Home from "./layout/home";
import Form from "./components/form";
import Photography from "./layout/Photography";
import Transportation from "./layout/Transport";
import ContactForm from "./layout/Contactform";
import Skardu_details from "./pages/Skardu/Skardu_details"
import TourDetailPage from "./pages/Skardu/TourDetailPage";
import WeddingPage from "./pages/Wedding-shoots/WeddingPage";
import DronePage from "./pages/Drone-shoots/DronePage";
import DestinationDetail from "./layout/destination-details-page";
import ScrollHandler from "./components/ScrollHandler";
import RidePage from "./pages/ride-page/ride-page";
import BookingPopup from "./components/BookingPopup";

const AppRoutes = () => {
  return (
    <>
      <ScrollHandler />
      <BookingPopup />
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
        <Route path="/ride-page" element={<RidePage />} />
        <Route path="/contact" element={<ContactForm />} />
        <Route path="/destinations/:slug" element={<DestinationDetail/>} />    
        <Route path="/tourism" element={<Skardu_details />} />
        <Route path="/tour/:id" element={<TourDetailPage />} />
        <Route path="/drone-shots" element={<DronePage />} />
        <Route path="/wedding-shots" element={<WeddingPage />} />
      </Routes>
    </>
  );
};

export default AppRoutes;