import React, { Component } from "react";
import "./styles/ProductList.css";
import data from "../helpers/data";
import ProductItem from "./ProductItem";

export default class ProductList extends Component {
  render() {
    console.log(data)
    return (
      <section className="product-list">
        {data.map((product) => (
          <ProductItem data={product} />
        ))}
      </section>
    );
  }
}
