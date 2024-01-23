import path from "path";
import "ignore-styles";
import bootStrap from "./express";
import babelRegister from "@babel/register";

babelRegister({
  configFile: path.resolve(__dirname, "../babel.config.js"),
});

bootStrap();
