import React, { useContext } from "react";
import { PRODUCTS } from "../../product";
import { shopContext } from "../../context/ShopContextProvider";
import CartItem from "./CartItem";
import "./cart.css";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const { cartItem, getTotalCartAmount } = useContext(shopContext);
  const totalAmount = getTotalCartAmount();

  const navigate = useNavigate();

  return (
    <div className="cart">
      <div>
        <h2>Your cart</h2>
      </div>
      <div className="cartItems">
        {PRODUCTS.map((product) => {
          if (cartItem[product.id] !== 0) {
            return <CartItem data={product} key={product.id} />;
          } else {
            return null;
          }
        })}
      </div>
      {totalAmount > 0 ? (
        <div className="checkout">
          <p className="total">Total : $ {totalAmount}</p>

          <button onClick={() => navigate("/")}>Continue Shopping</button>
          <button>Check Out</button>
        </div>
      ) : (
        <h1>Your cart is empty</h1>
      )}
    </div>
  );
};

export default Cart;
