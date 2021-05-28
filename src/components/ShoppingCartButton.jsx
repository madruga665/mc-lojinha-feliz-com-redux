import React, { Component } from "react";
import { FiShoppingCart } from "react-icons/fi";
import "./styles/ShoppingCartButton.css";

export default class ShoppingCartButton extends Component {
  render() {
    return (
      <div className="shopping-cart-container">
        <div className="itens-cart-quantity">10</div>
        <button className="shopping-cart-button">
          <FiShoppingCart size={32}/>
        </button>
      </div>
    );
  }
}
