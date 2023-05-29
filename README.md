# Cruise Strikes Back

![Cruisey](https://media.giphy.com/media/D16XHdsB1PBxm/giphy.gif)

## The Scenario

John Johnson hosts a weekly movie event with his local Tom Cruise Fan club called "John Johnsons Cruisey Movie Monday". He's asked you to build a website where he can either search for a specific movie or display a list of Tom Cruise's movies for his audience to select from.

## To-do

1. Read the above for what's needed
2. Setup your react project.
3. Build a search component that connects to a graphql endpoint https://tmdb-one-blue.vercel.app/ and can either search for a specific movie or display a list to match the criteria above

## Tech details

### Endpoints

- GraphQL Endpoint: https://tmdb-one-blue.vercel.app/
- GraphQL Playground: https://www.graphqlbin.com/v2/new (enter endpoint above)
- GraphQL Schema

```
src\queries\schema.graphql
```

### Tech Stack

- Front End Framework
  - Scaffolded with [create-react-app](https://create-react-app.dev/)
    - Prefer [Vite](https://vitejs.dev/) for Speed
    - However, React testing is not built-in (time consuming to setup)
  - React + TypeScript
- Data Access
  - GraphQL Queries
  - Apollo GraphQL Client
- Testing
  - Jest
- Styling
  - CSSTailwind

## This project was bootstrapped with Create React App

[Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

## `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

## `npm test`

Launches the test runner in the interactive watch mode.\
