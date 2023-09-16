import { fetchCastbyId } from 'api';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export const Cast = () => {
  // const { id } = useParams();
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);
  // const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function getCast() {
      try {
        const fetchCast = await fetchCastbyId(movieId);
        console.log(fetchCast);
        setCast(fetchCast);
      } catch (error) {
        console.log(error);
      }
    }
    getCast();
  }, [movieId]);

  //   return (
  //     <div>
  //       <ul>{}</ul>
  //     </div>
  //   );
};
