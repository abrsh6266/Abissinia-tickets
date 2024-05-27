"use client";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setSearchMovies } from "./features/movie/movieSlice";
import NowShow from "./components/common/NowShow";
import SlickCarousel from "./components/SlickCarousel";
import SearchResult from "./components/common/SearchResult";
import Search from "./components/common/Search";
import { RootState } from "./store/store";
import { Movie2 } from "./data";
import useFetchData from "@/api/getData";

const Home = () => {
  const searchTerm = useSelector(
    (state: RootState) => state.movieState.searchTerm
  );
  const searchMovies = useSelector(
    (state: RootState) => state.movieState.searchMovies
  );
  const dispatch = useDispatch();
  const [movies, setMovies] = useState<Movie2[]>([]);
  useEffect(() => {
    if (searchTerm !== "") {
      const searchTermLowerCase = searchTerm.toLowerCase();
      const { data, isLoading, isError } = useFetchData(
        `movies/search/?name=${searchTermLowerCase}`
      );
      setMovies(data);
      if (movies) dispatch(setSearchMovies(movies));
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
