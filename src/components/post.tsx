import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchArticles } from "../actions";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet";

export const Post = ({ articles, fetchArticles }: any) => {
  const { id } = useParams();
  useEffect(() => {
    fetchArticles(id);
  }, [id]);

  return (
    <>
      <Helmet>
        <title>{articles?.title}</title>
        <meta name="description" content={articles?.overview}></meta>
      </Helmet>
      <h1>{articles.title}</h1>
      <p>{articles.overview}</p>
    </>
  );
};

const mapStateToProps = (state: any) => {
  return {
    articles: state.articles,
  };
};

const loadData = (store: any, param: string) => {
  return store.dispatch(fetchArticles(param));
};

export default {
  component: connect(mapStateToProps, { fetchArticles })(Post),
  loadData,
};