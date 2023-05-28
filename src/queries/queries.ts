import { gql } from "@apollo/client";

export const SEARCH_PERSON = gql`
  query SearchPerson($query: String!, $page: Int) {
    searchPerson(query: $query, page: $page) {
      results {
        id
        name
        cast {
          id
          title
          overview
          release_date
          vote_average
        }
      }
    }
  }
`;

export const SEARCH_MOVIES = gql`
  query SearchMovies($query: String!, $page: Int) {
    searchMovies(query: $query, page: $page) {
      results {
        id
        title
        overview
        release_date
        vote_average
        credits {
          cast {
            id
          }
        }
      }
    }
  }
`;
