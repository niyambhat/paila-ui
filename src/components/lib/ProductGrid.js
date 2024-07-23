import { Container, Grid } from "@mui/material";
import * as React from "react";
import { dummyProducts } from "../../data";
import ProductCard from "./ProductCard";

export default function ProductGrid() {
  return (
    <Container
      sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
    >
      <Grid container sx={{ maxWidth: 1080, pt: 3, pb: 3 }} spacing={3}>
        {dummyProducts.map((product) => (
          <Grid item key={product.id} xs={12} sm={6} md={4}>
            <ProductCard
              product={{
                name: product.name,
                imageUrl: product.imageUrl,
                description: product.description,
              }}
            />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
