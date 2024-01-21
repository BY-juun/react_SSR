import React from "react";
import ReactDOM from "react-dom";

import { App } from "./components/app";
import { BrowserRouter } from "react-router-dom";
import { applyMiddleware, createStore } from "redux";
import reducers from "./reducers";
import thunk from "redux-thunk";
import { Provider } from "react-redux";

const store = createStore(reducers, {}, applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById("app")
);
