import axios from "axios";

export const FETCH_ARTICES = "fetch_articles";
export const fetchArticles = () => async (dispatch) => {
  const url = "https://jsonplaceholder.typicode.com/posts/";
  const res = await axios.get(url);
  dispatch({
    type: FETCH_ARTICES,
    payload: res.data,
  });
};
