import React from "react";
import ReactDOM from "react-dom";

import { App } from "./components/app";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import createStore from "./components/store";

ReactDOM.render(
  <Provider store={createStore()}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById("app")
);
