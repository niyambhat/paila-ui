import { Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom"; // Assuming you are using React Router for navigation

function NavigationList({ option }) {
  return (
    <>
      <Typography variant="h4" gutterBottom sx={{ color: "#ffffff" }}>
        {option?.category}
      </Typography>
      <ul>
        {option?.pages.map((page, pageIndex) => (
          <li key={pageIndex}>
            <Link to={page.path}>
              <Typography variant="body1" gutterBottom>
                {page.name}
              </Typography>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}

export default NavigationList;
