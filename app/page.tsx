"use client";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setSearchMovies } from "./features/movie/movieSlice";
import NowShow from "./components/common/NowShow";
import SlickCarousel from "./components/SlickCarousel";
import SearchResult from "./components/common/SearchResult";
import Search from "./components/common/Search";
import { RootState } from "./store/store";
import { movie, Movie } from "./data";

const Home = () => {
  const searchTerm = useSelector(
    (state: RootState) => state.movieState.searchTerm
  );
  const searchMovies = useSelector(
    (state: RootState) => state.movieState.searchMovies
  );
  const dispatch = useDispatch();

  useEffect(() => {
    if (searchTerm !== "") {
      const searchTermLowerCase = searchTerm.toLowerCase();
      const filteredMovies = movie.filter((m: Movie) =>
        m.title.toLowerCase().includes(searchTermLowerCase)
      );
      dispatch(setSearchMovies(filteredMovies));
    } else {
      dispatch(setSearchMovies([]));
    }
  }, [searchTerm]);

  return (
    <div>
      <Search />
      {searchMovies.length > 0 ? <SearchResult /> : <SlickCarousel />}
      <NowShow />
    </div>
  );
};

export default Home;
