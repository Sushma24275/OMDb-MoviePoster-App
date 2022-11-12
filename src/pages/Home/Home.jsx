import React, { useState, useEffect } from "react";
import MovieSearch from "../../components/movieSearch/MovieSearch";
import { useSelector } from "react-redux";
import MovieCard from "../../components/movieCard/MovieCard";
import "./Home.scss";
import Pagination from "@mui/material/Pagination";
import { useDispatch } from "react-redux";
import { getMovieDetails } from "../../api/omdbApi";
import { addMovies } from "../../slice/movieSlice";
const Home = () => {
  const dispatch = useDispatch();
  const { allMovies, totalCount, searchTerm } = useSelector(
    (state) => state.movies
  );
  const [page, setPage] = useState(1);

  const handleChange = (event, value) => {
    setPage(value);
  };
  useEffect(() => {
    const getData = async () => {
      const movies = await getMovieDetails(searchTerm, page);
      dispatch(addMovies(movies));
    };
    page !== 1 && getData();
  }, [page]);

  return (
    <div className="home__container">
      <MovieSearch className={""} />
      <div className="movie__container">
        {allMovies.length > 0 &&
          allMovies.map((item) => {
            return <MovieCard {...item} />;
          })}
      </div>

      {totalCount && (
        <div className="pagination__container">
          <Pagination
            count={Math.ceil(totalCount / 10)}
            variant="outlined"
            color="secondary"
            onChange={handleChange}
          />
        </div>
      )}
    </div>
  );
};

export default Home;
