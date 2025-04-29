import Grouptour from "../components/Grouptour";
import Hero from "../components/Hero";
import HoneyMoon from "../components/HoneyMoon";
import HoneyMoon2 from "../components/HoneyMoon2";
import Recommend from "../components/Recommend";
import Services from "../components/Services";
// import Customtour from "../components/Customtour"
import Testimonials from "../components/Testimonials";
import Destinition from "./destinition";
import Booknow from "../pages/book-form/Book-now"
const home = () => {
  return (
    <>

      <Hero />
      <Services />
      <Destinition />
      {/* <Recommend /> */}
      <HoneyMoon />
      <HoneyMoon2 />
      <Grouptour />
      {/* <Customtour /> */}
      <Testimonials/>
      <Booknow />
    </>
  );
};

export default home;
