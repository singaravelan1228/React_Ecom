
import React from "react";
import { useCart } from "../Components/CartContext"; 
import { useNavigate } from "react-router-dom";
import "./Cart.css";

const Cart = () => {
  const { cart, removeFromCart, incrementQuantity, decrementQuantity, totalPrice } = useCart();
  const navigate = useNavigate();

  const handleBuyNow = () => {
    if (cart.length > 0) {
      navigate("/payment");
    }
  };

  if (cart.length === 0) {
    return <div className="cart-empty">Your cart is empty.</div>;
  }

  return (
    <div className="cart-page">
      <h1>Your Cart</h1>
      <ul className="cart-items">
        {cart.map((item) => (
          <li key={item.id} className="cart-item">
            <img src={item.image} alt={item.name} />
            <div className="cart-item-details">
              <h3>{item.name}</h3>
              <p className="price">Price: ${item.price}</p>
              <p className="quantity">
                Quantity: 
                <button className="qty-btn" onClick={() => decrementQuantity(item.id)}>-</button>
               <span className="qty-value">{item.quantity}</span>
                <button className="qty-btn" onClick={() => incrementQuantity(item.id)}>+</button>
              </p>
              <button onClick={() => removeFromCart(item.id)}>Remove</button>
            </div>
          </li>
        ))}
      </ul>
      <div className="cart-total">
        <h2>Total: ${totalPrice.toFixed(2)}</h2>
        <button className="buy-now-btn" onClick={handleBuyNow}>Buy Now</button>
      </div>
    </div>
  );
};

export default Cart;
