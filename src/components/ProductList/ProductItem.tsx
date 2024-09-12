// ProductItem.js
import React from "react";
import { Product } from "../../models/Product";
import { Card, CardContent, Typography, CardMedia, Box } from "@mui/material";

type ProductItemProps = {
  product: Product;
  onDragStart: (e: React.DragEvent) => void;
};

const ProductItem: React.FC<ProductItemProps> = ({ product, onDragStart }) => {
  return (
    <Card
      sx={{ display: "flex", width: "100%", maxWidth: 800, mb: 2 }}
      draggable
      onDragStart={onDragStart}
    >
      <CardMedia
        component="img"
        sx={{ width: 180, height: 180 }}
        image={product.image}
        alt={product.name}
      />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          p: 2,
        }}
      >
        <CardContent>
          <Typography variant="body1">{product.name}</Typography>
          <Typography variant="body2" color="grey">
            ${product.price}
          </Typography>
          <Typography
            variant="body1" // Stock más grande
            color={product.inStock ? "green" : "red"}
          >
            {product.inStock ? "In Stock" : "Out of Stock"}
          </Typography>
        </CardContent>
      </Box>
    </Card>
  );
};

export default ProductItem;
