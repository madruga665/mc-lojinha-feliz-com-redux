import React, { Component } from "react";
import { connect } from "react-redux";
import { addItemToShoopingCart } from "../redux/actions";
import "./styles/ProductItem.css";

class ProductItem extends Component {
  render() {
    const { product, addItemToShoopingCart } = this.props;
    const { name, price, image } = product;
    return (
      <div className="product-item">
        <img src={image} alt={`foto do ${name}`} />
        <span>{name}</span>
        <div className="price">
          R$ {price.toFixed(2)}
          <button onClick={() => addItemToShoopingCart(product)}>
            Adicionar ao carrinho
          </button>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  addItemToShoopingCart: (item) => dispatch(
    addItemToShoopingCart(item),
  ),
});

export default connect(null, mapDispatchToProps)(ProductItem);
