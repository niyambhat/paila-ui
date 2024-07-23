import { Container, Grid, Typography } from "@mui/material";
import React from "react";

const linkStyle = {
  textDecoration: "none",
  color: "inherit",
  "&:hover": {
    borderBottom: "2px solid black",
  },
};

function SubNav({ option }) {
  return (
    <>
      <Grid item xs={1} />
      <Grid
        item
        xs={9}
        sx={{
          display: "flex",
          overflowX: "auto",
          whiteSpace: "nowrap",
          WebkitOverflowScrolling: "touch", // Enable smooth scrolling on iOS
          justifyContent: "center",
        }}
      >
        <Container sx={{ display: "inline-flex", justifyContent: "center" }}>
          {option.pages.map((page, index) => (
            <Typography
              key={page.id}
              variant="body1"
              component="a"
              href="#"
              style={{
                ...linkStyle,
                marginRight: index === option.pages.length - 1 ? "0" : "20px",
                paddingTop: "16px", // Add padding top
                paddingBottom: "16px", // Add padding bottom // No margin on the last item
              }}
            >
              {page.name}
            </Typography>
          ))}
        </Container>
      </Grid>
      <Grid item xs={1} />
    </>
  );
}

export default SubNav;
