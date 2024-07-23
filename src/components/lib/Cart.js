import {
  Autocomplete,
  Box,
  Button,
  Divider,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  Stepper,
  TextField,
  Typography,
} from "@mui/material";
import SectionWrapper from "components/layout/SectionWrapper";
import React from "react";
import CartItem from "./CartItem";
import CustomStepper from "./CustomStepper";
const items = [
  {
    image:
      "/assets/images/products/Fashion/Clothes/1.SilverHighNeckSweater.png",
    name: "Silver High Neck Sweater",
    price: "$210.00",
    quantity: 1,
    totalPrice: "$210.00",
    link: "/products/silver-high-neck-sweater",
  },
  {
    image: "/assets/images/products/Fashion/Clothes/21.YellowCasualSweater.png",
    name: "Yellow Casual Sweater",
    price: "$110.00",
    quantity: 1,
    totalPrice: "$110.00",
    link: "/products/yellow-casual-sweater",
  },
  {
    image: "/assets/images/products/Fashion/Clothes/4.DenimBlueJeans.png",
    name: "Denim Blue Jeans",
    price: "$140.00",
    quantity: 1,
    totalPrice: "$140.00",
    link: "/products/denim-blue-jeans",
  },
];
function ShoppingCart() {
  return (
    <>
      <SectionWrapper sx={{ background: "#F6F9FC" }}>
        <CustomStepper activeStep={1} />
        <Box
          sx={{
            maxWidth: "1500px",
            margin: "auto",
          }}
        >
          <Grid container spacing={3}>
            <Grid item xs={12} md={8}>
              {items.map((item, index) => (
                <CartItem key={index} item={item} />
              ))}
            </Grid>
            <Grid item xs={12} md={4}>
              <Paper elevation={1} sx={{ padding: 2 }}>
                <Box display="flex" justifyContent="space-between">
                  <Typography>Total:</Typography>
                  <Typography>$460.00</Typography>
                </Box>
                <Divider sx={{ my: 2 }} />
                <Typography>Additional Comments</Typography>
                <TextField
                  fullWidth
                  multiline
                  rows={6}
                  placeholder="Note"
                  variant="outlined"
                  size="small"
                  sx={{ my: 2 }}
                />
                <Divider sx={{ my: 2 }} />
                <TextField
                  fullWidth
                  placeholder="Voucher"
                  variant="outlined"
                  size="small"
                  label="Voucher"
                  sx={{ my: 2 }}
                />
                <Button
                  variant="outlined"
                  color="primary"
                  fullWidth
                  sx={{ my: 2 }}
                >
                  Apply Voucher
                </Button>
                <Divider sx={{ my: 2 }} />
                <Typography>Shipping Estimates</Typography>
                <Autocomplete
                  options={["USA", "Canada", "Australia"]}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      label="Country"
                      variant="outlined"
                      size="small"
                      sx={{ my: 2 }}
                    />
                  )}
                />
                <FormControl fullWidth sx={{ my: 2 }}>
                  <InputLabel id="state-label">State</InputLabel>
                  <Select
                    labelId="state-label"
                    label="State"
                    defaultValue="New York"
                    variant="outlined"
                    size="small"
                  >
                    <MenuItem value="New York">New York</MenuItem>
                    <MenuItem value="California">California</MenuItem>
                  </Select>
                </FormControl>
                <TextField
                  fullWidth
                  placeholder="3100"
                  variant="outlined"
                  size="small"
                  label="Zip Code"
                  sx={{ my: 2 }}
                />
                <Button
                  variant="outlined"
                  color="primary"
                  fullWidth
                  sx={{ my: 2 }}
                >
                  Calculate Shipping
                </Button>
                <Button
                  variant="contained"
                  color="primary"
                  fullWidth
                  href="/checkout"
                >
                  Checkout Now
                </Button>
              </Paper>
            </Grid>
          </Grid>
        </Box>
      </SectionWrapper>
    </>
  );
}

export default ShoppingCart;
