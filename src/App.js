import { useEffect } from "react";

const API_URL = "http://www.omdbapi.com?apikey=cf3e64b0";

const App = () => {
  const searchMovies = async (title) => {
    try {
      const response = await fetch(`${API_URL}&s=${title}`);
      const data = await response.json();

      console.log(data.Search);
    } catch (error) {
      console.error("Error fetching movies:", error); 
    }
  };
  
  useEffect(() => {
    searchMovies('Spiderman');
  }, []);

  return <h1>App</h1>;
};

export default App;
