import React, { Component } from "react";
import { FiShoppingCart } from "react-icons/fi";
import { Link } from "react-router-dom";
import "./styles/ShoppingCartButton.css";

export default class ShoppingCartButton extends Component {
  constructor() {
    super();
    this.state = {
      shoppingCart: [],
    };
  }

  shoppingCartQuantity = () => {
    const { shoppingCart } = this.state;
    return <div className="itens-cart-quantity">{shoppingCart.length}</div>;
  };

  render() {
    const { shoppingCart } = this.state;
    return (
      <div className="shopping-cart-container">
        <Link to="/shopping-cart">
          {shoppingCart.length === 0 ? null : this.shoppingCartQuantity()}
          <button className="shopping-cart-button">
            <FiShoppingCart size={32} />
          </button>
        </Link>
      </div>
    );
  }
}
