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
                  movieData.Genre.split(" /").map((genre, i) => (
                    <span key={i} className="genres__item">
                      {genre}
                    </span>
                  ))}
              </div>
              <p className="overview">{movieData.Plot}</p>
              <div className="cast">
                <div className="section__header">
                  <h2>Cast</h2>
                  {}
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
