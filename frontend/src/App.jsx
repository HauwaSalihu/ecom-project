import { Route, Routes } from "react-router";
import Home from "./pages/HomePage";
import MarketPlace from "./pages/MarketPlace";
import ProductDetails from "./pages/ProductDetails";
import Cart from "./pages/Cart";
import MainLayout from "./layout/MainLayout";
import Checkout from "./pages/Checkout";

function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route>
          <Route path="products" element={<MarketPlace />} />
          <Route path="products/:product_id" element={<ProductDetails />} />
        </Route>

        <Route path="checkout" element={<Checkout />} />
        <Route path="cart" element={<Cart />} />
      </Route>
    </Routes>
  );
}

export default App;
