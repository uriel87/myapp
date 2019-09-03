import ShopItem from "./components/shopItem";
import Shop from "./components/shop";
import About from "./components/about";
import Home from "./components/home";
import { Switch, Route } from "react-router-dom";
import React from "react";

export const Routes = () => {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/about" component={About} />
      <Route path="/shop" exact component={Shop} />
      <Route path="/shop/:id" exact component={ShopItem} />
    </Switch>
  );
};

export default Routes;

