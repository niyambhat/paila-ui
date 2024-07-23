import { Grid } from "@mui/material";
import React from "react";
import SectionWrapper from "../SectionWrapper";

function TwoColumnGrid({ lcol, rcol }) {
  return (
    // <SectionWrapper>
    <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
      <Grid item xs={12} md={6}>
        {lcol}
      </Grid>
      <Grid item xs={12} md={6}>
        {rcol}
      </Grid>
    </Grid>
    // </SectionWrapper>
  );
}

export default TwoColumnGrid;
