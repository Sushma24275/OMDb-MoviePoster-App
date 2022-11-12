import "./App.scss";
import Header from "./components/Header/Header";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home.jsx";
import MovieDetail from "./pages/movieDetail/MovieDetail";

function App() {
  return (
    <div className="app_container">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:id" element={<MovieDetail />} />
      </Routes>
    </div>
  );
}

export default App;
