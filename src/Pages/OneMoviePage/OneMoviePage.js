import { fetchMoviesByID } from 'api';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const defaultImg =
  '<https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700>';

export const OneMoviePage = () => {
  const [movie, setMovie] = useState({});

  const { id } = useParams();

  useEffect(() => {
    async function getMovieCard() {
      try {
        const oneMovie = await fetchMoviesByID(id);
        setMovie(oneMovie);
        console.log(oneMovie);
      } catch (error) {
        console.log(error);
      }
    }

    getMovieCard();
  }, [id]);
  console.log(movie);

  return (
    <div>
      <div>
        <img
          src={
            movie.poster_path
              ? `https://image.tmdb.org/t/p/w300${movie.poster_path}`
              : defaultImg
          }
          width={250}
          alt="poster"
        />
      </div>
      <div>
        <h2>{movie.title}</h2>
        <p>User score: {movie.vote_count}%</p>
        <h2>Owerview</h2>
        <p>{movie.overview}</p>
        <h2>Genres</h2>
        <p>
          {movie.genres
            ? movie.genres.map(genre => genre.name).join(', ')
            : 'Поля жанрів не заповнено'}
        </p>
      </div>
    </div>
  );
};
