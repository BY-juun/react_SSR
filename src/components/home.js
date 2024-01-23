import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchArticles } from "../actions";
import { Link } from "react-router-dom";

const Home = ({ articles, fetchArticles }) => {
  useEffect(() => {
    fetchArticles();
  }, []);

  if (!articles.results) {
    return "No Data";
  }

  return (
    <>
      {articles.results.map((movie) => (
        <div key={movie.id}>
          <Link to={`/post/${movie.id}`}>
            <h2>{movie.title}</h2>
          </Link>
          <p>{movie.overview}</p>
          <br />
        </div>
      ))}
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    articles: state.articles,
  };
};

const loadData = (store) => {
  return store.dispatch(fetchArticles());
};

export default {
  component: connect(mapStateToProps, { fetchArticles })(Home),
  loadData,
};
