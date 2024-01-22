import React from "react";
import { Counter } from "./counter";
import Home from "./home";
import Post from "./post";

export default [
  {
    path: "/",
    exact: true,
    element: <Home.component />,
    loadData: Home.loadData,
  },
  {
    path: "/counter",
    element: <Counter />,
  },
  {
    path: "/post/:id",
    element: <Post.component />,
    loadData: (store, path) => Post.loadData(store, path.split("/").pop()),
  },
  {
    path: "*",
    element: <div>Not Found</div>,
  },
];
