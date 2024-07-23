import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { Box, IconButton, Menu, MenuItem } from "@mui/material";
import React, { useState } from "react";
function UserActionMenu() {
  const [anchorEl, setAnchorEl] = useState(null);
  const [_, setMobileMoreAnchorEl] = useState(null);
  const menuId = "primary-search-account-menu";
  const isMenuOpen = Boolean(anchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
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
        display: { xs: "none", md: "flex" },
        textAlign: "right",
        justifyContent: "flex-end", // Align items to the right
      }}
    >
      {" "}
      <IconButton
        size="large"
        edge="end"
        aria-label="account of current user"
        aria-controls={menuId}
        aria-haspopup="true"
        onClick={handleProfileMenuOpen}
        color="inherit"
      >
        <AccountCircleOutlinedIcon />
      </IconButton>
      <IconButton
        size="large"
        aria-label="show 4 new mails"
        color="inherit"
      ></IconButton>
      <IconButton
        size="large"
        aria-label="show 17 new notifications"
        color="inherit"
      >
        <ShoppingCartOutlinedIcon />
      </IconButton>
      <IconButton
        size="large"
        aria-label="show 17 new notifications"
        color="inherit"
      >
        <SearchOutlinedIcon />
      </IconButton>
      {renderMenu}
    </Box>
  );
}

export default UserActionMenu;
