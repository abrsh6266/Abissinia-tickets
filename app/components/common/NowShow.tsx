"use client";
import { useEffect, useState } from "react";
import MovieCard from "../movieDetailComponents/MovieCard";
import Hero from "./Hero";
import SectionTitle from "./SectionTitle";
import PaginationContainer from "./PaginationContainer";
import useFetchData from "@/api/getData";
import { Movie2 } from "@/app/data";
import Loading from "./Loading";

const NowShow = () => {
  const { data, isLoading, isError } = useFetchData("movies");
  const [movies, setMovies] = useState<Movie2[]>([]);

  useEffect(() => {
    if (data) {
      setMovies(data);
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
    <section>
      <Hero />
      <div className="container mx-auto flex items-center gap-2 flex-wrap pt-4 pb-12">
        <nav id="store" className="w-full z-30 top-0 px-6 py-1">
          <SectionTitle text="now Showing" />
        </nav>
        {movies.map((movie) => {
          return <MovieCard {...movie} key={movie._id} />;
        })}
      </div>
      <div className="align-element">
        <PaginationContainer />
      </div>
    </section>
  );
};

export default NowShow;
