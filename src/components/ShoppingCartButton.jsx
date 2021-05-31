import React, { Component } from "react";
import { FiShoppingCart } from "react-icons/fi";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import "./styles/ShoppingCartButton.css";

class ShoppingCartButton extends Component {
  shoppingCartQuantity = () => {
    const { shoppingCart } = this.props;
    return <div className="itens-cart-quantity">{shoppingCart.length}</div>;
  };

  render() {
    const { shoppingCart } = this.props;
    return (
      <div className="shopping-cart-container">
        <Link to="/shopping-cart">
          {shoppingCart.length === 0 ? null : this.shoppingCartQuantity()}
          <button className="shopping-cart-button">
            <FiShoppingCart size={32} />
          </button>
        </Link>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  shoppingCart: state.shoppingCart.cart,
});

export default connect(mapStateToProps)(ShoppingCartButton);
