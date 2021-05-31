import React, { Component } from "react";
import "./styles/CartProductItem.css";

export default class CartProductItem extends Component {
  render() {
    const { product } = this.props;
    const { image, name } = product;
    return (
      <div className="cart-product-item">
        <img src={image} alt={`foto do ${name}`} />
        <span>{name}</span>
        <div className="price">
          <span>1</span>
          <div>
            <button>-</button>
            <button>+</button>
          </div>
          <button>Remover</button>
        </div>
      </div>
    );
  }
}
