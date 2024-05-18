"use client";
import React, { useState } from "react";
import { Movie, movie as movies, shuffleArray } from "../data";
import MovieCard2 from "../components/movieDetailComponents/MovieCard2";

const Schedule = () => {
  const selectFiveMovies = () => {
    const shuffledMovies = shuffleArray(movies);
    return shuffledMovies.slice(0, 6);
  };
  const [moviess, setMovies] = useState<Movie[]>(selectFiveMovies());
  return (
    <div className="align-element2">
      <div className="">
        <div className="flex border-2 border-blue-700 mx-auto ">
          <input
            type="date"
            placeholder="Search Something..."
            className="input input-bordered w-full outline-none text-sm px-4 py-3"
          />
          <button
            type="button"
            className="flex items-center justify-center bg-blue-700 px-5 text-sm"
          >
            Search
          </button>
        </div>
      </div>
      <div className="my-5 mx-auto grid grid-cols-1 gap-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 2xl:grid-cols-5 md:gap-4">
        {moviess.map((movie) => {
          return <MovieCard2 {...movie} key={movie.id} />;
        })}
      </div>
    </div>
  );
};

export default Schedule;
