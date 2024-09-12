// ProductList.js
import React from "react";
import { Product } from "../../models/Product";
import { Card, CardContent, Typography, CardMedia } from "@mui/material";

type ProductListProps = {
  products: Product[];
  onAddToCart: (product: Product) => void;
  isProductInCart: (productId: string) => boolean;
};

const ProductList: React.FC<ProductListProps> = ({
  products,
  onAddToCart,
  isProductInCart,
}) => {
  const handleDragStart = (e: React.DragEvent, product: Product) => {
    e.dataTransfer.setData("productId", product.id);
  };

  return (
    <div>
      {products
        .filter((product) => !isProductInCart(product.id)) // Filtra productos ya en el carrito
        .map((product) => (
          <Card
            key={product.id}
            sx={{ maxWidth: 345, mb: 2 }}
            draggable
            onDragStart={(e) => handleDragStart(e, product)}
          >
            <CardMedia
              component="img"
              height="140"
              image={product.image}
              alt={product.name}
            />
            <CardContent>
              <Typography variant="h6">{product.name}</Typography>
              <Typography variant="body2" color="text.secondary">
                ${product.price}
              </Typography>
              <Typography
                variant="body2"
                color={product.inStock ? "green" : "red"}
              >
                {product.inStock ? "In Stock" : "Out of Stock"}
              </Typography>
            </CardContent>
          </Card>
        ))}
    </div>
  );
};

export default ProductList;
