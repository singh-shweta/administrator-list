import React from "react";
import store from "../js/store/index";
import { render } from "react-dom";
import { Provider } from "react-redux";
import App from "../App";
// window.store = store;
// window.addAdmin = addAdmin;

render(
  <Provider store={store}>
    <App />
  </Provider>
);
