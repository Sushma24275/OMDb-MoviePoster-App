import axios from "axios";
const apiKey = process.env.REACT_APP_OMDB_API_KEY;

export const baseURL = `http://www.omdbapi.com/?apikey=${apiKey}&`;

export const getMovieDetails = async (movieTitle, page) => {
  const response = await axios.get(`${baseURL}s=${movieTitle}&page=${page}`);
  console.log("res", response.data);
  return response.data;
};
