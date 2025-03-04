
import { Route, Routes } from "react-router-dom";
import Home from "./layout/Home";
import About from "./layout/About";
import Contact from "./layout/Contact";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
};

export default AppRoutes;

