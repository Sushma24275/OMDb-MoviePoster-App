import React, { useState, useEffect } from "react";
import "./MovieSearch.scss";
import { getMovieDetails } from "../../api/omdbApi";
function MovieSearch({ className }) {
  const [inputValue, setInputValue] = useState("");
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };
  const handleSearch = async () => {
    getMovieDetails(inputValue);
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
