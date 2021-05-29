import React, { Component } from "react";
import { FiShoppingCart } from "react-icons/fi";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import "./styles/ShoppingCartButton.css";

class ShoppingCartButton extends Component {
  constructor() {
    super();
    this.state = {
      shoppingCart: [],
    };
  }

  shoppingCartQuantity = () => {
    const { newCart } = this.props;
    console.log(newCart)
    return <div className="itens-cart-quantity">{newCart.length}</div>;
  };

  render() {
    const { newCart} = this.props;
    console.log(newCart)
    return (
      <div className="shopping-cart-container">
        <Link to="/shopping-cart">
          {newCart.length === 0 ? null : this.shoppingCartQuantity()}
          <button className="shopping-cart-button">
            <FiShoppingCart size={32} />
          </button>
        </Link>
      </div>
    );
  }
}

const mapStateToProps = (store) => ({
  newCart: store.shoppingCart,
});

export default connect(mapStateToProps)(ShoppingCartButton);