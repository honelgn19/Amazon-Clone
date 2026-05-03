import React from "react";
import Header from "./components/Header";
import LowerHeader from "./components/LowerHeader";
import Carousel from "./components/Carousel/Carousel";
import Category from "./components/Category/Category";
import Product from "./components/Product/Product";
import { CartProvider } from "./components/Product/CartContext";

function App() {
  return (
    <CartProvider>
      <Header />
      <LowerHeader />
      <Carousel />
      <Category />
      <Product />
    </CartProvider>
  );
}

export default App;