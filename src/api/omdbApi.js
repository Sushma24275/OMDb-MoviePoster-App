import axios from "axios";
const apiKey = process.env.REACT_APP_OMDB_API_KEY;

export const baseURL = `https://www.omdbapi.com/?apikey=${apiKey}&`;

export const getMovieDetails = async (movieTitle, page) => {
  const response = await axios.get(`${baseURL}s=${movieTitle}&page=${page}`);
  return response.data;
};
export const getMovieDescription = async (movieId) => {
  const response = await axios.get(`${baseURL}i=${movieId}`);
  return response.data;
};
