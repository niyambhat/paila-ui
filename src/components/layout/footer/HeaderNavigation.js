import { Grid } from "@mui/material";
import React from "react";
import logo from "../../../assets/PailaLogo.png";
import StyledButton from "../../lib/StyledButton";
import UserActionMenu from "./UserActionMenu";

function HeaderNavigation() {
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
        <img src={logo} style={{ height: "95px", width: "auto" }} alt="logo" />
      </Grid>
      <Grid item xs={3} textAlign="right">
        <UserActionMenu />
      </Grid>
    </Grid>
  );
}

export default HeaderNavigation;
