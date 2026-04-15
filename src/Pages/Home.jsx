import About from "../Components/About";
import Contact from "../Components/Contact";
import Experience from "../Components/Experience";
import Footer from "../Components/Footer";
import Hero from "../Components/Hero";
import Navbar from "../Components/Navbar";
import Portfolio from "../Components/Portfolio";
import Pricing from "../Components/Pricing";
import Process from "../Components/Process";
import Services from "../Components/Services";
import Skills from "../Components/Skills";
import Testemonials from "../Components/Testemonials";


const Home = () => {
    return (
        <div className=" overflow-hidden">
            <Navbar/>
            <Hero/>
            <About/>
            <Services/>
            <Portfolio/>
            <Skills/>
            <Process/>
            <Experience/>
            <Testemonials/>
            <Pricing/>
            <Contact/>
            <Footer/>

            
        </div>
    );
};

export default Home;