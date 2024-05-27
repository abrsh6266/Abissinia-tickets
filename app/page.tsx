"use client";
import { useSelector } from "react-redux";
import NowShow from "./components/common/NowShow";
import SlickCarousel from "./components/SlickCarousel";
import SearchResult from "./components/common/SearchResult";
import Search from "./components/common/Search";
import { RootState } from "./store/store";

const Home = () => {
  const { searchMovies, searchTerm } = useSelector(
    (state: RootState) => state.movieState
  );

  return (
    <div>
      <Search />
      {searchTerm !== "" ? <SearchResult /> : <SlickCarousel />}
      <NowShow />
    </div>
  );
};

export default Home;
