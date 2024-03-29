"use client";
import { useEffect, useState } from "react";
import { movie, Movie } from "./data";
import { useGlobalContext } from "./context";
import NowShow from "./components/NowShow";
import SlickCarousel from "./components/SlickCarousel";
import SearchResult from "./components/SearchResult";
import Loading from "./components/Loading";

export default function Home() {
  const { searchTerm, searchMovies, setSearchMovies, loading } =
    useGlobalContext();
  useEffect(() => {
    if (searchTerm != "") {
      setSearchMovies(() => {
        const searchTermLowerCase = searchTerm.toLowerCase();
        const filteredMovies = movie.filter((m) =>
          m.title.toLowerCase().includes(searchTermLowerCase)
        );
        return filteredMovies;
      });
    } else {
      setSearchMovies([]);
    }
  }, [searchTerm]);

  return (
    <div>
      {loading ? (
        <Loading />
      ) : (
        <div>
          {searchMovies.length > 0 ? <SearchResult /> : <SlickCarousel />}
          <NowShow />
        </div>
      )}
    </div>
  );
}
