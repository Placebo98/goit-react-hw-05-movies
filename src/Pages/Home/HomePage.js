import { fetchPopularMovies } from 'api';
import { useEffect, useState } from 'react';

const HomePage = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const getMovies = async () => {
      setMovies(await fetchPopularMovies());
    };

    getMovies();
  }, []);
  console.log(fetchPopularMovies());
  return (
    <div>
      <h1>Trending Today</h1>
      <ul>
        {movies.map(movie => (
          <li key={movie.id}>
            <h2>{movie.name}</h2>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HomePage;
