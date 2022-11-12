import React from "react";

import "./movieCard.scss";

import { Link } from "react-router-dom";

const MovieCard = ({ Title, Year, imdbID, Type, Poster }) => {
  return (
    <div className="movie-card">
      <Link to={`${imdbID}`}>
        <div style={{ backgroundImage: `url(${Poster})` }}></div>
        <h3 className="movie-title">{Title}</h3>
      </Link>
    </div>
  );
};

export default MovieCard;
