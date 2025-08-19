
// import React, { useState, useEffect } from "react";
// import './ProductList.css'
// import { useCart } from "./CartContext"; // Import the useCart hook

// const ProductList = () => {
//   const [products, setProducts] = useState([]);
//   const [currentPage, setCurrentPage] = useState(1);
//   const { addToCart } = useCart(); // Access addToCart from context

//   const productsPerPage =8;


//   useEffect(() => {
//     const fetchProducts = async () => {
//       try {
//         const response = await fetch("/products.json");
//         const data = await response.json();
//         setProducts(data);
//       } catch (error) {
//         console.error("Error fetching products:", error);
//       }
//       return 
//     };  

//     fetchProducts();
//   }, [products]);

//   const totalPages = Math.ceil(products.length / productsPerPage);
//   const indexOfLastProduct = currentPage * productsPerPage;
//   const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
//   const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

//   const handleNext = () => {
//     if (currentPage < totalPages) setCurrentPage(currentPage - 1);
//   };

//   const handlePrev = () => {
//     if (currentPage > 1) setCurrentPage(currentPage - 1);
    
//   };

//   const handleBuyNow = (product) => {
//     addToCart(product); // Add product to cart
//     alert(`${product.name} has been added to your cart!`);
//   };

//   return (
//     <div className="container">
//       <h2>Groceries Items</h2>
//       <div className="product-grid">
//         {currentProducts.map((product) => (
//           <div className="card" key={product.id}>
//             <img src={product.image} alt={product.name} />
//             <h3>{product.name}</h3>
//             <p className="price">{product.price}</p>
//             <button onClick={() => handleBuyNow(product)}>Buy now</button>
//           </div>
//         ))}
//       </div>

//       <div style={{ marginTop: "20px", textAlign: "center" }}>
//         <button onClick={handlePrev} disabled={currentPage === 1}>
//           Previous
//         </button>
//         <span style={{ margin: "0 10px" }}>
//           Page {currentPage} of {totalPages}
//         </span>
//         <button onClick={handleNext} disabled={currentPage === totalPages}>
//           Next
//         </button>
//       </div>
//     </div>
//   );
// };

// export default ProductList;



import React, { useState, useEffect } from "react";
import './ProductList.css'
import { useCart } from "./CartContext";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const { addToCart } = useCart();

  const productsPerPage = 8;

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("/products.json");
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
    fetchProducts();
  }, []); // ✅ fetch only once

  const totalPages = Math.ceil(products.length / productsPerPage);
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1); // ✅ increment
  };

  const handlePrev = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const handleBuyNow = (product) => {
    addToCart(product);
    alert(`${product.name} has been added to your cart!`);
  };

  return (
    <div className="container">
      <h2>Groceries Items</h2>
      <div className="product-grid">
        {currentProducts.map((product) => (
          <div className="card" key={product.id}>
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p className="price">{product.price}</p>
            <button onClick={() => handleBuyNow(product)}>Buy now</button>
          </div>
        ))}
      </div>

      <div style={{ marginTop: "20px", textAlign: "center" }}>
        <button onClick={handlePrev} disabled={currentPage === 1}>
          Previous
        </button>
        <span style={{ margin: "0 10px" }}>
          Page {currentPage} of {totalPages}
        </span>
        <button onClick={handleNext} disabled={currentPage === totalPages}>
          Next
        </button>
      </div>
    </div>
  );
};

export default ProductList;








