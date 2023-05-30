import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { MockedProvider } from "@apollo/client/testing";
import { SEARCH_MOVIES, SEARCH_PERSON } from "../../queries/queries";
import SearchBar from "./SearchBar";

const mocks = [
  {
    request: {
      query: SEARCH_MOVIES,
      variables: { query: "Top Gun", page: 1 },
    },
    result: {
      data: {
        searchMovies: {
          results: [
            {
              id: "1",
              title: "Top Gun",
              overview: "Top Gun is about pilots in the Navy...",
              release_date: "1986-05-16",
              vote_average: 7.2,
              credits: {
                cast: [
                  {
                    id: "500", // Tom Cruise's ID
                    name: "Tom Cruise",
                  },
                ],
              },
            },
          ],
        },
      },
    },
  },
  {
    request: {
      query: SEARCH_PERSON,
      variables: { query: "Tom Cruise", page: 1 },
    },
    result: {
      data: {
        searchPerson: {
          results: [
            {
              id: "1",
              cast: [
                {
                  id: "1",
                  title: "Top Gun",
                  overview: "Top Gun is about pilots in the Navy...",
                  release_date: "1986-05-16",
                  vote_average: 7.2,
                },
              ],
            },
          ],
        },
      },
    },
  },
];

describe("SearchBar", () => {
  it("renders without error", () => {
    render(
      <MockedProvider mocks={mocks} addTypename={false}>
        <SearchBar />
      </MockedProvider>
    );
  });

  it("renders input field correctly", () => {
    render(
      <MockedProvider mocks={mocks} addTypename={false}>
        <SearchBar />
      </MockedProvider>
    );
    expect(
      screen.getByPlaceholderText("Search Tom Cruise movies")
    ).toBeInTheDocument();
  });

  it("displays movie data correctly when Search button is clicked", async () => {
    render(
      <MockedProvider mocks={mocks} addTypename={false}>
        <SearchBar />
      </MockedProvider>
    );

    fireEvent.change(screen.getByPlaceholderText("Search Tom Cruise movies"), {
      target: { value: "Top Gun" },
    });
    fireEvent.click(screen.getByText("Search"));

    expect(await screen.findByText("Top Gun")).toBeInTheDocument();
  });
});
