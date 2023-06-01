import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import SearchBar from "./searchBar/SearchBar";

const client = new ApolloClient({
  uri: "https://tmdb-one-blue.vercel.app/",
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="min-h-screen bg-gray-200 flex items-center justify-center">
        <div className="bg-white p-10 rounded-lg shadow-2xl w-9/12 md:w-4/6 lg:w-6/12 xl:w-6/12 xxl:w-5/12">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 text-gray-700 text-center">
            John Johnsons Cruisey Movie Monday
          </h1>
          <div className="mt-8">
            <SearchBar />
          </div>
        </div>
      </div>
    </ApolloProvider>
  );
}

export default App;
