import { BrowserRouter as Router } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import AppRoutes from "./AppRoutes"; // Import AppRoutes
import BookingPopup from "./components/BookingPopup";

export default function App() {
  return (
    <Router>
      <main className="w-full overflow-hidden" style={{ fontFamily: 'Dosis, sans-serif' }}>
        <ScrollToTop />
        <Navbar />
        <AppRoutes /> {/* Using AppRoutes here */}
        {/* <BookingPopup /> */}
        <Footer />
      </main>
    </Router>
  );
}
