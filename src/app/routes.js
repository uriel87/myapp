import Song from "./components/song";
import SongsList from "./components/songsList/songsList";
import About from "./components/about";
import Home from "./components/home";
import { Switch, Route } from "react-router-dom";
import React from "react";

export const Routes = () => {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/about" component={About} />
      <Route path="/SongsList" exact component={SongsList} />
      <Route path="/SongsList/:id" exact component={Song} />
    </Switch>
  );
};

export default Routes;

