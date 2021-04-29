import React from "react";
import ReactDom from "react-dom";
// redux things
import { Provider } from "react-redux";
import { createStore, applyMiddlware, compose } from "redux";
import thunk from "redux-thunk";
import reducers from "./reducers";

import App from "./App";

const store = createStore(reducers, compose(applyMiddlware(thunk)));

ReactDom.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
