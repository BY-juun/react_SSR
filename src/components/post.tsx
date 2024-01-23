import React, { useEffect } from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet";
import { MovieType } from "../types";
import { fetchMovieDetail } from "../actions";

interface Props {
  movie: MovieType;
  fetchMovieDetail: (movieId: string) => Promise<void>;
}

export const Post = ({ movie, fetchMovieDetail }: Props) => {
  const { id } = useParams();

  useEffect(() => {
    fetchMovieDetail(id || "");
  }, [id]);

  return (
    <>
      <Helmet>
        <title>{movie?.title}</title>
        <meta name="description" content={movie?.overview}></meta>
      </Helmet>
      <h1>{movie.title}</h1>
      <p>{movie.overview}</p>
    </>
  );
};

const mapStateToProps = (state: any) => {
  return {
    movie: state.movie,
  };
};

const loadData = (store: any, param: string) => {
  return store.dispatch(fetchMovieDetail(param));
};

export default {
  component: connect(mapStateToProps, { fetchMovieDetail })(Post),
  loadData,
};
