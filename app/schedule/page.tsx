"use client";
import React, { useEffect, useState } from "react";
import { Movie2, shuffleArray } from "../data";
import MovieCard2 from "../components/movieDetailComponents/MovieCard2";
import Loading from "../components/common/Loading";
import useFetchData from "@/api/getData";

const Schedule = () => {
  const { data, isLoading, isError } = useFetchData("movies");

  const selectFiveMovies = (data: Movie2[]): Movie2[] => {
    const shuffledMovies = shuffleArray(data);
    return shuffledMovies.slice(0, 6);
  };

  const [movies, setMovies] = useState<Movie2[]>([]);

  useEffect(() => {
    if (data && Array.isArray(data)) {
      setMovies(selectFiveMovies(data));
    }
  }, [data]);

  if (isLoading) {
    return (
      <div>
        <Loading />
      </div>
    );
  }

  if (isError) {
    return <div>Error loading data</div>; // Show an error state
  }
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
        {movies.map((movie) => {
          return <MovieCard2 {...movie} key={movie._id} />;
        })}
      </div>
    </div>
  );
};

export default Schedule;
