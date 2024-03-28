"use client";
import { useState } from "react";
import { movie } from "../data";
import MovieCard from "./MovieCard";
import Hero from "./Hero";

const NowShow = () => {
  const [movies, setMovies] = useState(movie);
  
  return (
    <section className="bg-white">
      <Hero />
      <div className="container mx-auto flex items-center flex-wrap pt-4 pb-12">
        <nav id="store" className="w-full z-30 top-0 px-6 py-1">
          <div className="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 px-2 py-3">
            <a
              className="uppercase tracking-wide no-underline hover:no-underline font-bold text-gray-800 text-xl "
              href="#"
            >
              Now Showing
            </a>
          </div>
        </nav>
        {movies.map((movie) => {
          return <MovieCard {...movie} key={movie.id} />;
        })}
      </div>
    </section>
  );
};

export default NowShow;
