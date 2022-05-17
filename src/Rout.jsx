import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import App from "pages/App";
import Login from "pages/Login";
import Register from "pages/Register";
import Cart from "pages/Cart";
import NotFound from "pages/NotFound";
import ProductPage from "pages/ProductPage";

const Rout = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/productpage" element={<ProductPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default Rout;
