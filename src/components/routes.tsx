import React from "react";
import Home from "./home";
import Post from "./post";

export default [
  {
    path: "/",
    exact: true,
    element: <Home.component />,
    // loadData: Home.loadData,
  },
  {
    path: "/post/:id",
    element: <Post.component />,
    loadData: (store: any, path: string) =>
      Post.loadData(store, path.split("/").pop() || ""),
  },
  {
    path: "*",
    element: <div>Not Found</div>,
  },
];
