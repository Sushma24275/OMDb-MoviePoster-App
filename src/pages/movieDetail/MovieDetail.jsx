import React, { useEffect, useState } from "react";
import "./movieDetail.scss";
import { useLocation } from "react-router-dom";
import { getMovieDescription } from "../../api/omdbApi";
const MovieDetail = () => {
  let location = useLocation();
  const [movieData, setMovieData] = useState(undefined);

  useEffect(() => {
    const getData = async () => {
      const response = await getMovieDescription(location.pathname.slice(1));
      setMovieData(response);
    };
    getData();
  }, []);

  return (
    <div>
      {movieData && (
        <>
          <div
            className="banner"
            style={{
              backgroundImage: `url(${movieData.Poster})`,
            }}
          ></div>
          <div className="mb-3 movie-content container">
            <div className="movie-content__poster">
              <div
                className="movie-content__poster__img"
                style={{
                  backgroundImage: `url(${movieData.Poster})`,
                }}
              ></div>
            </div>
            <div className="movie-content__info">
              <h1 className="title">{movieData.Title}</h1>
              <div className="genres">
                {movieData.Genre.length > 0 &&
                  movieData.Genre.split("/").map((genre, i) => (
                    <span key={i} className="genres__item">
                      {genre}
                    </span>
                  ))}
                <span className="year__item">{movieData.Year}</span>
              </div>
              <p className="overview">{movieData.Plot}</p>
              <div className="cast">
                <div className="section__header">
                  <p>Cast : {movieData.Actors}</p>
                  <p>Director : {movieData.Director}</p>
                  <p>Runtime : {movieData.Runtime}</p>
                  <p>Language : {movieData.Language}</p>

                  <p>
                    IMDB Rating : {movieData.imdbRating}{" "}
                    <img
                      class="icon-img"
                      src="https://kellychi22.github.io/frontend-mentor-solutions/02-interactive-rating-component/images/icon-star.svg"
                      alt="icon star"
                    />
                  </p>
                  <p>IMDB Votes : {movieData.imdbVotes}</p>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default MovieDetail;
