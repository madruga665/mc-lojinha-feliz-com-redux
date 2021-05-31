import React, { Component } from "react";
import { connect } from "react-redux";
import CartProductItem from "./CartProductItem";
import "./styles/ShoppingCartList.css";

class ShoppingCartList extends Component {
  render() {
    const { newCart } = this.props;
    return (
      <>
        <div className="shopping-cart-list">
          {newCart.map((item, index) => (
            <CartProductItem key={`${item.id}${index}`} product={item} />
          ))}
        </div>
        <div className="total">
          <span>Total: </span>
          {newCart
            .reduce((accumulator, currentValue) => {
              return accumulator + currentValue.price;
            }, 0)
            .toFixed(2)}
        </div>
      </>
    );
  }
}

const mapStateToProps = (store) => ({
  newCart: store.shoppingCart,
});

export default connect(mapStateToProps)(ShoppingCartList);
