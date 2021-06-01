import React, { Component } from "react";
import { connect } from "react-redux";
import { removeItemFromCart } from "../redux/actions";
import "./styles/CartProductItem.css";

class CartProductItem extends Component {
  render() {
    const { product, removeItemFromCart } = this.props;
    const { image, name } = product;
    return (
      <div className="cart-product-item">
        <img src={image} alt={`foto do ${name}`} />
        <span>{name}</span>
        <div className="price">
          <span>1</span>
          <div>
            <button>-</button>
            <button>+</button>
          </div>
          <button onClick={() => removeItemFromCart(product)}>Remover</button>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  removeItemFromCart: (item) => dispatch(
    removeItemFromCart(item),
  ),
});

export default connect(null, mapDispatchToProps)(CartProductItem);
