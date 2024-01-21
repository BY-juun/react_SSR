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

const loadData = (store, param) => {
  return store.dispatch(fetchArticles(param));
};

export default {
  component: connect(mapStateToProps, { fetchArticles })(Post),
  loadData,
};
