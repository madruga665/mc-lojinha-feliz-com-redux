import React, { Component } from "react";
import "./styles/ProductList.css";
import products from "../helpers/data";
import ProductItem from "./ProductItem";

export default class ProductList extends Component {
  constructor() {
    super();
    this.state = {
      shoppingCart: []
    }
  }
  addProductToCart = (id) => {
    const { shoppingCart } = this.state;
    const findProduct = products.find((product) => {
      return product.id === id
    })
    this.setState({shoppingCart: [...shoppingCart, findProduct]})
  }

  render() {
    const { shoppingCart } = this.state;
    return (
      <section className="product-list">
        <h2>Nossos Produtos</h2>
        {products.map((product) => (
          <ProductItem key={product.id} product={product} addProductToCart={this.addProductToCart} />
        ))}
        <span>Carrinho</span>
        <ul>
          {shoppingCart.map((item, index) => (
            <li key={`${item.id}${index}`}>{item.name}</li>
          ))}
        </ul>
      </section>
    );
  }
}
