import React from "react";
import Navbar from "./components/navbar/Navbar";
import Hero from "./components/hero/Hero";
import Programs from "./components/programs/Programs";
import Title from "./components/title/Title";
import About from "./components/about/About";
import Campus from "./components/campus/Campus";

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <div className="container">
        <Title subTitle='Our PROGRAM' title='What We Offer' />
        <Programs />
        <About />
        <Title subTitle='Gallery' title='Campus Photos' />
        <Campus />
        <Title subTitle='TESTIMONIALS' title='What Student Says' />
      </div>
    </div>
  );
};

export default App;
