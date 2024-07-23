// theme.js
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#252525",
      contrastText: "#ffffff",
    },
    secondary: {
      main: "#bda576",
      contrastText: "#ffffff",
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 0,
          fontSize: "10px",
          fontWeight: 700,
        },
        outlinedPrimary: {
          "&:hover": {
            backgroundColor: "#404040",
            color: "#ffffff",
          },
        },
        outlinedSecondary: {
          backgroundColor: "#bda576",
          color: "#ffffff",
          "&:hover": {
            backgroundColor: "#9f8a42",
            color: "#ffffff",
          },
        },
      },
    },
  },
  typography: {
    fontFamily: "Montserrat, Arial, sans-serif",
    h1: {
      fontSize: "36px",
      fontWeight: 600,
      color: "#252525", // Heading color
    },
    h3: {
      fontSize: "1.5rem",
      fontWeight: 600,
    },
    h4: {
      fontSize: "16px",
      fontWeight: 600,
    },
    h6: {
      fontSize: "24px",
      fontWeight: 600,
      color: "#252525",
    },
    body1: {
      fontSize: "14px",
      color: "#858585", // Body text color
    },
  },
});

export default theme;
