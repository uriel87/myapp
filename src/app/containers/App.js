import React from "react";
import { connect } from "react-redux";
import { User } from "../components/user.cmp";
import { setName, setEmail } from "../actions/user.action";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import About from "../components/about";
import Shop from "../components/shop";
import Nav from "../components/nav";
import Home from "../components/home";
import ShopItem from "../components/shopItem";

const routeWithSubRoutes = route => (
  <Route
    path={route.path}
    render={props => <route.component {...props} routes={route.routes} />}
  />
);

export const App = props => {
  return (
    <Router>
      <div className="container">
        <h1>hello world</h1>
        <User username={props.user.name} useremail={props.user.email} />
      </div>
      <hr />
      <div>
        <Nav />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          {/* <Route path="/shop" exact component={Shop} /> */}
          <Route path="/shop/:id" exact component={ShopItem} />
          {/* <Route path="/shop/:id/:obj" component={ShopItem} /> */}

          <Route path="/shop" exact render={() => <Shop {...props} />} />

        </Switch>
      </div>
    </Router>
  );
};

const mapStateToProps = state => {
  return {
    user: state.user
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setName: name => {
      dispatch(setName(name));
    },
    setEmail: email => {
      dispatch(setEmail(email));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
