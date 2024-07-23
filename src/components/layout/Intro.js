import { Container, Typography } from "@mui/material";
import * as React from "react";
import SectionWrapper from "./SectionWrapper";

export default function Intro() {
  return (
    <SectionWrapper>
      <Container sx={{ pt: 6, pb: 6 }}>
        <Typography variant="h1" align="center" sx={{ mb: 1 }}>
          Gift Hampers
        </Typography>
        <Typography variant="body1" align="center">
          At Pahila Gifts, Nepal's #1 premier destination for luxury hampers, we
          pride ourselves on curating a spectacular array of Nepalese and
          international products that span from exquisite gastronomical delights
          to rare and exotic goods. Each of our luxury hampers is meticulously
          assembled, featuring a handpicked selection of local treasures and
          high-quality imports, meticulously chosen to ensure utmost freshness
          and to celebrate Nepal's vibrant cultural heritage. Whether you're
          looking to surprise cherished loved ones or impress esteemed
          colleagues, our hampers are crafted with the utmost care to convey
          heartfelt appreciation and create unforgettable moments. We proudly
          offer delivery across Kathmandu and cater to special orders, ensuring
          that every gift is a testament to sophistication and elegance. Enjoy
          the exclusive handpicked selections from our connoisseurs, and
          discover the joy of giving with Pahila Gifts.
        </Typography>
      </Container>
    </SectionWrapper>
  );
}
