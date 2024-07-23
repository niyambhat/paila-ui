import { Box, Container } from "@mui/material";
import React from "react";
import Gifts from "../../assets/champagne.png";
import SectionWrapper from "../layout/SectionWrapper";

function Hero() {
  return (
    <SectionWrapper>
      <Container>
        <Box
          sx={{
            backgroundImage: `url(${Gifts})`, // Correctly reference the image variable
            height: "695px", // Adjust height as per your design
            backgroundSize: "cover",
            maxWidth: "1500px",
          }}
        ></Box>
      </Container>
    </SectionWrapper>
  );
}

export default Hero;
