import React from "react";
import { render, screen } from "@testing-library/react";
import ListAllMovies from "./ListAllMovies";
import { Persons } from "../../../queries/types";

describe("AllTomCruiseMovies", () => {
  test("renders movie data correctly", () => {
    const mockPersons: Persons = [
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
          {
            id: "2",
            title: "Mission Impossible",
            overview: "Mission Impossible is about a secret agent...",
            release_date: "1996-05-22",
            vote_average: 7.1,
          },
        ],
      },
    ];

    render(<ListAllMovies persons={mockPersons} />);

    mockPersons.forEach((person) => {
      person.cast.forEach((movie) => {
        const releaseDate = new Date(movie.release_date);
        const formattedDate = `${releaseDate
          .getDate()
          .toString()
          .padStart(2, "0")}-${(releaseDate.getMonth() + 1)
          .toString()
          .padStart(2, "0")}-${releaseDate.getFullYear()}`;

        const titleElement = screen.getByRole("heading", { name: movie.title });
        expect(titleElement).toBeInTheDocument();

        const overviewElement = screen.getByText(movie.overview);
        expect(overviewElement).toBeInTheDocument();

        const dateElement = screen.getByText(`Release Date: ${formattedDate}`);
        expect(dateElement).toBeInTheDocument();

        const voteElement = screen.getByText(
          `Vote Average: ${movie.vote_average.toFixed(2)}`
        );
        expect(voteElement).toBeInTheDocument();
      });
    });
  });
});
