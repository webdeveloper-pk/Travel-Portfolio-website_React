import React from "react";
import About from "../../components/about/index";
import Footer from "../../components/footer";
import Hero from "../../components/hero";
import Navbar from "../../components/navbar";
import Services from "../../components/ourServices";
import SmallCard from "../../components/smallCard/SmallCard";
import Testimonial from "../../components/testimonial/Testimonial";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Testimonial />
      <SmallCard />
      <Services />
      <Footer />
    </div>
  );
};

export default Home;
