import useFetchData from "@/api/getData";
import { Movie2, shuffleArray } from "@/app/data";
import { formatDate } from "@/app/utils";
import Link from "next/link";
import { useEffect, useState } from "react";

const NewMovies = () => {
  const { data } = useFetchData("movies", 1, 10);

  const selectFiveMovies = (data: Movie2[]): Movie2[] => {
    const shuffledMovies = shuffleArray(data);
    return shuffledMovies.slice(0, 5);
  };

  const [movies, setMovies] = useState<Movie2[]>([]);

  useEffect(() => {
    if (data?.movies && Array.isArray(data.movies)) {
      setMovies(selectFiveMovies(data.movies));
    }
  }, [data]);
  if (movies)
    return (
      <div className="sticky flex flex-col gap-2 p-4 text-sm md:border-r ">
        <h2 className="pl-3 mb-4 text-3xl font-semibold">
          New Movies this week
        </h2>
        {movies.map((movie, index) => {
          return (
            <div key={movie._id}>
              {index === 0 ? (
                <Link
                  href={`/movies/${movie._id}`}
                  className="hover:opacity-75 "
                >
                  <img
                    src={movie.poster}
                    alt={movie.title}
                    className="w-full h-48 object-cover rounded-lg "
                  />
                  <div className="text-white left-5 top-5 p-1 -bottom-16 duration-500 group-hover:-translate-y-40 bg-gray-900 bg-opacity-40 h-16 w-52">
                    <span>{movie.title}</span>
                    <br />
                    <span className="text-xs">
                      {formatDate(movie.releaseDate)}
                    </span>{" "}
                    {/* Display release year */}
                  </div>
                </Link>
              ) : (
                <Link
                  key={movie._id}
                  href={`/movies/${movie._id}`}
                  className="flex flex-col w-[170px] font-semibold py-2.5 border hover:border-blue-700 rounded-xl p-2"
                >
                  <span>{movie.title}</span>
                  <span className="text-xs">
                    {formatDate(movie.releaseDate)}
                  </span>{" "}
                  {/* Display release year */}
                </Link>
              )}
            </div>
          );
        })}
      </div>
    );
};

export default NewMovies;
