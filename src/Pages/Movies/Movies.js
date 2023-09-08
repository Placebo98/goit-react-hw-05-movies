import { useEffect, useState } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import Notiflix from 'notiflix';
import { fetchMoviesByQuery } from 'api';

const { SearchBar } = require('components/Searchbar/Searchbar');

const MoviesPage = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query');
  //   const [query, setQuery] = useState('');

  const changeQuery = newQuery => {
    if (newQuery === query) {
      return Notiflix.Notify.failure('Потрібні параметри пошуку');
    }
    setSearchParams({ query: newQuery });
  };

  useEffect(() => {
    if (query === '') return;

    const fetchMovies = async () => {
      try {
        const getMovies = await fetchMoviesByQuery(query);
        if (getMovies.length === 0) {
          return Notiflix.Notify.failure('таких фільмів не знайдено');
        } else {
          setMovies(getMovies);
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
        <ul>
          {movies.map(movie => (
            <li key={movie.id}>
              <Link to={`/movies/${movie.id}`}>
                <h2>{movie.title || movie.name}</h2>
                <img
                  src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
                  alt={movie.title || movie.name}
                  width="240px"
                />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default MoviesPage;
