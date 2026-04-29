import React, { useState } from "react";
import "./App.css";

function App() {
  // Simple food list
  const foods = [
    { name: "Burger", price: 100 },
    { name: "Pizza", price: 200 },
    { name: "Fries", price: 80 },
  ];

  // Cart state
  const [cart, setCart] = useState([]);

  // Add to cart
  const addToCart = (food) => {
    setCart([...cart, food]);
  };

  // Remove from cart
  const removeFromCart = (index) => {
    const updated = cart.filter((_, i) => i !== index);
    setCart(updated);
  };

  // Total price
  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="app">
      <h1>🍔 Food App</h1>

      {/* FOOD LIST */}
      <h2>Menu</h2>
      {foods.map((food, index) => (
        <div key={index}>
          <p>{food.name} - ₹{food.price}</p>
          <button onClick={() => addToCart(food)}>Add</button>
        </div>
      ))}

      {/* CART */}
      <h2>🛒 Cart</h2>
      {cart.map((item, index) => (
        <div key={index}>
          <p>{item.name} - ₹{item.price}</p>
          <button onClick={() => removeFromCart(index)}>Remove</button>
        </div>
      ))}

      <h3>Total: ₹{total}</h3>
    </div>
  );
}

export default App;
