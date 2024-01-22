import { API_KEY } from "../env";

const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${API_KEY}`,
  },
};

export const FETCH_ARTICES = "fetch_articles";
export const fetchArticles = (movieId) => async (dispatch) => {
  let url;

  if (!movieId) {
    url = "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1";
  } else {
    url = `https://api.themoviedb.org/3/movie/${movieId}?language=en-US`;
  }

  const res = await fetch(url, options);
  const json = await res.json();

  dispatch({
    type: FETCH_ARTICES,
    payload: json,
  });
};
