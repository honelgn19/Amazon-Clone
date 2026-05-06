import React from "react";
import Header from "../Header";
import { CartProvider } from "../Product/CartContext";

function Layout({ children }) {
  return (
    <div>
      <CartProvider>
        <Header />
        {children}
      </CartProvider>
    </div>
  );
}

export default Layout;
