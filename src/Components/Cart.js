import React, { useContext, useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import "../App.css";
import { CounterContext } from "../CounterProvider";
const Cart = () => {
  const cartItems=useContext(CounterContext)
  return (
    <div>
      <h2>Cart Component</h2>
      <div className="cart">
        <FaShoppingCart className="shoppingCartIcon" />
        <div className="cartValue">{cartItems.count}</div>
      </div>
    </div>
  );
};

export default Cart;
