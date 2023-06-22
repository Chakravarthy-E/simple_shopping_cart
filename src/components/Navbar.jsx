import React from "react";
import { Link } from "react-router-dom";
import { ShoppingCart } from "phosphor-react";
import "./navbar.css";
const Navbar = () => {
  return (
    <div className="navbar">
      <div className="links">
        <Link to="/"><h2>Shopping Cart</h2></Link>
      </div>
      <div className="links">
        <Link to="/">Store</Link>
        <Link to="/cart">
          <ShoppingCart size={32} />
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
