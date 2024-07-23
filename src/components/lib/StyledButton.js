import { Button, Typography } from "@mui/material";
import React from "react";

function StyledButton({ label }) {
  return (
    <Button variant="contained" color="primary">
      <Typography variant="button" display="block">
        {label}
      </Typography>
    </Button>
  );
}

export default StyledButton;
