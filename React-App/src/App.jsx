import React from "react";
import { Routes, Route, BrowserRouter as Router, useLocation } from "react-router-dom";
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
import Signup from "./pages/Signup";

const AppContent = () => { 
  const location = useLocation();
  
  const showFooterPaths = ["/", "/about"];
  const hideNavbarPaths = ["/login", "/Signup"]; // Add paths where you want to hide navbar
  
  return (
    <div>
      {/* Only show Navbar if current path is NOT in hideNavbarPaths */}
      {!hideNavbarPaths.includes(location.pathname) && <Navbar />}
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/account" element={<Account />} />
        <Route path="/login" element={<Login />} />
        <Route path="/Signup" element={<Signup />} />
      </Routes>
      
      {showFooterPaths.includes(location.pathname) && <Footer />}
    </div>
  );
};

const App = () => {
  return (
    <CartProvider>
      <Router>
        <AppContent />
      </Router>
    </CartProvider>
  );
};

export default App;