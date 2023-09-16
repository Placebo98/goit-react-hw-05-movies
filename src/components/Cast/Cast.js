import { defaultImg } from 'Pages/OneMoviePage/OneMoviePage';
import { fetchCastById } from 'api';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export const Cast = () => {
  const { id } = useParams();
  const [cast, setCast] = useState([]);

  useEffect(() => {
    async function getCast() {
      try {
        const fetchCast = await fetchCastById(id);
        setCast(fetchCast);
        console.log(fetchCast);
      } catch (error) {
        console.log(error);
      }
    }
    getCast();
  }, [id]);

  return (
    <div>
      <ul>
        {cast?.cast?.map(person => (
          <li key={person.id}>
            <img
              src={
                person.profile_path
                  ? `https://image.tmdb.org/t/p/w200${person.profile_path}`
                  : defaultImg
              }
              width={200}
              alt={person.name}
            ></img>
            <p>{person.name}</p>
            <p>Character: {person.character}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};
