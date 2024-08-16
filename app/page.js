import Image from "next/image";
import Hero from "./pages/Hero";
import About from "./pages/About";
import Service from "./pages/Service";
import Testimonial from "./pages/Testimonial";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Footer from "./pages/Footer";
import  { NavbarComp } from "./pages/Navbar";

export default function Home() {
  return (
    <>
      <div className="px-[6.875vw] max-xl:px-[4.875vw] ">
        <NavbarComp/>
        <Hero/>
        <About/>
        <Service/>
        <Projects/>
      </div>
      <Testimonial/>
      <div className="px-[6.875vw]"> 
        <Contact/>
      </div>
        <Footer/>
    </>  
  );
}
