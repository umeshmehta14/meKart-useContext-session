import { Routes, Route } from "react-router-dom";

import { ProductList } from "./pages/ProductList";
import { Cart } from "./pages/Cart";
import { products } from "./data/productsDB";
import "./styles.css";
import { Header } from "./components/Header";
import { ProductDetail } from "./components/ProductDetail";

export default function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<ProductList products={products} />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/productDetails/:productId" element={<ProductDetail />} />
      </Routes>
    </div>
  );
}
