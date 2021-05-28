import React, { Component } from "react";

export default class ShoppingCartList extends Component {
  render() {
    return (
      <div className="shopping-cart-list">
        <ul>
          <li>
            Cart Item
            Quntidade: 10
            <button>-</button>
            <button>+</button>
          </li>
        </ul>
        <span>Total: R$100</span>
      </div>
    );
  }
}
