import { fetchMoviesByID } from 'api';
import { Cast } from 'components/Cast/Cast';
import { Reviews } from 'components/Reviews/Reviews';
import { useEffect, useState } from 'react';
import { Link, useLocation, useParams } from 'react-router-dom';

export const defaultImg =
  '<https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700>';

export const OneMoviePage = () => {
  const [movie, setMovie] = useState({});
  const [showCast, setShowCast] = useState(false);
  const [showReviews, setShowReviews] = useState(false);
  const { movieId } = useParams();

  const { id } = useParams();

  const location = useLocation();

  useEffect(() => {
    async function getMovieCard() {
      try {
        const oneMovie = await fetchMoviesByID(id);
        setMovie(oneMovie);
        // console.log(oneMovie);
      } catch (error) {
        console.log(error);
      }
    }

    getMovieCard();
  }, [id]);
  // console.log(movie);

  const goBackLink = location?.state?.from ?? '/';

  return (
    <div>
      <Link to={goBackLink}> Go Back</Link>
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
      <div>
        <h3>Additional information</h3>
        <ul>
          <li>
            <Link
              to={`/movies/${id}/cast`}
              onClick={() => {
                setShowCast(true);
                setShowReviews(false);
              }}
            >
              Cast
            </Link>
          </li>
          <li>
            <Link
              to={`/movies/${id}/reviews`}
              onClick={() => {
                setShowReviews(true);
                setShowCast(false);
              }}
            >
              Reviews
            </Link>
            <button
              type="button"
              onClick={() => {
                setShowReviews(false);
                setShowCast(false);
              }}
            >
              {' '}
              Closse All
            </button>
          </li>
        </ul>
        {showCast && <Cast id={id} />}
        {showReviews && <Reviews id={id} />}
      </div>
    </div>
  );
};
