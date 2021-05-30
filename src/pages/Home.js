import React, { Component } from "react";
import Header from "../components/Header";
import ProductList from "../components/ProductList";
import "./styles/Home.css";

export default class Home extends Component {
  render() {
    return (
      <main className="home">
        <Header />
        <ProductList />
      </main>
    );
  }
}
