import { Box } from "@mui/material";
import React from "react";
import DisplayImage from "../../../assets/bg.jpg";

function FullBgContainer() {
  return (
    <Box
      component="section"
      sx={{
        backgroundImage: `url(${DisplayImage})`, // Correctly reference the image variable
        height: "450px", // Adjust height as per your design
        backgroundSize: "cover",
      }}
    ></Box>
  );
}

export default FullBgContainer;
