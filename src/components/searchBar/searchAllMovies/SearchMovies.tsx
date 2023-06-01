import React from "react";
import { Movie, Movies } from "../../../queries/types";
import MovieItem from "../common/MovieItem";

interface SearchTomCruiseMoviesProps {
  movies: Movies;
}

const SearchMovies: React.FC<SearchTomCruiseMoviesProps> = ({ movies }) => (
  <div className="mt-4">
    <h2 className="text-xl font-bold mb-2">Movie Search Results:</h2>
    {movies.map((movie: Movie) => (
      <MovieItem key={movie.id} movie={movie} />
    ))}
  </div>
);

export default SearchMovies;
