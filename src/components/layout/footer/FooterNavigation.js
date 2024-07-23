import { Grid } from "@mui/material";
import React from "react";
import routes from "routes.config";
import NavigationList from "./NavigationList";
function FooterNavigation() {
  return (
    <>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={3}>
          <NavigationList option={routes[0]} />
        </Grid>
        <Grid item xs={3}>
          <NavigationList option={routes[1]} />
        </Grid>
        <Grid item xs={3}>
          <NavigationList option={routes[2]} />
        </Grid>
        <Grid item xs={3}>
          <NavigationList option={routes[3]} />
        </Grid>
      </Grid>
    </>
  );
}

export default FooterNavigation;
