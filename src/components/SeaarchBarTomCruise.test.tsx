/* eslint-disable testing-library/prefer-screen-queries */
// Import necessary testing and your components
import React from "react";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import { MockedProvider } from "@apollo/client/testing";

import SearchBar from "./SearchBarTomCruise";
import SearchTomCruiseMovies from "./SearchTomCruiseMovies";
import AllTomCruiseMovies from "./AllTomCruiseMovies";
import { SEARCH_MOVIES, SEARCH_PERSON } from "../queries/queries";

// Tests for SearchTomCruiseMovies
describe("SearchTomCruiseMovies", () => {
  it("renders correctly", () => {
    const movies = [{ id: "1", title: "Test Movie" }];
    const { getByText } = render(<SearchTomCruiseMovies movies={movies} />);
    expect(getByText("Movies:")).toBeInTheDocument();
    expect(getByText("Test Movie")).toBeInTheDocument();
  });
});

// Tests for AllTomCruiseMovies
describe("AllTomCruiseMovies", () => {
  it("renders correctly", () => {
    const persons = [{ id: "1", cast: [{ id: "1", title: "Test Movie" }] }];
    const { getByText } = render(<AllTomCruiseMovies persons={persons} />);
    expect(getByText("Movies:")).toBeInTheDocument();
    expect(getByText("Test Movie")).toBeInTheDocument();
  });
});

// Mocks for useLazyQuery
const mocks = [
  {
    request: {
      query: SEARCH_MOVIES,
      variables: { query: "test", page: 1 },
    },
    result: {
      data: { searchMovies: { results: [{ id: "1", title: "Test Movie" }] } },
    },
  },
  {
    request: {
      query: SEARCH_PERSON,
      variables: { query: "Tom Cruise", page: 1 },
    },
    result: {
      data: {
        searchPerson: { results: [{ id: "1", title: "Test Movie" }] },
      },
    },
  },
];

// Tests for SearchBar
describe("SearchBar", () => {
  it("renders correctly", () => {
    const { getByPlaceholderText } = render(
      <MockedProvider mocks={mocks} addTypename={false}>
        <SearchBar />
      </MockedProvider>
    );
    expect(
      getByPlaceholderText("Search Tom Cruise movies")
    ).toBeInTheDocument();
  });

  it("updates on change", () => {
    const { getByPlaceholderText } = render(
      <MockedProvider mocks={mocks} addTypename={false}>
        <SearchBar />
      </MockedProvider>
    );

    const input = getByPlaceholderText(
      "Search Tom Cruise movies"
    ) as HTMLInputElement;
    fireEvent.change(input, { target: { value: "test" } });
    expect(input.value).toBe("test");
  });
});
