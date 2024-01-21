const express = require("express");
const path = require("path");
import createStore from "../src/components/store";
import appRoutes from "../src/components/routes";
import renderer from "./renderer";
import { matchRoutes } from "react-router";
const app = express();

app.get(/\.(js|css|ico|map)$/, express.static(path.resolve(__dirname, "../dist")));
app.use("/favicon.ico", express.static("../dist/assets/favicon.ico"));
app.get("/favicon.ico", (req, res) => res.status(204).end());
app.use("*", (req, res) => {
  const routes = matchRoutes(appRoutes, req.originalUrl);

  const store = createStore();

  const promises = routes
    ?.map(({ route }) => {
      return route.loadData ? route.loadData(store) : null;
    })
    ?.map((promise) => {
      if (promise) {
        return new Promise((resolve, reject) => {
          promise.then(resolve).catch(reject);
        });
      }
    });

  Promise.all(promises).then(() => {
    const context = {};
    const html = renderer(req, store, context);
    return res.contentType("text/html").status(200).send(html);
  });
});

app.listen("9000", () => {
  console.log("server run on 9000 PORT!");
});
