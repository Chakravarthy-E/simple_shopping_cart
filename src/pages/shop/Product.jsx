import React, { useContext } from "react";
import { shopContext } from "../../context/ShopContextProvider";




const Product = (props) => {
  const { id, productName, price, productImg } = props.data;
  const { addToCart, cartItem } = useContext(shopContext);
  const cartItemAmout = cartItem && cartItem[id] ? cartItem[id] : 0;


  return (
    <div className="product">
      <img src={productImg} alt="" />
      <div className="description">
        <p>
          <b>{productName}</b>
        </p>
        <p>Price : ${price}</p>
      </div>
      <button className="addToCart" onClick={() => addToCart(id)}>
        Add to Cart {cartItemAmout > 0 && <p>({cartItemAmout})</p>}
      </button>
    </div>
  );
};

export default Product;
