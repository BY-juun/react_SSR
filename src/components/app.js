import React from "react";
import "./styles";
import { Link, Route, Routes } from "react-router-dom";
import { Counter } from "./counter";
import { Post } from "./post";

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<h1>SSR Home Page</h1>} />
        <Route path="/counter" element={<Counter />} />
        <Route path="/post" element={<Post />} />
      </Routes>
      <div>
        <Link to="/">Home</Link>
        <Link to="/counter">Counter</Link>
        <Link to="/post">Post</Link>
      </div>
    </>
  );
};
