import React from "react";
import CallToAction from "../Components/Home/CallToAction";
import Hero from "../Components/Home/Hero";
import Process from "../Components/Home/Process";
import Startups from "../Components/Home/Startups";
import Videos from "../Components/Home/Videos";

const Home = () => {
  return (
    <div>
      <Hero />
      <Videos />
      <Process />
      <Startups />
      <CallToAction />
    </div>
  );
};

export default Home;
