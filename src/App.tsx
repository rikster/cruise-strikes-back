import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import SearchBarTomCruise from "./components/SearchBarTomCruise";

const client = new ApolloClient({
  uri: "https://tmdb-one-blue.vercel.app/",
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="min-h-screen bg-gray-200 flex items-center justify-center">
        <div className="bg-white p-10 rounded-lg shadow-2xl w-5/6 md:w-4/5 lg:w-4/5 xl:w-3/4 xxl:w-3/4">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 text-gray-700 text-center">
            John Johnsons Cruisey Movie Monday
          </h1>
          <div className="mt-8">
            <SearchBarTomCruise />
          </div>
        </div>
      </div>
    </ApolloProvider>
  );
}

export default App;
