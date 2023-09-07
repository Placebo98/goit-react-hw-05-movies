import { fetchMoviesByID } from 'api';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export const OneMoviePage = () => {
  const [movie, setMovie] = useState();

  const { movieId } = useParams();

  // useEffect(() => {
  //   const getMovieCard = async () => {
  //     const oneMovie = await fetchMoviesByID(movieId);
  //     setMovie(oneMovie);
  //     console.log(oneMovie);
  //   };
  //   getMovieCard();
  // }, [movieId]);

  useEffect(() => {
    async function getMovieCard() {
      try {
        const oneMovie = await fetchMoviesByID(movieId);
        setMovie(oneMovie);
      } catch (error) {
        console.log(error);
      }
    }

    getMovieCard();
  }, [movieId]);

  return <div>тут буде картка фільму</div>;
};
