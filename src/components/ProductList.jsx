import React, { Component } from "react";
import "./styles/ProductList.css";
import ProductItem from "./ProductItem";
import { connect } from "react-redux";

class ProductList extends Component {
  render() {
    const { products } = this.props;
    return (
      <section className="product-list">
        <h2>Nossos Produtos</h2>
        {products.map((product) => (
          <ProductItem key={product.id} product={product} />
        ))}
      </section>
    );
  }
}

const mapStateToProps = (state) => ({
  products: state.shoppingCart.products,
});

export default connect(mapStateToProps)(ProductList);
