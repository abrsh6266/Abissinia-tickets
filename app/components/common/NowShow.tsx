"use client";
import { useState } from "react";
import { movie } from "../../data";
import MovieCard from "../movieDetailComponents/MovieCard";
import Hero from "./Hero";
import SectionTitle from "./SectionTitle";
import PaginationContainer from "./PaginationContainer";
const NowShow = () => {
  const [movies, setMovies] = useState(movie);

  return (
    <section>
      <Hero />
      <div className="container mx-auto flex items-center gap-2 flex-wrap pt-4 pb-12">
        <nav id="store" className="w-full z-30 top-0 px-6 py-1">
          <SectionTitle text="now Showing" />
        </nav>
        {movies.map((movie) => {
          return <MovieCard {...movie} key={movie.id} />;
        })}
      </div>
      <div className="align-element">
        <PaginationContainer />
      </div>
    </section>
  );
};

export default NowShow;
