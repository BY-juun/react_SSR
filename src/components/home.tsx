import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { fetchMovieList } from "../actions";

const Home = () => {
  const [movieList, setMovieList] = useState([]);
  useEffect(() => {
    fetchMovieList().then((res) => setMovieList(res.results));
  }, []);

  if (movieList.length === 0) {
    return <div>No Data</div>;
  }

  return (
    <>
      {movieList.map((movie: any) => (
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

// const loadData = (store: any) => {
//   return store.dispatch(fetchArticles());
// };

export default {
  component: Home,
};
