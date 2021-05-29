import React, { Component } from "react";
import "./styles/ProductItem.css";

export default class ProductItem extends Component {

  render() {
    const { product, addProductToCart } = this.props;
    const { id, name, price, image } = product;
    return (
      <div className="product-item">
        <img src={image} alt={`foto do ${name}`} />
        <span>{name}</span>
        <div className="price">
          R$ {price.toFixed(2)}
          <button onClick={ () => addProductToCart(id)}>Adicionar ao carrinho</button>
        </div>
      </div>
    );
  }
}
