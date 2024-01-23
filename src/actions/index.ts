import { Dispatch } from "redux";
import { API_KEY } from "../env";

const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${API_KEY}`,
  },
};

export const FETCH_MOVIE_LIST = "FETCH_MOVIE_LIST";

export const FETCH_MOVIE_DETAIL = "FETCH_MOVIE_DETAIL";

export const fetchMovieList = async () => {
  const url =
    "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1";

  const res = await fetch(url, options);
  const json = await res.json();

  return json;
};

export const fetchMovieDetail =
  (movieId?: string) => async (dispatch: Dispatch) => {
    const url = `https://api.themoviedb.org/3/movie/${movieId}?language=en-US`;

    const res = await fetch(url, options);
    const json = await res.json();

    dispatch({
      type: FETCH_MOVIE_DETAIL,
      payload: json,
    });
  };
