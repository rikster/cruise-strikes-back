import { render, screen } from "@testing-library/react";
import { Movie, Person, Persons } from "../../../queries/types";
import ListAllMovies from "./ListAllMovies";

describe("ListAllMovies", () => {
  test("renders movie data correctly", () => {
    const mockData: Persons = [
      {
        id: "1",
        cast: [
          {
            id: "101",
            title: "Movie Title",
            overview: "Movie Overview",
            release_date: "2022-02-20",
            vote_average: 8.1,
            credits: {
              cast: [{ id: "500" }],
            },
          },
          {
            id: "102",
            title: "Another Movie Title",
            overview: "Another Movie Overview",
            release_date: "2022-01-20",
            vote_average: 7.2,
            credits: {
              cast: [{ id: "500" }],
            },
          },
        ],
      },
    ];

    render(<ListAllMovies persons={mockData} />);

    mockData.forEach((person: Person) => {
      person.cast.forEach((movie: Movie) => {
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
