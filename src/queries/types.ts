// This types file is not exhaustive
// (normally generated via server code and schema),
// it contains the types that are used in the queries folder
// and for the purpose of the search and listing components and tests

//note Cast in Movie = Cast
export type Movie = {
  id: string;
  title: string;
  overview: string;
  release_date: string;
  vote_average: number;
  // credits {
  //   cast {
  //     id
  //     name
  //   }
};

export type Movies = Movie[];

//note Cast in Person = Movie
export type Cast = {
  id: string;
  title: string;
  overview: string;
  release_date: string;
  vote_average: number;
};

export type Person = {
  id: string;
  cast: Cast[];
};

export type Persons = Person[];
