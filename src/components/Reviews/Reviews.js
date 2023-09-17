import { fetchReviewsById } from 'api';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Reviews = () => {
  const { id } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    async function getReviews() {
      try {
        const fetchReviews = await fetchReviewsById(id);
        setReviews(fetchReviews.results);
      } catch (error) {
        console.log(error);
      }
    }
    getReviews();
  }, [id]);

  if (reviews.length === 0) {
    return 'There haven`t been reviews yet';
  }

  return (
    <div>
      <h2>Reviews</h2>
      <ul>
        {reviews.map(review => (
          <li key={review.id}>
            <h2>{review.author ? review.author : 'Unknown'}</h2>
            <p>
              {review.content ? review.content : 'There is no content here'}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Reviews;
