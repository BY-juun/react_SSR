import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchArticles } from "../actions";
import { Link } from "react-router-dom";

const Home = ({ articles, fetchArticles }: any) => {
  useEffect(() => {
    fetchArticles();
  }, []);

  if (!articles.results) {
    return "No Data";
  }

  return (
    <>
      {articles.results.map((movie: any) => (
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

const mapStateToProps = (state: any) => {
  return {
    articles: state.articles,
  };
};

const loadData = (store: any) => {
  return store.dispatch(fetchArticles());
};

export default {
  component: connect(mapStateToProps, { fetchArticles })(Home),
  loadData,
};
