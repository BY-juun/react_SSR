import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchArticles } from "../actions";

export const Post = ({ articles, fetchArticles }) => {
  useEffect(() => {
    fetchArticles();
  }, []);
  return (
    <>
      <h1>{articles[0]?.title}</h1>
      <h2>{articles[0]?.body}</h2>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    articles: state.articles,
  };
};

export default {
  component: connect(mapStateToProps, { fetchArticles })(Post),
};
