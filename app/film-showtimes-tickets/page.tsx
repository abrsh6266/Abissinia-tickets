"use client";
import { useEffect, useState } from "react";
import SectionTitle from "../components/common/SectionTitle";
import MovieDetail from "../components/movieDetailComponents/MovieDetail";
import PaginationContainer from "../components/common/PaginationContainer";
import { Movie2 } from "../data";
import useFetchData from "@/api/getData";

const Page = () => {
  const { data, isLoading, isError } = useFetchData("movies/scheduled");
  const [movies, setMovies] = useState<Movie2[]>([]);
  useEffect(() => {
    if (data) {
      setMovies(data);
    }
  }, [data]);
  return (
    <div className="align-element">
      <div className="sm:flex md:grid md:grid-cols-2">
        <SectionTitle text={"showTimes"} />
      </div>
      <div className="md:text-2xl text-gray-200 sm:text-xl italic lg:mx-20">
        <p>
          Film schedule is updated and published on a weekly basis every Monday
          evening. You do not need to print the tickets - just present them to
          us via your mobile device when you arrive at the cinema. Ticket sales
          are subject to our Terms and Conditions.
        </p>
      </div>
      <div className="min-h-8 max-h-full m-4">
        {movies.map((m) => {
          return <MovieDetail key={m._id} movie={m} />;
        })}
      </div>
      <div className="align-element">
        <PaginationContainer />
      </div>
    </div>
  );
};

export default Page;
