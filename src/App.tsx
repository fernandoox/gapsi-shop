import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import "./App.css";

import Header from "./components/Header/Header";
import { useState, useEffect } from "react";
import SearchBar from "./components/SearchBar/SearchBar";
import { Product } from "./models/Product";
import { fetchProducts } from "./api/productsApi";
import ProductList from "./components/ProductList/ProductList";

function App() {
  const [products, setProducts] = useState<Product[]>([]);
  const [page, setPage] = useState<number>(1);
  const [keyword, setKeyword] = useState<string>("");
  const [cart, setCart] = useState<Product[]>([]);

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

  return (
    <div className="app" onDrop={handleDrop} onDragOver={handleDragOver}>
      <Header />
      <SearchBar onSearch={handleSearch} />
      <ProductList
        products={products}
        onAddToCart={(product) => setCart([...cart, product])}
        isProductInCart={isProductInCart}
      />
      <div>
        <h2>Cart</h2>
        {cart.map((product) => (
          <div key={product.id}>
            <p>
              {product.name} - ${product.price}
            </p>
          </div>
        ))}
      </div>
      <pre>{JSON.stringify(products, undefined, 2)}</pre>
    </div>
  );
}

export default App;
