// This types file is not exhaustive
// (normally generated via schema),
// it contains the types that are used in the queries folder
// and for the purpose of the search and listing components and tests ONLY
// ie. gnerating code creates allot of types that are not used in the app
// making it hard to read and understand the code

export type Movie = {
  id: string;
  title: string;
  overview: string;
  release_date: string;
  vote_average: number;
  credits: Credits;
};

export type Credits = {
  cast: Cast[];
};

export type Movies = Movie[];

export type Cast = {
  id: string;
};

// Person.cast in the API are Movies - annoying...
// see line 157 in src\queries\schema.graphql
export type Person = {
  id: string;
  cast: Movie[];
};

export type Persons = Person[];
