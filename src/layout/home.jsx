import Grouptour from "../components/Grouptour";
import Hero from "../components/Hero";
import HoneyMoon from "../components/HoneyMoon";
import HoneyMoon2 from "../components/HoneyMoon2";
import Recommend from "../components/Recommend";
import Services from "../components/Services";
import Customtour from "../components/Customtour"
import Testimonials from "../components/Testimonials";
const home = () => {
  return (
    <>

      <Hero />
      <Services />
      <Recommend />
      <HoneyMoon />
      <HoneyMoon2 />
      <Grouptour />
      <Customtour />
      <Testimonials/>
    </>
  );
};

export default home;
