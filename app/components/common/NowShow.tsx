"use client";
import { useEffect, useState } from "react";
import MovieCard from "../movieDetailComponents/MovieCard";
import Hero from "./Hero";
import SectionTitle from "./SectionTitle";
import PaginationContainer from "./PaginationContainer";
import useFetchData from "@/api/getData";
import { Movie2 } from "@/app/data";
import Loading from "./Loading";
import { useDispatch, useSelector } from "react-redux";
import { setSelectedMovie } from "@/app/features/movie/movieSlice";
import { RootState } from "../../store/store";
import { setPage, setPageCount } from "@/app/features/pagination/paginationSlice";

const NowShow = () => {
  const dispatch = useDispatch();
  const page = useSelector((state: RootState) => state.paginationState.page);
  const limit = 10; // Set the limit as required

  const { data, isLoading, isError } = useFetchData("movies", page, limit);
  const [movies, setMovies] = useState<Movie2[]>([]);

  useEffect(() => {
    dispatch(setSelectedMovie(null));
    if (data) {
      setMovies(data.movies);
      dispatch(setPageCount(data.totalPages));
    }
  }, [data, dispatch]);

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
          <SectionTitle text="Now Showing" />
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
