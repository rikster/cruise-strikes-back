import React from "react";

type Movies = {
  id: string;
  title: string;
}[];

interface SearchTomCruiseMoviesProps {
  movies: Movies[];
}

const SearchTomCruiseMovies: React.FC<SearchTomCruiseMoviesProps> = ({
  movies,
}) => (
  <div className="mt-4">
    <h2 className="text-xl font-bold mb-2">Movies:</h2>
    {movies.map((movie: any) => (
      <div key={movie.id} className="bg-white p-4 rounded-lg shadow-lg mb-4">
        <h3 className="text-lg font-semibold">{movie.title}</h3>
      </div>
    ))}
  </div>
);

export default SearchTomCruiseMovies;
