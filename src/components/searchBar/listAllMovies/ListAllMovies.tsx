import React from "react";
import { Movie, Person, Cast, Persons } from "../../../queries/types";
import MovieItem from "../common/MovieItem";

interface AllTomCruiseMoviesProps {
  persons: Persons;
}

const ListAllMovies: React.FC<AllTomCruiseMoviesProps> = ({ persons }) => (
  <div className="mt-4">
    <h2 className="text-xl font-bold mb-2">All Movies List:</h2>
    {persons.map((person: Person) => (
      <div key={person.id}>
        {person.cast.map((movie: Movie) => (
          <MovieItem key={movie.id} movie={movie} />
        ))}
      </div>
    ))}
  </div>
);

export default ListAllMovies;
