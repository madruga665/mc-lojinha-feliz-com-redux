import React, { Component } from 'react'
import ShoppingCartList from '../components/ShoppingCartList'

export default class ShoppingCart extends Component {
  render() {
    return (
      <section className="shopping-cart">
        <h1>Carrinho de compras</h1>
        <ShoppingCartList />
      </section>
    )
  }
}
