import React from "react";

//note: persons.cast.title is a movie title
type Persons = {
  id: string;
  cast: {
    id: string;
    title: string;
  }[];
}[];

interface AllTomCruiseMoviesProps {
  persons: Persons[];
}

const AllTomCruiseMovies: React.FC<AllTomCruiseMoviesProps> = ({ persons }) => (
  <div className="mt-4">
    <h2 className="text-xl font-bold mb-2">Movies:</h2>
    {persons.map((person: any) => (
      <div key={person.id}>
        {person.cast.map((movie: any) => (
          <div
            key={movie.id}
            className="bg-white p-4 rounded-lg shadow-lg mb-4"
          >
            <h3 className="text-lg font-semibold">{movie.title}</h3>
          </div>
        ))}
      </div>
    ))}
  </div>
);

export default AllTomCruiseMovies;
