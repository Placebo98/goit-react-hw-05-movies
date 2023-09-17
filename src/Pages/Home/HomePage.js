import { fetchPopularMovies } from 'api';
import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Title, List, FilmLink, Item } from './HomePage.styled';

const HomePage = () => {
  const [movies, setMovies] = useState([]);
  const location = useLocation();

  useEffect(() => {
    const getMovies = async () => {
      const popularMovies = await fetchPopularMovies();
      setMovies(popularMovies);
    };
    getMovies();
  }, []);

  return (
    <div>
      <Title>Trending Today</Title>
      <List>
        {movies.map(movie => (
          <Item key={movie.id}>
            <FilmLink to={`/movies/${movie.id}`} state={{ from: location }}>
              <img
                src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
                alt={movie.title || movie.name}
                width="240px"
              />
              <h2>{movie.title || movie.name}</h2>
            </FilmLink>
          </Item>
        ))}
      </List>
    </div>
  );
};

export default HomePage;
