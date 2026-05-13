import About from "../Components/About";
import Contact from "../Components/Contact";
import Experience from "../Components/Experience";
import Hero from "../Components/Hero";
import Portfolio from "../Components/Portfolio";
import Pricing from "../Components/Pricing";
import Process from "../Components/Process";
import Services from "../Components/Services";
import Skills from "../Components/Skills";
import Testemonials from "../Components/Testemonials";

const Home = () => {
  return (
    <div>
      <Hero />
      <About />
      <Services />
      <Portfolio />
      <Skills />
      <Process />
      <Experience />
      <Testemonials />
      <Pricing />
      <Contact />
    </div>
  );
};

export default Home;
