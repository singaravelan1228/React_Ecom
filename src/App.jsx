// import React from "react";
// import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
// import { CartProvider } from "./Components/CartContext.jsx";
// import Navbar from "./Components/Navbar";
// import Footer from "./Components/Footer";
// import Home from "./pages/Home";
// import About from "./pages/About";
// import Services from "./pages/Services";
// import Cart from "./pages/Cart";
// import Account from "./pages/Account";
// import Contact from "./pages/Contact";
// import Login from "./pages/Login";
// import Signup from "./pages/Signup";   // ✅ import Signup
// // ✅ import Dashboard (create if not exists)
// import "./App.css";

// const AppContent = () => {
//   const location = useLocation();

//   // Pages where the footer should be visible
//   const showFooterPaths = ["/", "/about"];

//   return (
//     <div>
//       <Navbar />
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/about" element={<About />} />
//         <Route path="/services" element={<Services />} />
//         <Route path="/contact" element={<Contact />} />
//         <Route path="/cart" element={<Cart />} />
//         <Route path="/account" element={<Account />} />
//         <Route path="/login" element={<Login />} />
//         <Route path="/signup" element={<Signup />} />   {/* ✅ Signup route */}

//       </Routes>

//       {/* Show footer only on selected pages */}
//       {showFooterPaths.includes(location.pathname) && <Footer />}
//     </div>
//   );
// };

// const App = () => {
//   return (
//     <CartProvider>
//       <BrowserRouter>
//         <AppContent />
//       </BrowserRouter>
//     </CartProvider>
//   );
// };

// export default App;


import React from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { CartProvider } from "./Components/CartContext.jsx";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import SearchBar from "./Components/Searchbar.jsx"; // ✅ Import SearchBar
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Cart from "./pages/Cart";
import Account from "./pages/Account";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Signup from "./pages/Signup"; 
import "./App.css";

const AppContent = () => {
  const location = useLocation();

  const showFooterPaths = ["/", "/about"];

  return (
    <div className="app-container">

      <Navbar />

      <div className="searchbar-wrapper">
        <SearchBar />
      </div>


      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/account" element={<Account />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
 
     
      {showFooterPaths.includes(location.pathname) && <Footer />}
    </div>
  );
};

const App = () => {
  return (
    <CartProvider>
      <BrowserRouter>
        <AppContent />
      </BrowserRouter>
    </CartProvider>
  );
};

export default App;

