import React, { useState, useRef, useEffect } from "react";
import { useLazyQuery } from "@apollo/client";
import { SEARCH_MOVIES, SEARCH_PERSON } from "../../queries/queries";
import SearchMovies from "./searchAllMovies/SearchMovies";
import ListAllMovies from "./listAllMovies/ListAllMovies";

//fetch from APIs
const TOM_CRUISE_ID = "500";
const TOM_CRUISE_NAME = "Tom Cruise";

const SearchBar: React.FC = () => {
  const [input, setInput] = useState("");
  const [lastAction, setLastAction] = useState<"search" | "listAll" | null>(
    null
  );
  const inputRef = useRef<HTMLInputElement>(null);

  const [
    searchMovies,
    { data: moviesData, loading: moviesLoading, error: moviesError },
  ] = useLazyQuery(SEARCH_MOVIES);

  const [
    searchPerson,
    { data: personData, loading: personLoading, error: personError },
  ] = useLazyQuery(SEARCH_PERSON);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const handleSearch = () => {
    setLastAction("search");
    searchMovies({ variables: { query: input, page: 1 } });
  };

  const handleListAll = () => {
    setInput("");
    inputRef.current?.focus();
    setLastAction("listAll");
    searchPerson({ variables: { query: TOM_CRUISE_NAME, page: 1 } });
  };

  const movieResults = moviesData?.searchMovies.results || [];
  const tomCruiseMovies = movieResults.filter((movie: any) =>
    movie.credits.cast.some((cast: any) => cast.id === TOM_CRUISE_ID)
  );

  const personResults = personData?.searchPerson.results || [];
  const allTomCruiseMovies = personResults.map((actor: any) => {
    return {
      ...actor,
      cast: actor.cast.filter((movie: any) => movie.title !== null),
    };
  });

  const isLoading = moviesLoading || personLoading;

  return (
    <div className="container mx-auto px-4 sm:px-0.5">
      <div className="flex flex-col sm:flex-row items-center bg-slate-100 rounded-lg shadow-lg p-2 mb-4">
        <input
          ref={inputRef}
          type="text"
          placeholder="Search Tom Cruise movies"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={(e) => {
            if (e.key === "Enter") {
              handleSearch();
            }
          }}
          className="flex-grow px-2 py-1 rounded-lg focus:outline-none w-full sm:w-auto"
        />
        <button
          onClick={handleSearch}
          className="bg-blue-500 text-white px-4 py-2 rounded-lg mt-2 sm:mt-0 sm:ml-2 w-full sm:w-auto"
          disabled={isLoading}
        >
          Search
        </button>
        <button
          onClick={handleListAll}
          className="bg-blue-500 text-white px-4 py-2 rounded-lg mt-2 sm:mt-0 sm:ml-2 w-full sm:w-auto"
          disabled={isLoading}
        >
          List All
        </button>
      </div>

      {moviesLoading ? (
        <p>Searching movies...</p>
      ) : moviesError ? (
        <p>
          Error occurred while fetching movie search data: {moviesError.message}
        </p>
      ) : lastAction === "search" && tomCruiseMovies.length > 0 ? (
        <SearchMovies movies={tomCruiseMovies} />
      ) : null}

      {personLoading ? (
        <p>Loading all movies...</p>
      ) : personError ? (
        <p>
          Error occurred while fetching all movie data: {personError.message}
        </p>
      ) : lastAction === "listAll" && allTomCruiseMovies.length > 0 ? (
        <ListAllMovies persons={allTomCruiseMovies} />
      ) : null}
    </div>
  );
};

export default SearchBar;
