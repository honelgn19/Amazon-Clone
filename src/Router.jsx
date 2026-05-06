import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import ProductDetails from "./Pages/ProductDetails/ProductDetails";
import Landing from "./Pages/Landing/Landing";
import Cart from "./Pages/Cart/Cart";
import Orders from "./Pages/Orders/Orders";
import Payment from "./Pages/Payment/Payment";
import SignUp from "./Pages/Auth/SignUp";
import Results from "./Pages/Results/Results";

function Routing() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/category/:categoryName" element={<Results />} />
      </Routes>
    </Router>
  );
}

export default Routing;
