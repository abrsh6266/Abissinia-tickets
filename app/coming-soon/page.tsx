"use client";
import React, { useEffect, useState } from "react";
import { Movie2, shuffleArray } from "../data";
import ComingMovieCard from "../components/comingComponents/ComingMovieCard";
import Genre from "../components/comingComponents/Genre";
import NewMovies from "../components/comingComponents/NewMovies";
import PaginationContainer from "../components/common/PaginationContainer";
import useFetchData from "@/api/getData";
const ComingSoon = () => {
  const selectFiveMovies = () => {
    const shuffledMovies = shuffleArray(movies);
    return shuffledMovies.slice(0, 3);
  };
  const { data, isLoading, isError } = useFetchData("movies");
  const [movies, setMovies] = useState<Movie2[]>(selectFiveMovies());
  useEffect(() => {
    if (data) {
      setMovies(data);
    }
  }, [data]);
  return (
    <div className="align-element flex flex-col gap-5 px-3 md:mx-auto lg:flex-row overflow-x-hidden">
      <aside className="hidden py-4 md:w-1/3 lg:w-1/5 lg:block">
        <Genre />
      </aside>
      <div>
        <h2 className="pl-3 mb-4 text-3xl font-semibold mt-10">
          upcoming movies
        </h2>
        {movies.map((m) => {
          return <ComingMovieCard {...m} key={m._id} />;
        })}
        <div className="align-element">
          <PaginationContainer />
        </div>
      </div>
      <aside className="hidden py-4 md:w-1/3 lg:block">
        <NewMovies />
      </aside>
    </div>
  );
};

export default ComingSoon;
