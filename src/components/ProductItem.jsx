import React, { Component } from "react";
import "./styles/ProductItem.css";

export default class ProductItem extends Component {
  render() {
    const { data } = this.props;
    const { name, price, image } = data;
    return (
      <div className="product-item">
        <img src={image} alt={`foto do ${name}`} />
        <span>{name}</span>
        <div className="price">
          R$ {price.toFixed(2)}
          <button>Adicionar ao carrinho</button>
        </div>
      </div>
    );
  }
}
