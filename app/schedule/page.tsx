"use client";
import React, { useEffect, useState } from "react";
import { Movie2, ShowTime, shuffleArray } from "../data";
import MovieCard2 from "../components/movieDetailComponents/MovieCard2";
import Loading from "../components/common/Loading";
import useFetchData from "@/api/getData";
import { customFetch2 } from "../utils";
const daysOfWeek = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];
interface Hall {
  _id: string;
  name: string;
  seats: {
    sofa: any[];
    standard: any[];
    premier: any[];
  };
}

interface MovieShow {
  _id: string;
  createdAt: string;
  hallId: Hall;
  movieId: Movie2;
  showTime: ShowTime[];
}
interface Movie extends Movie2 {
  showTime: MovieShow[];
}
const Schedule = () => {
  const { data, isLoading, isError } = useFetchData("movies/scheduled");
  const [selectedDay, setSelectedDay] = useState<string>("Monday");
  const [movies, setMovies] = useState<Movie[]>([]);
  const [filteredMovies, setFilteredMovies] = useState<Movie[]>([]);

  useEffect(() => {
    if (data && Array.isArray(data)) {
      const fetchShowTimes = async () => {
        if (!data.length) return;

        const promises = data.map(async (movie) => {
          const response = await customFetch2(
            `/movie-shows/by-movie/${movie._id}`
          );
          const result = await response.data;
          console.log(result);
          return { ...movie, showTime: result };
        });

        const moviesWithShowTimes = await Promise.all(promises);
        setMovies(moviesWithShowTimes);
      };

      fetchShowTimes();
    }
  }, [data]);
  useEffect(() => {
    const filterMoviesByDay = () => {
      const filtered = movies.filter(
        (movie) =>
          movie.showTime &&
          movie.showTime.some((show) =>
            show.showTime.some((week) => week.day === selectedDay)
          )
      );
      setFilteredMovies(filtered);
    };

    filterMoviesByDay();
  }, [selectedDay, movies]);

  if (isLoading) {
    return (
      <div>
        <Loading />
      </div>
    );
  }

  if (isError) {
    return <div>Error loading data</div>;
  }

  return (
    <div className="align-element2">
      <div className="">
        <div className="flex border-2 border-blue-700 mx-auto ">
          <select
            value={selectedDay}
            onChange={(e) => setSelectedDay(e.target.value)}
            className="input input-bordered w-full outline-none text-sm px-4 py-3"
          >
            {daysOfWeek.map((day) => (
              <option key={day} value={day}>
                {day}
              </option>
            ))}
          </select>
          <button
            type="button"
            className="flex items-center justify-center bg-blue-700 px-5 text-sm"
          >
            Search
          </button>
        </div>
      </div>
      <div className="my-5 mx-auto grid grid-cols-1 gap-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 2xl:grid-cols-5 md:gap-4">
        {filteredMovies.map((movie) => (
          <MovieCard2 {...movie} key={movie._id} />
        ))}
      </div>
    </div>
  );
};

export default Schedule;
