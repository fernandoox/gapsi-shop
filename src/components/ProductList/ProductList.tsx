// ProductList.js
import React from "react";
import { Product } from "../../models/Product";
import ProductItem from "./ProductItem";

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
    <div
      style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
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
    </div>
  );
};

export default ProductList;
