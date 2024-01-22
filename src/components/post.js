import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchArticles } from "../actions";
import { useParams } from "react-router-dom";

export const Post = ({ articles, fetchArticles }) => {
  const { id } = useParams();
  useEffect(() => {
    fetchArticles(id);
  }, [id]);

  return (
    <>
      <h1>{articles.title}</h1>
      <p>{articles.overview}</p>
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
