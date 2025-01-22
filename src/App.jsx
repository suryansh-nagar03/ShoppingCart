import Header from "./components/header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./components/home";
import ClothingStore from "./components/clothingStore";
import ShoeStore from "./components/shoeStore";
import AccessoriesStore from "./components/accessoriesStore";
import ClothingProduct from "./components/clothingProduct";
import ShoesProduct from "./components/shoeProduct";
import AccessoriesProduct from "./components/accessoriesProduct";
import Cart from "./components/cart";
import { Outlet } from "react-router-dom";
import { useState } from "react";

function Layout() {
  return (
    <div>
      <Outlet />
    </div>
  );
}

export default function App() {
  const [cart, setCart] = useState([]);
  return (
    <>
      <BrowserRouter>
        <Header cart={cart} />
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="clothing">
              <Route index element={<ClothingStore />} />
              <Route
                path=":productId"
                element={<ClothingProduct cart={cart} setCart={setCart} />}
              />
            </Route>
            <Route path="shoes">
              <Route index element={<ShoeStore />} />
              <Route
                path=":productId"
                element={<ShoesProduct cart={cart} setCart={setCart} />}
              />
            </Route>
            <Route path="accessories">
              <Route index element={<AccessoriesStore />} />
              <Route
                path=":productId"
                element={<AccessoriesProduct cart={cart} setCart={setCart} />}
              />
            </Route>
            <Route
              path="cart"
              element={<Cart cart={cart} setCart={setCart} />}
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
