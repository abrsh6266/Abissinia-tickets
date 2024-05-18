import { shuffleArray } from "@/app/coming-soon/page";
import { Movie, movie as movies } from "@/app/data";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const AbissiniaMovies = () => {
  const selectFiveMovies = () => {
    const shuffledMovies = shuffleArray(movies);
    return shuffledMovies.slice(0, 6);
  };
  const [moviess, setMovies] = useState<Movie[]>(selectFiveMovies());

  return (
    <div className="w-full overflow-hidden">
      <div className="container mx-auto flex items-center flex-wrap pt-4 pb-12">
        <section className="flex flex-wrap lg:grid lg:grid-cols-3">
          {moviess.map((movie: Movie) => (
            <div key={movie.id}>
              <Link href={`/movies/${movie.id}`} className="hover:opacity-75">
                <Image
                  className="w-40 h-48 object-cover"
                  src={movie.poster}
                  alt={movie.title}
                />
              </Link>
            </div>
          ))}
        </section>
      </div>
    </div>
  );
};

export default AbissiniaMovies;
