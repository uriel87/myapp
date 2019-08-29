import ReactDOM from "react-dom";
import React from "react";
import {Provider} from "react-redux";
import App from "./app/containers/App";
import store from "./app/store";

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
