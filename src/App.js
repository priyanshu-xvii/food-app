import React, { useState } from "react";
import "./App.css";

function App() {
  const foods = [
    { name: "Burger", price: 100 },
    { name: "Pizza", price: 200 },
    { name: "Fries", price: 80 },
  ];

  const [cart, setCart] = useState([]);

  const addToCart = (food) => {
    setCart([...cart, food]);
  };

  const removeFromCart = (index) => {
    const updated = cart.filter((_, i) => i !== index);
    setCart(updated);
  };

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
