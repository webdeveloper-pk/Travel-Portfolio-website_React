import React from "react";
import Card from "../../components/card/Card";
import Footer from "../../components/footer";
import Hero from "../../components/hero";
import Navbar from "../../components/navbar";
import SmallCard from "../../components/smallCard/SmallCard";
import Testimonial from "../../components/testimonial/Testimonial";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Card />
      <Testimonial />
      <div class="action-button">
        <button class="action-button-bg">Get Started</button>
      </div>
      <div>
        <SmallCard />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
