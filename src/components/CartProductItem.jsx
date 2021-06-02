import React, { Component } from "react";
import { connect } from "react-redux";
import { addItemToShoopingCart, removeItemFromCart } from "../redux/actions";
import "./styles/CartProductItem.css";

class CartProductItem extends Component {
  render() {
    const { product, removeItemFromCart, addItemToShoopingCart  } = this.props;
    const { image, name, price, quantity } = product;
    return (
      <div className="cart-product-item">
        <img src={image} alt={`foto do ${name}`} />
        <span>{name}</span>
        <span>R$:{price.toFixed(2)}</span>
        <div className="price">
          <span>{quantity}</span>
          <div>
            <button>-</button>
            <button onClick={() => addItemToShoopingCart(product)}>+</button>
          </div>
          <button onClick={() => removeItemFromCart(product)}>Remover</button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  itemQuantity: state.shoppingCart.itemQuantity,
});

const mapDispatchToProps = (dispatch) => ({
  removeItemFromCart: (item) => dispatch(
    removeItemFromCart(item),
  ),
  addItemToShoopingCart: (item) => dispatch(
    addItemToShoopingCart(item),
  ),
});

export default connect(mapStateToProps, mapDispatchToProps)(CartProductItem);
