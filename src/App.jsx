import { BrowserRouter as Router } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import AppRoutes from "./AppRoutes"; // Import AppRoutes

export default function App() {
  return (
    <Router>
      <main className="w-full overflow-hidden">
        <ScrollToTop />
        <Navbar />
        <AppRoutes /> {/* Using AppRoutes here */}
        <Footer />
      </main>
    </Router>
  );
}
