import { fetchMoviesByID } from 'api';
import Cast from 'components/Cast/Cast';
import Reviews from 'components/Reviews/Reviews';
import { useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';

import {
  BackButton,
  CastReviewsContainer,
  ItemLink,
  List,
  FilmInfoContainer,
  FilmWrapper,
  SingleFilmDataContainer,
} from './OneMoviePage.styled';

export const defaultImg =
  '<https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700>';

const OneMoviePage = () => {
  const [movie, setMovie] = useState({});
  const [showCast, setShowCast] = useState(false);
  const [showReviews, setShowReviews] = useState(false);
  const { id } = useParams();
  const location = useLocation();

  useEffect(() => {
    async function getMovieCard() {
      try {
        const oneMovie = await fetchMoviesByID(id);
        setMovie(oneMovie);
      } catch (error) {
        console.log(error);
      }
    }

    getMovieCard();
  }, [id]);

  const goBackLink = location?.state?.from ?? '/';

  return (
    <div>
      <BackButton to={goBackLink}> Go Back</BackButton>
      <SingleFilmDataContainer>
        <FilmWrapper>
          <img
            src={
              movie.poster_path
                ? `https://image.tmdb.org/t/p/w300${movie.poster_path}`
                : defaultImg
            }
            width={250}
            alt="poster"
          />
        </FilmWrapper>
        <FilmInfoContainer>
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
        </FilmInfoContainer>
      </SingleFilmDataContainer>

      <hr />
      <CastReviewsContainer>
        <h3>Additional information</h3>
        <List>
          <li>
            <ItemLink
              to={`/movies/${id}/cast`}
              onClick={() => {
                setShowCast(true);
                setShowReviews(false);
              }}
            >
              Cast
            </ItemLink>
          </li>
          <li>
            <ItemLink
              to={`/movies/${id}/reviews`}
              onClick={() => {
                setShowReviews(true);
                setShowCast(false);
              }}
            >
              Reviews
            </ItemLink>
          </li>
          <ItemLink
            onClick={() => {
              setShowReviews(false);
              setShowCast(false);
            }}
          >
            {' '}
            Closse All
          </ItemLink>
        </List>
        <hr />
      </CastReviewsContainer>
      {showCast && <Cast id={id} />}
      {showReviews && <Reviews id={id} />}
    </div>
  );
};

export default OneMoviePage;
