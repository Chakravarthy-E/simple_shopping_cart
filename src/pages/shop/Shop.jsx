import React from "react";
import { PRODUCTS } from "../../product.js";
import Product from "./Product.jsx";
import "./shop.css"
const Shop = () => {
  return (
    <div className="shop">
      <div className="products">
        {PRODUCTS.map((product) => {
         return <Product data={product} />
        })}
      </div>
    </div>
  );
};

export default Shop;
