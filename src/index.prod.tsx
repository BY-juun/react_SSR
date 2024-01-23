import React from "react";
import ReactDOM from "react-dom";

import { App } from "./components/app";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { applyMiddleware, createStore } from "redux";
import reducers from "./reducers";
import thunk from "redux-thunk";

const state = window.__PRELOADED_STATE__;

ReactDOM.hydrate(
  <Provider store={createStore(reducers, state, applyMiddleware(thunk))}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById("app")
);
