const express = require("express");
const fs = require("fs");
const path = require("path");

const app = express();

app.get(/\.(js|css|map|ico)$/, express.static(path.resolve(__dirname, "../dist")));
app.use("*", (req, res) => {
  let indexHTML = fs.readFileSync(path.resolve(__dirname, "../dist/index.html"), {
    encoding: "utf-8",
  });

  return res.contentType("text/html").status(200).send(indexHTML);
});

app.listen("9000", () => {
  console.log("server run on 9000 PORT!");
});
