import React from "react";
import { Movie } from "../../../queries/types";

interface MovieItemProps {
  movie: Movie;
}

const MovieItem: React.FC<MovieItemProps> = ({ movie }) => {
  //format release date in pure js (could use moment.js)
  const moviePoster = movie.backdrop_path
    ? `https://image.tmdb.org/t/p/w500${movie.backdrop_path}`
    : "no_image.gif";
  const releaseDate = new Date(movie.release_date);
  const formattedDate = `${releaseDate
    .getDate()
    .toString()
    .padStart(2, "0")}-${(releaseDate.getMonth() + 1)
    .toString()
    .padStart(2, "0")}-${releaseDate.getFullYear()}`;

  return (
    <div key={movie.id} className="bg-white p-4 rounded-lg shadow-lg mb-4">
      <h3 className="text-lg font-semibold">{movie.title}</h3>
      <div
        className="bg-poster bg-cover bg-center h-64 rounded-lg"
        style={{ backgroundImage: `url(${moviePoster})` }}
      />
      <p>{movie.overview}</p>
      <p>Release Date: {formattedDate}</p>
      <p>Vote Average: {movie.vote_average.toFixed(2)}</p>
    </div>
  );
};

export default MovieItem;
