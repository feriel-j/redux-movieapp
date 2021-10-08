import React from "react";
import { useSelector } from "react-redux";
import MovieCard from "./MovieCard";
import Filter from "./Filter";

const MovieList = () => {
  const movies = useSelector((state) => state.movie.item);
  console.log(movies);
  return (
    <div className="movie-screen">
      <Filter />
      <div className="movie-list">
        {movies.map((movie) => <MovieCard movie={movie} />).reverse()}
      </div>
    </div>
  );
};

export default MovieList;
