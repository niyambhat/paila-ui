
import Intro from "components/layout/Intro";
import FeatureProduct from "components/shop/FeatureProduct";
import React from "react";
import Hero from "./Hero";

const Home = () => {
  const data = {
    name: "Paila Gift Hampers",
  };

  return (
    <>
    <Hero/>
    <Intro/>
    <FeatureProduct />
      {/* <Services />
      <Trusted /> */}
    </>
  );
};

export default Home;
