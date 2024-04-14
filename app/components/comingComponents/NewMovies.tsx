import { Movie, movie as movies } from "@/app/data";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const NewMovies = () => {
  const shuffleArray = (array: any) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };
  const selectFiveMovies = () => {
    const shuffledMovies = shuffleArray(movies);
    return shuffledMovies.slice(0, 5);
  };
  const [moviess, setMovies] = useState<Movie[]>(selectFiveMovies());
  return (
    <div className="sticky flex flex-col gap-2 p-4 text-sm md:border-r ">
      <h2 className="pl-3 mb-4 text-3xl font-semibold">New Movies this week</h2>
      {moviess.map((movie, index) => {
        return (
          <div key={movie.id}>
            {index === 0 ? (
              <Link href={`/movies/${movie.id}`} className="hover:opacity-75 ">
                <Image
                  src={movie.poster}
                  alt={movie.title}
                  className="w-full h-48 object-cover rounded-lg "
                />
                <div className="text-white left-5 top-5 p-1 -bottom-16 duration-500 group-hover:-translate-y-40 bg-gray-900 bg-opacity-40 h-16 w-52">
                  <span>{movie.title}</span>
                  <br />
                  <span className="text-xs">{movie.releasedYear}</span> {/* Display release year */}
                </div>
              </Link>
            ) : (
              <Link
                key={movie.id}
                href={`/movies/${movie.id}`}
                className="flex flex-col font-semibold py-2.5 border border-black hover:border-blue-700 rounded-xl"
              >
                <span>{movie.title}</span>
                <span className="text-xs">({movie.releasedYear})</span> {/* Display release year */}
              </Link>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default NewMovies;
