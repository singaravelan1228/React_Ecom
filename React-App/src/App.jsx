
import React from "react";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import { CartProvider } from "./Components/CartContext.jsx";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Cart from "./pages/Cart";
import Account from "./pages/Account";
import Contact from "./pages/Contact";
import Login from "./pages/Login";

const App = () => {
  return (
    <CartProvider>
      <Router>
        <div>
          <Navbar />
          
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/account" element={<Account />} />
            <Route path="/login" element={<Login />} />
          </Routes>

          <Footer />
        </div>
      </Router>
    </CartProvider>
  );
};

export default App;
