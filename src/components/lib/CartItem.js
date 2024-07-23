import AddIcon from "@mui/icons-material/Add";
import CloseIcon from "@mui/icons-material/Close";
import RemoveIcon from "@mui/icons-material/Remove";
import { Box, Button, IconButton, Paper, Typography } from "@mui/material";
import { dummyProducts } from "data";
import React from "react";

const CartItem = ({ item }) => {
  return (
    <Paper elevation={1} sx={{ padding: 2, marginBottom: 2 }}>
      <Box display="flex">
        <Box sx={{ width: "15%", height: 80, position: "relative" }}>
          <img
            src={dummyProducts[0].imageUrl}
            alt={item.name}
            style={{ width: "auto", height: "120px", objectFit: "cover" }}
          />
        </Box>
        <Box sx={{ width: "85%" }}>
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
          >
            <Typography variant="body1">
              <a href={item.link}>{item.name}</a>
            </Typography>
            <IconButton>
              <CloseIcon />
            </IconButton>
          </Box>
          <Box>
            <Typography variant="body2">
              {item.price} x {item.quantity}
            </Typography>
            <Typography variant="body2">{item.totalPrice}</Typography>
          </Box>
          <Box display="flex" alignItems="center" mt={1}>
            <Button variant="outlined" color="primary" size="small" disabled>
              <RemoveIcon fontSize="small" />
            </Button>
            <Box mx={2}>{item.quantity}</Box>
            <Button variant="outlined" color="primary" size="small">
              <AddIcon fontSize="small" />
            </Button>
          </Box>
        </Box>
      </Box>
    </Paper>
  );
};

export default CartItem;
