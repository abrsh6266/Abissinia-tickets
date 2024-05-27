import {
  gridSquareVariant,
  Movie2,
  shuffleArray,
  squareVariant,
} from "@/app/data";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import useFetchData from "@/api/getData";

const AbissiniaMovies = () => {
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

  return (
    <div className="w-full overflow-hidden">
      <div className="container mx-auto flex items-center flex-wrap pt-4 pb-12">
        <motion.section
          variants={gridSquareVariant}
          initial="hidden"
          animate="show"
          className="flex flex-wrap lg:grid lg:grid-cols-3"
        >
          {movies.map((movie: Movie2) => (
            <motion.section variants={squareVariant} key={movie._id}>
              <Link href={`/movies/${movie._id}`} className="hover:opacity-75">
                <img
                  className="w-40 h-48 object-cover"
                  src={movie.poster}
                  alt={movie.title}
                />
              </Link>
            </motion.section>
          ))}
        </motion.section>
      </div>
    </div>
  );
};

export default AbissiniaMovies;
