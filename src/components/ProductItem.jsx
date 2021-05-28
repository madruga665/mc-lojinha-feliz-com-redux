import React, { Component } from "react";

export default class ProductItem extends Component {
  render() {
    const { name, price, image } = this.props;
    return (
      <div>
        <img src={image} alt={`foto do ${name}`} />
        <span>{name}</span>
        <div>
          {price}
          <button>Adicionar ao carrinho</button>
        </div>
      </div>
    );
  }
}
