


// import { useState } from "react";
// import { Link, useLocation } from "react-router-dom";
// import { Menu, X, Search } from "lucide-react";
// import "./Navbar.css";
// import { useCart } from "./CartContext"; // Make sure this is correctly set up

// const NavBar = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [searchQuery, setSearchQuery] = useState("");
//   const { cart } = useCart(); // Getting cart from context
//   const location = useLocation();

//   const handleSearch = (e) => {
//     e.preventDefault();
//     console.log("Searching for:", searchQuery);
//     // Implement search logic here
//   };

//   return (
//     <nav className="navbar" aria-label="Main navigation">
//       <div className="nav-left">
//         <Link to="/" className="navbar-logo" aria-label="Home">
        
//         </Link>

//         <div className="nav-links">
//           <Link
//             to="/"
//             className={location.pathname === "/" ? "active" : ""}
//             aria-current={location.pathname === "/" ? "page" : undefined}
//           >
//             Home
//           </Link>
//           <Link
//             to="/about"
//             className={location.pathname === "/about" ? "active" : ""}
//             aria-current={location.pathname === "/about" ? "page" : undefined}
//           >
//             About
//           </Link>
//           <Link
//             to="/services"
//             className={location.pathname === "/services" ? "active" : ""}
//           >
//             Services
//           </Link>
//           <Link
//             to="/contact"
//             className={location.pathname === "/contact" ? "active" : ""}
//           >
//             Contact
//           </Link>
//         </div>
//       </div>

//       <div className="nav-center">
//         <form onSubmit={handleSearch} role="search">
//           <input
//             type="text"
//             className="search-input"
//             placeholder="Search..."
//             value={searchQuery}
//             onChange={(e) => setSearchQuery(e.target.value)}
//             aria-label="Search products"
//           />
//           <button
//             type="submit"
//             className="search-btn"
//             aria-label="Submit search"
//           >
//             <Search size={20} />
//           </button>
//         </form>
//       </div>

//       <div className="nav-right">
//         <Link to="/cart" aria-label="Shopping cart">
//           Cart ({cart.length})
//         </Link>
//         <Link to="/account" aria-label="User account">
//           Account
//         </Link>
//         <Link to="/login" aria-label="Login">
//           Login
//         </Link>
//       </div>

//       <button
//         className="menu-icon"
//         onClick={() => setIsOpen(!isOpen)}
//         aria-label="Toggle menu"
//         aria-expanded={isOpen}
//       >
//         {isOpen ? <X /> : <Menu />}
//       </button>

//       {isOpen && (
//         <div className="mobile-menu" aria-hidden={!isOpen}>
//           <Link
//             to="/"
//             onClick={() => setIsOpen(false)}
//             className={location.pathname === "/" ? "active" : ""}
//           >
//             Home
//           </Link>
//           <Link
//             to="/about"
//             onClick={() => setIsOpen(false)}
//             className={location.pathname === "/about" ? "active" : ""}
//           >
//             About
//           </Link>
//           <Link
//             to="/services"
//             onClick={() => setIsOpen(false)}
//             className={location.pathname === "/services" ? "active" : ""}
//           >
//             Services
//           </Link>
//           <Link
//             to="/contact"
//             onClick={() => setIsOpen(false)}
//             className={location.pathname === "/contact" ? "active" : ""}
//           >
//             Contact
//           </Link>
//           <hr />
//           <Link to="/cart" onClick={() => setIsOpen(false)}>
//             Cart ({cart.length})
//           </Link>
//           <Link to="/account" onClick={() => setIsOpen(false)}>
//             Account
//           </Link>
//           <img
//             src="/assets/Account.png"
//             alt="User account"
//             onError={(e) => {
//               e.target.style.display = "none";
//             }}
//           />
//           <Link to="/login" onClick={() => setIsOpen(false)}>
//             Login
//           </Link>
//         </div>
//       )}
//     </nav>
//   );
// };

// export default NavBar;



import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import "./Navbar.css";
import { useCart } from "./CartContext";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { cart } = useCart();
  const location = useLocation();

  return (
    <nav className="navbar" aria-label="Main navigation">
      <div className="nav-left">
        <Link to="/" className="navbar-logo" aria-label="Home">
          {/* Add your logo text or image here */}
        </Link>

        <div className="nav-links">
          <Link
            to="/"
            className={location.pathname === "/" ? "active" : ""}
            aria-current={location.pathname === "/" ? "page" : undefined}
          >
            Home
          </Link>
          <Link
            to="/about"
            className={location.pathname === "/about" ? "active" : ""}
            aria-current={location.pathname === "/about" ? "page" : undefined}
          >
            About
          </Link>
          <Link
            to="/services"
            className={location.pathname === "/services" ? "active" : ""}
          >
            Services
          </Link>
          <Link
            to="/contact"
            className={location.pathname === "/contact" ? "active" : ""}
          >
            Contact
          </Link>
        </div>
      </div>

      <div className="nav-right">
        <Link to="/cart" aria-label="Shopping cart">
          Cart ({cart.length})
        </Link>
        <Link to="/account" aria-label="User account">
          Account
        </Link>
        <Link to="/login" aria-label="Login">
          Login
        </Link>
      </div>

      <button
        className="menu-icon"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle menu"
        aria-expanded={isOpen}
      >
        {isOpen ? <X /> : <Menu />}
      </button>

      {isOpen && (
        <div className="mobile-menu" aria-hidden={!isOpen}>
          <Link to="/" onClick={() => setIsOpen(false)} className={location.pathname === "/" ? "active" : ""}>
            Home
          </Link>
          <Link to="/about" onClick={() => setIsOpen(false)} className={location.pathname === "/about" ? "active" : ""}>
            About
          </Link>
          <Link to="/services" onClick={() => setIsOpen(false)} className={location.pathname === "/services" ? "active" : ""}>
            Services
          </Link>
          <Link to="/contact" onClick={() => setIsOpen(false)} className={location.pathname === "/contact" ? "active" : ""}>
            Contact
          </Link>
          <hr />
          <Link to="/cart" onClick={() => setIsOpen(false)}>
            Cart ({cart.length})
          </Link>
          <Link to="/account" onClick={() => setIsOpen(false)}>
            Account
          </Link>
          <Link to="/login" onClick={() => setIsOpen(false)}>
            Login
          </Link>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
