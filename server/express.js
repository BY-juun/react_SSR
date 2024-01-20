const express = require("express");
const fs = require("fs");
const path = require("path");
const React = require("react");
const ReactDOMServer = require("react-dom/server");
const { StaticRouter } = require("react-router-dom/server");

const app = express();
const { App } = require("../src/components/app");

app.get(/\.(js|css|map|ico)$/, express.static(path.resolve(__dirname, "../dist")));

app.use("*", (req, res) => {
  let indexHTML = fs.readFileSync(path.resolve(__dirname, "../dist/index.html"), {
    encoding: "utf-8",
  });

  const context = {};

  const appHTML = ReactDOMServer.renderToString(
    <StaticRouter location={req.originalUrl} context={context}>
      <App />
    </StaticRouter>
  );

  indexHTML = indexHTML.replace('<div id="app"></div>', `<div id="app">${appHTML}</div>`);

  return res.contentType("text/html").status(200).send(indexHTML);
});

app.listen("9000", () => {
  console.log("server run on 9000 PORT!");
});
