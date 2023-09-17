import { useEffect, useState } from 'react';
import { useSearchParams, useLocation } from 'react-router-dom';
import Notiflix from 'notiflix';
import { fetchMoviesByQuery } from 'api';
import { defaultImg } from 'Pages/OneMoviePage/OneMoviePage';
import { List, FilmLink, Item, Img, FilmTitle } from './Movies.styled';

const { SearchBar } = require('components/Searchbar/Searchbar');

const MoviesPage = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query');
  //   const [query, setQuery] = useState('');

  const location = useLocation();

  const changeQuery = newQuery => {
    if (newQuery === query) {
      return Notiflix.Notify.failure('Потрібні параметри пошуку');
    }
    setSearchParams({ query: newQuery });
    setMovies([]);
  };

  useEffect(() => {
    if (!query) return;

    const fetchMovies = async () => {
      try {
        const getMovies = await fetchMoviesByQuery(query);
        if (getMovies.length === 0) {
          return Notiflix.Notify.failure('таких фільмів не знайдено');
        } else {
          setMovies(getMovies);
          // console.log(getMovies);
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchMovies();
  }, [query]);

  return (
    <div>
      <div>
        <SearchBar onSubmit={changeQuery} />
      </div>
      <div>
        <List>
          {movies.map(movie => (
            <Item key={movie.id}>
              <FilmLink to={`/movies/${movie.id}`} state={{ from: location }}>
                <FilmTitle>{movie.title || movie.name}</FilmTitle>
                <Img
                  src={
                    movie.poster_path
                      ? `https://image.tmdb.org/t/p/w300${movie.poster_path}`
                      : defaultImg
                  }
                  alt={movie.title || movie.name}
                  width="240px"
                />
              </FilmLink>
            </Item>
          ))}
        </List>
      </div>
    </div>
  );
};

export default MoviesPage;
