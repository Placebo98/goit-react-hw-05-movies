import axios from 'axios';

const API_KEY = '71c84bcbc6fa5f34774842e7b4721e8d';
const BASE_URL = 'https://api.themoviedb.org/3';

export const fetchPopularFilms = async () => {
  try {
    const response = await axios.get(
      `${BASE_URL}/trending/all/day?api_key=${API_KEY}`
    );
    return response.data;
  } catch (error) {
    console.error(typeof error);
  }
};
