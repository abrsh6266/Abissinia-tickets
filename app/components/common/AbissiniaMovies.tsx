import { gridSquareVariant, Movie, movie as movies, shuffleArray, squareVariant } from "@/app/data";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { motion } from "framer-motion";


const AbissiniaMovies = () => {
  const selectFiveMovies = () => {
    const shuffledMovies = shuffleArray(movies);
    return shuffledMovies.slice(0, 6);
  };
  const [moviess, setMovies] = useState<Movie[]>(selectFiveMovies());

  return (
    <div className="w-full overflow-hidden">
      <div className="container mx-auto flex items-center flex-wrap pt-4 pb-12">
        <motion.section
          variants={gridSquareVariant}
          initial="hidden"
          animate="show"
          className="flex flex-wrap lg:grid lg:grid-cols-3"
        >
          {moviess.map((movie: Movie) => (
            <motion.section variants={squareVariant} key={movie.id}>
              <Link href={`/movies/${movie.id}`} className="hover:opacity-75">
                <Image
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
