import { GlobalStyle } from "GlobalStyle";
import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { ThemeProvider } from "styled-components";

import { CssBaseline } from "@mui/material";
import AppContainer from "components/layout/AppContainer";
import Cart from "components/lib/Cart";
import About from "components/pages/About";
import Contact from "components/pages/Contact";
import ErrorPage from "components/pages/ErrorPage";
import Home from "components/pages/Home";
import Products from "components/pages/Products";
import SingleProduct from "./SingleProduct";
import theme from "./components/theme";

const App = () => {
  //   const theme = {
  //   colors: {
  //     gradient:
  //       "linear-gradient(0deg, rgb(132 144 255) 0%, rgb(98 189 252) 100%)",
  //     shadow:
  //       "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;",
  //     shadowSupport: " rgba(0, 0, 0, 0.16) 0px 1px 4px",
  //   },
  //   media: {
  //     mobile: "768px",
  //     // tab: "998px",
  //   },
  // };

   return (
    <>
          <CssBaseline />
          <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Router>
      <AppContainer>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/singleproduct/:id" element={<SingleProduct />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </AppContainer>
      </Router>
    </ThemeProvider>
    </>
    
  );
};

export default App;
