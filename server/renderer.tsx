import React from "react";
import { Provider } from "react-redux";
import { StaticRouter } from "react-router-dom/server";
import ReactDOMServer from "react-dom/server";
import { App } from "../src/components/app";
import serializeJavascript from "serialize-javascript";
import { Helmet } from "react-helmet";
import { Request } from "express";
import { Store } from "redux";

export default function (req: Request, store: Store<any>) {
  const appHTML = ReactDOMServer.renderToString(
    <Provider store={store}>
      <StaticRouter location={req.originalUrl}>
        <App />
      </StaticRouter>
    </Provider>
  );

  const helmet = Helmet.renderStatic();

  let indexHTML = `<!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      ${helmet.title.toString()}
      ${helmet.meta.toString()}
      ${helmet.link.toString()}
    <link href="/build/styles.css" rel="stylesheet"></head>
    <body>
      <div id="app">${appHTML}</div>
      <script id="initState">window.__PRELOADED_STATE__=${serializeJavascript(
        store.getState()
      )}</script>
    <script src="/build/main.js"></script></body>
  </html>
  `;

  return indexHTML;
}
