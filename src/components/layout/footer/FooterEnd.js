import { Facebook, Instagram } from "@mui/icons-material";
import { Box, Grid, IconButton, Typography } from "@mui/material";
import React from "react";
function FooterEnd() {
  return (
    <Box sx={{ bgcolor: "#0d0d0d", color: "#fff" }}>
      <Grid container justifyContent="space-between" alignItems="center">
        <Grid item xs={6}>
          <Typography variant="body2" align="left">
            © Paila Hampers 2024. All Rights Reserved.
          </Typography>
        </Grid>
        <Grid item xs={6} sx={{ textAlign: "right" }}>
          <IconButton
            href="https://www.facebook.com/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            sx={{ color: "#fff" }}
          >
            <Facebook />
          </IconButton>
          <IconButton
            href="https://www.instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            sx={{ color: "#fff" }}
          >
            <Instagram />
          </IconButton>
        </Grid>
      </Grid>
    </Box>
  );
}

export default FooterEnd;
