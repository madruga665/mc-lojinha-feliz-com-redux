import React, { Component } from "react";
import { FiShoppingCart } from "react-icons/fi";
import { Link } from "react-router-dom";
import "./styles/ShoppingCartButton.css";

export default class ShoppingCartButton extends Component {
  render() {
    return (
      <div className="shopping-cart-container">
        <div className="itens-cart-quantity">10</div>
        <Link to="/shopping-cart">
          <button className="shopping-cart-button">
            <FiShoppingCart size={32} />
          </button>
        </Link>
      </div>
    );
  }
}
