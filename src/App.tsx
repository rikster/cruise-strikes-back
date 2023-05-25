import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

const client = new ApolloClient({
  uri: "https://tmdb-one-blue.vercel.app/",
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <h1 className="text-3xl font-bold underline">
        John Johnsons Cruisey Movie Monday
      </h1>
    </ApolloProvider>
  );
}

export default App;
