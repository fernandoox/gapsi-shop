import React from "react";
import { Product } from "../../models/Product";
import ProductItem from "./ProductItem";
import { Box } from "@mui/material";

type ProductListProps = {
  products: Product[];
  onAddToCart: (product: Product) => void;
  isProductInCart: (productId: string) => boolean;
};

const ProductList: React.FC<ProductListProps> = ({
  products,
  isProductInCart,
}) => {
  const handleDragStart = (e: React.DragEvent, productId: string) => {
    e.dataTransfer.setData("productId", productId);
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: "100%",
        padding: 2,
      }}
    >
      {products
        .filter((product) => !isProductInCart(product.id))
        .map((product) => (
          <ProductItem
            key={product.id}
            product={product}
            onDragStart={(e) => handleDragStart(e, product.id)}
          />
        ))}
    </Box>
  );
};

export default ProductList;
