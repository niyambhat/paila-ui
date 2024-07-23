import { Box } from "@mui/material";
import React from "react";
function SectionWrapper({ children }) {
  return <Box sx={{ marginTop: 2, marginBottom: 2 }}>{children}</Box>;
}

export default SectionWrapper;
