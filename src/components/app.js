import React from "react";
import "./styles";
import { Link, useRoutes } from "react-router-dom";
import routes from "./routes";

export const App = () => {
  const element = useRoutes(routes);
  return (
    <>
      <div>
        <Link to="/">Home</Link>
        <Link to="/counter">Counter</Link>
        <Link to="/post">Post</Link>
      </div>
      {element}
    </>
  );
};
