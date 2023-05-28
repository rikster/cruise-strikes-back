import React from "react";
import { render, screen } from "@testing-library/react";
import SearchTomCruiseMovies from "./SearchTomCruiseMovies";

describe("SearchTomCruiseMovies", () => {
  test("renders movie data correctly", () => {
    const mockMovies = [
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
    ];

    render(<SearchTomCruiseMovies movies={mockMovies} />);

    const firstMovieTitle = screen.getByRole("heading", { name: /Top Gun/i });
    expect(firstMovieTitle).toBeInTheDocument();

    const firstMovieOverview = screen.getByText(
      /Top Gun is about pilots in the Navy.../i
    );
    expect(firstMovieOverview).toBeInTheDocument();

    const firstMovieReleaseDate = screen.getByText(/Release Date: 16-05-1986/i);
    expect(firstMovieReleaseDate).toBeInTheDocument();

    const firstMovieVoteAverage = screen.getByText(/Vote Average: 7.20/i);
    expect(firstMovieVoteAverage).toBeInTheDocument();

    const secondMovieTitle = screen.getByRole("heading", {
      name: /Mission Impossible/i,
    });
    expect(secondMovieTitle).toBeInTheDocument();

    const secondMovieOverview = screen.getByText(
      /Mission Impossible is about a secret agent.../i
    );
    expect(secondMovieOverview).toBeInTheDocument();

    const secondMovieReleaseDate = screen.getByText(
      /Release Date: 22-05-1996/i
    );
    expect(secondMovieReleaseDate).toBeInTheDocument();

    const secondMovieVoteAverage = screen.getByText(/Vote Average: 7.10/i);
    expect(secondMovieVoteAverage).toBeInTheDocument();
  });
});
