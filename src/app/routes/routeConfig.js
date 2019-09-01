
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const routeWithSubRoutes = route => (
  <Route path={route.path}
    render={props => <route.component {...props} routes={route.routes} />}
  />
);


export default routeWithSubRoutes;
