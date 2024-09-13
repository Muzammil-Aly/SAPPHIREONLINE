import React from "react";

const Cart = ({ cart }) => {
  return (
    <>
      <div className="cart-container">
        <h2>Your Cart</h2>
        {cart.length === 0 ? (
          <p>Your cart is empty</p>
        ) : (
          <ul>
            {cart.map((item, index) => (
              <li key={index}>
                {item.CategoryNamees} - {item.Price}
              </li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
};

export default Cart;
