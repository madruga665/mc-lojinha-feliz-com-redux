import React, { Component } from "react";
import { connect } from "react-redux";
import CartProductItem from "./CartProductItem";
import "./styles/ShoppingCartList.css";

class ShoppingCartList extends Component {
  render() {
    const { shoppingCart } = this.props;
    return (
      <>
        <div className="shopping-cart-list">
          {shoppingCart.map((item, index) => (
            <CartProductItem key={`${item.id}${index}`} product={item} />
          ))}
        </div>
        <div className="total">
          <span>Total: R$ </span>
          {shoppingCart
            .reduce((accumulator, currentValue) => {
              return accumulator + (currentValue.price * currentValue.quantity);
            }, 0)
            .toFixed(2)}
        </div>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  shoppingCart: state.shoppingCart.cart,
});

export default connect(mapStateToProps)(ShoppingCartList);
