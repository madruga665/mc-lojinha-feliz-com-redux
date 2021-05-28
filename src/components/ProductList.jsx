import React, { Component } from "react";
import "./styles/ProductList.css";

export default class ProductList extends Component {
  render() {
    return (
      <section className="product-list">
        <ul>
          <li>Item 1</li>
          <li>Item 2</li>
          <li>Item 3</li>
          <li>Item 4</li>
          <li>Item 5</li>
        </ul>
      </section>
    );
  }
}
