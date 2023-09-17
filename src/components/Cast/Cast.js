import { defaultImg } from 'Pages/OneMoviePage/OneMoviePage';
import { fetchCastById } from 'api';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import {
  CastContainer,
  CastList,
  CastItem,
  CastImg,
  CastItemActorName,
  CastItemCharacterName,
} from './Cast.styled';

const Cast = () => {
  const { id } = useParams();
  const [cast, setCast] = useState([]);

  useEffect(() => {
    async function getCast() {
      try {
        const fetchCast = await fetchCastById(id);
        setCast(fetchCast);
      } catch (error) {
        console.log(error);
      }
    }
    getCast();
  }, [id]);

  return (
    <CastContainer>
      <CastList>
        {cast?.cast?.map(person => (
          <CastItem key={person.id}>
            <CastImg
              src={
                person.profile_path
                  ? `https://image.tmdb.org/t/p/w200${person.profile_path}`
                  : defaultImg
              }
              width={200}
              alt={person.name}
            ></CastImg>
            <CastItemActorName>{person.name}</CastItemActorName>
            <CastItemCharacterName>
              Character: {person.character}
            </CastItemCharacterName>
          </CastItem>
        ))}
      </CastList>
    </CastContainer>
  );
};

export default Cast;
