import React, { Component } from "react";
import ShoppingCartButton from "./ShoppingCartButton";
import "./styles/Header.css";

export default class Header extends Component {
  render() {
    return (
      <header className="header">
        <h1>Mc Lojinha Feliz</h1>
        <ShoppingCartButton />
      </header>
    );
  }
}
