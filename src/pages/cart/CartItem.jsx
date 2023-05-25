import React from "react";
import "./cart.css"
import { useContext } from "react";
import { shopContext } from "../../context/ShopContextProvider";


const CartItem = (props) => {
  const { id, productName, price, productImg } = props.data;
  const { cartItem,addToCart,removeToCart,updateCartItemCount  } = useContext(shopContext);

  return (
    <div className="cartItem">
      <img src={productImg} />
      <div className="discription">
        <p>
          <b>{productName}</b>
        </p>
        <p>{price}</p>
        <div className="countHandler">
        <button onClick={()=>removeToCart(id)}> - </button>
        <input value={cartItem[id]} onChange={(e) => updateCartItemCount(Number(e.target.value),id) } />
        <button onClick={()=>addToCart(id)}> + </button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
