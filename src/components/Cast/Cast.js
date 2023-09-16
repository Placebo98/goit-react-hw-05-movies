import { fetchCastById } from 'api';
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
        const fetchCast = await fetchCastById(movieId);
        console.log(fetchCast);
        setCast(fetchCast);
      } catch (error) {
        console.log(error);
      }
    }
    getCast();
  }, [movieId]);

  return (
    <div>
      <ul>
        {cast.map(person => (
          <li key={person.id}>{person.name}</li>
        ))}
      </ul>
    </div>
  );
};

// import { fetchCastById } from 'api';
// import { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';

// export const Cast = () => {
//   const { id } = useParams();
//   const [cast, setCast] = useState([]);
//   const [loading, setLoading] = useState(false);

//   useEffect(() => {
//     async function getCast() {
//       try {
//         setLoading(true);
//         const fetchCast = await fetchCastById(id);
//         setCast(fetchCast);
//       } catch (error) {
//         console.log(error);
//       } finally {
//         setLoading(false);
//       }
//     }
//     getCast();
//   }, [id]);

//   return (
//     <div>
//       {loading ? (
//         <p>Loading cast...</p>
//       ) : (
//         <ul>
//           {cast.map(person => (
//             <li key={person.id}>{person.name}</li>
//           ))}
//         </ul>
//       )}
//     </div>
//   );
// };
