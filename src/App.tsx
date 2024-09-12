import React, { useState, useEffect } from "react";
import Header from "./components/Header/Header";
import SearchBar from "./components/SearchBar/SearchBar";
import { Product } from "./models/Product";
import { fetchProducts } from "./api/productsApi";
import ProductList from "./components/ProductList/ProductList";
import CartDialog from "./components/Cart/CartDialog";

function App() {
  const [products, setProducts] = useState<Product[]>([]);
  const [page, setPage] = useState<number>(1);
  const [keyword, setKeyword] = useState<string>("");
  const [cart, setCart] = useState<Product[]>([]);
  const [isCartDialogOpen, setCartDialogOpen] = useState(false);

  useEffect(() => {
    if (keyword) {
      fetchProducts(keyword, page).then((newProducts) => {
        setProducts((prevProducts) => [...prevProducts, ...newProducts]);
      });
    }
  }, [keyword, page]);

  const handleSearch = (newKeyword: string) => {
    setKeyword(newKeyword);
    setPage(1);
    setProducts([]);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    const productId = e.dataTransfer.getData("productId");
    const product = products.find((p) => p.id === productId);
    if (product && !cart.find((item) => item.id === productId)) {
      setCart([...cart, product]);
    }
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
  };

  const isProductInCart = (productId: string) => {
    return cart.some((item) => item.id === productId);
  };

  const handleRemoveFromCart = (productId: string) => {
    setCart(cart.filter((item) => item.id !== productId));
  };

  return (
    <div className="app" onDrop={handleDrop} onDragOver={handleDragOver}>
      <Header
        cartCount={cart.length}
        onCartClick={() => setCartDialogOpen(true)}
      />
      <SearchBar onSearch={handleSearch} />
      <ProductList
        products={products}
        onAddToCart={(product) => setCart([...cart, product])}
        isProductInCart={isProductInCart}
      />
      <CartDialog
        open={isCartDialogOpen}
        onClose={() => setCartDialogOpen(false)}
        cart={cart}
        onRemove={handleRemoveFromCart}
      />
    </div>
  );
}

export default App;
