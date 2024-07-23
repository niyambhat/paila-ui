
import React from "react";
import { useProductContext } from "../../context/productcontex";

const About = () => {
  const { myName } = useProductContext();

  const data = {
    name: "Thapa Ecommerce",
  };

  return (
    <>
      {myName}
      {/* <HeroSection myData={data} /> */}
    </>
  );
};

export default About;
