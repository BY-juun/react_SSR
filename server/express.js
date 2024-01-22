const express = require("express");
const path = require("path");
import createStore from "../src/components/store";
import appRoutes from "../src/components/routes";
import renderer from "./renderer";
import { matchRoutes } from "react-router";
const app = express();

app.get(
  /\.(js|css|ico|map)$/,
  express.static(path.resolve(__dirname, "../dist"))
);
app.use("/favicon.ico", express.static("../dist/assets/favicon.ico"));
app.get("/favicon.ico", (req, res) => res.status(204).end());
app.use("*", (req, res) => {
  const routes = matchRoutes(appRoutes, req.originalUrl);

  const store = createStore();
  const promises = routes
    ?.map(({ route }) => {
      return route.loadData ? route.loadData(store, req.originalUrl) : null;
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
    res.contentType("text/html");
    const html = renderer(req, store, context);

    if (routes[0].route?.path === "*") {
      res.status(404);
    } else {
      res.status(200);
    }
    return res.send(html);
  });
});

app.listen("9000", () => {
  console.log("server run on 9000 PORT!");
});
