import React from "react";
import { Provider } from "react-redux";
import { StaticRouter } from "react-router-dom/server";
import ReactDOMServer from "react-dom/server";
import fs from "fs";
import path from "path";
import { App } from "../src/components/app";
import serializeJavascript from "serialize-javascript";

export default (req, store, context) => {
  let indexHTML = fs.readFileSync(path.resolve(__dirname, "../dist/index.html"), {
    encoding: "utf-8",
  });

  const appHTML = ReactDOMServer.renderToString(
    <Provider store={store}>
      <StaticRouter location={req.originalUrl} context={context}>
        <App />
      </StaticRouter>
    </Provider>
  );

  indexHTML = indexHTML.replace('<div id="app"></div>', `<div id="app">${appHTML}</div>`);
  indexHTML = indexHTML.replace(
    '<script id="initState"></script>',
    `<script id="initState">window.__PRELOADED_STATE__=${serializeJavascript(store.getState())}</script>`
  );

  return indexHTML;
};
