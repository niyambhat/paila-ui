import { Box, IconButton, Menu, MenuItem, Typography } from "@mui/material";
import { useCartContext } from "context/cart_context";
import React, { useState } from "react";
import { CgClose, CgMenu } from "react-icons/cg";
import { FiShoppingCart } from "react-icons/fi";
import { NavLink } from "react-router-dom";

function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { total_item } = useCartContext();
  
  // Menu handling
  const [anchorEl, setAnchorEl] = useState(null);
  const menuId = "primary-search-account-menu";
  const isMenuOpen = Boolean(anchorEl);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    setMenuOpen(false);
  };

  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
    </Menu>
  );

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        p: 2,
        backgroundColor: "#fff",
      }}
    >
      <IconButton
        size="large"
        edge="start"
        aria-label="menu"
        onClick={() => setMenuOpen(true)}
        sx={{ display: { md: "none" } }}
      >
        <CgMenu size="1.5rem" />
      </IconButton>

      <Box
        sx={{
          display: { xs: "none", md: "flex" },
          flexGrow: 1,
          justifyContent: "center",
        }}
      >
        <NavLink to="/" onClick={() => setMenuOpen(false)} style={{ textDecoration: 'none', margin: '0 1rem' }}>
          <Typography variant="body1">Home</Typography>
        </NavLink>
        <NavLink to="/about" onClick={() => setMenuOpen(false)} style={{ textDecoration: 'none', margin: '0 1rem' }}>
          <Typography variant="body1">About</Typography>
        </NavLink>
        <NavLink to="/products" onClick={() => setMenuOpen(false)} style={{ textDecoration: 'none', margin: '0 1rem' }}>
          <Typography variant="body1">Products</Typography>
        </NavLink>
        <NavLink to="/contact" onClick={() => setMenuOpen(false)} style={{ textDecoration: 'none', margin: '0 1rem' }}>
          <Typography variant="body1">Contact</Typography>
        </NavLink>
      </Box>

      <Box
        sx={{
          display: "flex",
          alignItems: "center",
        }}
      >
        <IconButton
          size="large"
          aria-label="show cart"
          color="inherit"
          component={NavLink}
          to="/cart"
        >
          <FiShoppingCart />
          {total_item > 0 && (
            <Typography
              sx={{
                position: "absolute",
                top: -8,
                right: -8,
                backgroundColor: "#E15C31",
                color: "#fff",
                borderRadius: "50%",
                width: "1.5rem",
                height: "1.5rem",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "0.75rem",
              }}
            >
              {total_item}
            </Typography>
          )}
        </IconButton>
        <IconButton
          size="large"
          aria-label="search"
          color="inherit"
          onClick={handleMenuOpen}
        >
          {/* Add a search icon here */}
        </IconButton>
        {renderMenu}
      </Box>

      <IconButton
        size="large"
        edge="end"
        aria-label="close menu"
        onClick={() => setMenuOpen(false)}
        sx={{ display: { md: "none" } }}
      >
        <CgClose size="1.5rem" />
      </IconButton>
    </Box>
  );
}

export default Nav;
