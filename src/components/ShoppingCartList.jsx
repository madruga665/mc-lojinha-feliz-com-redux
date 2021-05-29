import React, { Component } from "react";
import { connect } from "react-redux";

class ShoppingCartList extends Component {
  render() {
    const { newCart } = this.props;
    return (
      <div className="shopping-cart-list">
        <ul>
          {newCart.map((item) => (
            <li>
              {item.name}
              Quntidade: 10
              <button>-</button>
              <button>+</button>
            </li>
          ))}
        </ul>
        <span>Total: R$100</span>
      </div>
    );
  }
}

const mapStateToProps = (store) => ({
  newCart: store.shoppingCart,
});

export default connect(mapStateToProps)(ShoppingCartList);
