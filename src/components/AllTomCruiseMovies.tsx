import React from "react";

type Cast = {
  id: string;
  title: string;
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
        {person.cast.map((movie: Cast) => (
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
