import "./App.scss";
import Header from "./components/Header/Header";
import MovieSearch from "./components/movieSearch/MovieSearch.jsx";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div>
      <Header />
      <MovieSearch className={"nan"} />

      {/* <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/books" element={<BookList />} />
      </Routes> */}
    </div>
  );
}

export default App;
