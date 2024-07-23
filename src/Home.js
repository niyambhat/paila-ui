
import HeroSection from "components/layout/sections/HeroSection";
import FeatureProduct from "components/shop/FeatureProduct";
import React from "react";
import Services from "./components/Services";
import Trusted from "./components/Trusted";

const Home = () => {
  const data = {
    name: "Paila Gift Hampers",
  };

  return (
    <>
      <HeroSection myData={data} />
      <FeatureProduct />
      <Services />
      <Trusted />
    </>
  );
};

export default Home;
