/* eslint-disable testing-library/prefer-find-by */
/* eslint-disable testing-library/prefer-screen-queries */
import React from "react";
import { render, fireEvent, waitFor } from "@testing-library/react";
import { MockedProvider } from "@apollo/client/testing";

import SearchBar from "./SearchBar";
import { SEARCH_MOVIES, SEARCH_PERSON } from "../../queries/queries";

const movieMock = {
  request: {
    query: SEARCH_MOVIES,
    variables: {
      query: "test",
      page: 1,
    },
  },
  result: {
    data: {
      searchMovies: {
        results: [
          {
            id: "1",
            title: "Test Movie",
            overview: "This is a test movie.",
            release_date: "2022-01-01",
            vote_average: 7.5,
            poster_path: "",
            backdrop_path: "",
            credits: {
              cast: [
                {
                  id: "500",
                },
              ],
            },
          },
        ],
      },
    },
  },
};

const personMock = {
  request: {
    query: SEARCH_PERSON,
    variables: {
      query: "Tom Cruise",
      page: 1,
    },
  },
  result: {
    data: {
      searchPerson: {
        results: [
          {
            id: "500",
            name: "Tom Cruise",
            cast: [
              {
                id: "1",
                title: "Test Movie",
                overview: "This is a test movie.",
                release_date: "2022-01-01",
                vote_average: 7.5,
                poster_path: "",
                backdrop_path: "",
              },
            ],
          },
        ],
      },
    },
  },
};

describe("SearchBar", () => {
  it("renders without error", () => {
    render(
      <MockedProvider mocks={[]} addTypename={false}>
        <SearchBar />
      </MockedProvider>
    );
  });

  it("renders movie results on search", async () => {
    const { getByPlaceholderText, getByText } = render(
      <MockedProvider mocks={[movieMock]} addTypename={false}>
        <SearchBar />
      </MockedProvider>
    );

    fireEvent.change(getByPlaceholderText("Search Tom Cruise movies"), {
      target: { value: "test" },
    });
    fireEvent.click(getByText("Search"));

    await waitFor(() => getByText("Test Movie"));
  });

  it("renders person results on list all", async () => {
    const { getByText } = render(
      <MockedProvider mocks={[personMock]} addTypename={false}>
        <SearchBar />
      </MockedProvider>
    );

    fireEvent.click(getByText("List All"));

    await waitFor(() => getByText("Test Movie"));
  });
});
