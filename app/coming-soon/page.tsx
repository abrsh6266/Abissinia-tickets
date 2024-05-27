"use client";
import React, { useEffect, useState } from "react";
import { Movie2, shuffleArray } from "../data";
import ComingMovieCard from "../components/comingComponents/ComingMovieCard";
import Genre from "../components/comingComponents/Genre";
import NewMovies from "../components/comingComponents/NewMovies";
import PaginationContainer from "../components/common/PaginationContainer";
import useFetchData from "@/api/getData";

const ComingSoon = () => {
  const { data, isLoading, isError } = useFetchData("movies");

  const selectFiveMovies = (data: Movie2[]): Movie2[] => {
    const shuffledMovies = shuffleArray(data);
    return shuffledMovies.slice(0, 3);
  };

  const [movies, setMovies] = useState<Movie2[]>([]);

  useEffect(() => {
    if (data && Array.isArray(data)) {
      setMovies(selectFiveMovies(data));
    }
  }, [data]);

  if (isLoading) {
    return <div>Loading...</div>; // Show a loading state
  }

  if (isError) {
    return <div>Error loading data</div>; // Show an error state
  }

  return (
    <div className="align-element flex flex-col gap-5 px-3 md:mx-auto lg:flex-row overflow-x-hidden">
      <aside className="hidden py-4 md:w-1/3 lg:w-1/5 lg:block">
        <Genre />
      </aside>
      <div>
        <h2 className="pl-3 mb-4 text-3xl font-semibold mt-10">Upcoming Movies</h2>
        {movies.length > 0 ? (
          movies.map((m) => <ComingMovieCard {...m} key={m._id} />)
        ) : (
          <div>No upcoming movies available</div>
        )}
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
