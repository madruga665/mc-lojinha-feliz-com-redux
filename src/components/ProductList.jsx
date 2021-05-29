import React, { Component } from "react";
import "./styles/ProductList.css";
import products from "../helpers/data";
import ProductItem from "./ProductItem";

export default class ProductList extends Component {
  render() {
    return (
      <section className="product-list">
        <h2>Nossos Produtos</h2>
        {products.map((product) => (
          <ProductItem key={product.id} product={product} />
        ))}
      </section>
    );
  }
}
