import { Grid } from "@mui/material";
import StyledButton from "components/lib/StyledButton";
import React from "react";
import Nav from "./Nav";


const Header = () => {
  return (
    <Grid
    container
    spacing={2}
    justifyContent="space-between"
    alignItems="center"
    sx={{ borderBottom: "1px solid #e1e1e1", p: 2 }}
  >
    <Grid item xs={3} textAlign="left">
      <StyledButton label="Bulk Order" />
    </Grid>
    <Grid item xs={6} textAlign="center">
      <img src="./images/PailaLogo.png" style={{ height: "110px", width: "auto" }} alt="logo" />
    </Grid>
    <Grid item xs={3} textAlign="right">
 <Nav/>    </Grid>
  </Grid>
    // <MainHeader>
    //   <NavLink to="/">
    //     <img src="./images/paila.png" alt="paila logo" />
    //   </NavLink>
    //   <Nav />
    // </MainHeader>
  );
};


export default Header;
