import React, { Component } from "react";
import { Route, Switch } from "react-router";
import Home from "./pages/Home";
import ShoppingCart from "./pages/ShoppingCart";
export default class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/shopping-cart" component={ShoppingCart} />
      </Switch>
    );
  }
}
