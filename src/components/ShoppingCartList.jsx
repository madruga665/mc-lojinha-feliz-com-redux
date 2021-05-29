import React, { Component } from "react";
import { connect } from "react-redux";

class ShoppingCartList extends Component {
  render() {
    const { newCart } = this.props;
    return (
      <div className="shopping-cart-list">
        <ul>
          {newCart.map((item, index) => (
            <li key={`${item.id}${index}`}>
              {item.name}
              Quntidade: 10
              <button>-</button>
              <button>+</button>
            </li>
          ))}
        </ul>
        <span>
          Total: 
          {newCart.reduce((accumulator, currentValue) => {
            return accumulator + currentValue.price;
          },0).toFixed(2)}
        </span>
      </div>
    );
  }
}

const mapStateToProps = (store) => ({
  newCart: store.shoppingCart,
});

export default connect(mapStateToProps)(ShoppingCartList);
