import { Box } from "@mui/material";
import theme from "components/theme";
import React from "react";

function DarkContainer({ children }) {
  return (
    <Box
      component="section"
      sx={{
        backgroundColor: theme.palette.primary.main, // Example usage of primary color
        p: 2,
        border: "1px dashed grey",
      }}
    >
      {children}
    </Box>
  );
}

export default DarkContainer;
