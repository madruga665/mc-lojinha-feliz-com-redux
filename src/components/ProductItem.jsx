import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { addToShoopingCart } from "../redux/actions";
import "./styles/ProductItem.css";

class ProductItem extends Component {
  render() {
    const { product, addToShoopingCart } = this.props;
    const { name, price, image } = product;
    return (
      <div className="product-item">
        <img src={image} alt={`foto do ${name}`} />
        <span>{name}</span>
        <div className="price">
          R$ {price.toFixed(2)}
          <button onClick={() => addToShoopingCart(product)}>
            Adicionar ao carrinho
          </button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (store) => ({
  newCart: store.shoppingCart.newValue,
});

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ addToShoopingCart }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductItem);
