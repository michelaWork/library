import { useEffect } from "react";

// dcb8b442

const API_URL = "http://www.omdbapi.com?apikey=dcb8b442";

const App = () => {
  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();

    console.log(data)
  };

  useEffect(() => {}, []);

  return (
    <>
      <h1>App</h1>
    </>
  );
};

export default App;
