import { fetchPopularMovies } from 'api';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Title, List, FilmLink, Item, Img, FilmTitle } from './HomePage.styled';

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
              <Img
                src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
                alt={movie.title || movie.name}
                width="240px"
              />
              <FilmTitle>{movie.title || movie.name}</FilmTitle>
            </FilmLink>
          </Item>
        ))}
      </List>
    </div>
  );
};

export default HomePage;
