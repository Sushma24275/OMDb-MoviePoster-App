import React, { useState, useEffect } from "react";
import MovieSearch from "../../components/movieSearch/MovieSearch";
import { useSelector } from "react-redux";
import MovieCard from "../../components/movieCard/MovieCard";
import "./Home.scss";
import Pagination from "@mui/material/Pagination";
import { useDispatch } from "react-redux";
import { getMovieDetails } from "../../api/omdbApi";
import { addMovies } from "../../slice/movieSlice";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

const Home = () => {
  const dispatch = useDispatch();
  const { allMovies, totalCount, searchTerm } = useSelector(
    (state) => state.movies
  );
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  const handleChange = (event, value) => {
    setPage(value);
  };
  useEffect(() => {
    const getData = async () => {
      setLoading(true);
      const movies = await getMovieDetails(searchTerm, page);
      dispatch(addMovies(movies));
      setLoading(false);
    };
    searchTerm && getData();
  }, [page]);

  return (
    <div className="home__container">
      <MovieSearch className={""} />
      {loading && (
        <Box sx={{ display: "flex" }}>
          <CircularProgress />
        </Box>
      )}

      <div className="movie__container">
        {allMovies.length > 0 ? (
          allMovies.map((item) => {
            return <MovieCard {...item} />;
          })
        ) : (
          <div class="text"></div>
        )}
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
