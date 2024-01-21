import React from "react";
import { Counter } from "./counter";
import { Home } from "./home";
import Post from "./post";

export default [
  {
    path: "/",
    exact: true,
    element: <Home />,
  },
  {
    path: "/counter",
    element: <Counter />,
  },
  {
    path: "/post",
    element: <Post.component />,
  },
];
