import React, { useState, useEffect } from "react";
import "./MovieSearch.scss";
import { getMovieDetails } from "../../api/omdbApi";
import { useDispatch } from "react-redux";

import { addMovies, addSearchTerm } from "../../slice/movieSlice";

function MovieSearch({ className }) {
  const dispatch = useDispatch();
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
    dispatch(addSearchTerm(e.target.value));
  };
  const handleSearch = async () => {
    const movies = await getMovieDetails(inputValue, 1);
    dispatch(addMovies(movies));
  };

  return (
    <div className="movie-search">
      <input
        type="text"
        placeholder="Enter movie name"
        value={inputValue}
        onChange={handleInputChange}
      />
      <button className={`btn ${className} small`} onClick={handleSearch}>
        Search
      </button>
    </div>
  );
}

export default MovieSearch;
