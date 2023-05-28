import React from "react";

type Cast = {
  id: string;
  title: string;
  overview: string;
  release_date: string;
  vote_average: number;
};

type Person = {
  id: string;
  cast: Cast[];
};

type Persons = Person[];

interface AllTomCruiseMoviesProps {
  persons: Persons;
}

const AllTomCruiseMovies: React.FC<AllTomCruiseMoviesProps> = ({ persons }) => (
  <div className="mt-4">
    <h2 className="text-xl font-bold mb-2">Movies:</h2>
    {persons.map((person: Person) => (
      <div key={person.id}>
        {person.cast.map((movie: Cast) => {
          //format release date in pure js (could use moment.js)
          const releaseDate = new Date(movie.release_date);
          const formattedDate = `${releaseDate
            .getDate()
            .toString()
            .padStart(2, "0")}-${(releaseDate.getMonth() + 1)
            .toString()
            .padStart(2, "0")}-${releaseDate.getFullYear()}`;
          return (
            <div
              key={movie.id}
              className="bg-white p-4 rounded-lg shadow-lg mb-4"
            >
              <h3 className="text-lg font-semibold">{movie.title}</h3>
              <p>{movie.overview}</p>
              <p>Release Date: {formattedDate}</p>
              <p>Vote Average: {movie.vote_average.toFixed(2)}</p>
            </div>
          );
        })}
      </div>
    ))}
  </div>
);

export default AllTomCruiseMovies;
