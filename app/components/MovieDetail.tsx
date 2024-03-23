"use client";

import Image from "next/image";
import { Movie } from "../data";
import MovieInfoCard from "./MovieInfoCard";

const MovieDetail = ({
  title,
  description,
  id,
  genre,
  poster,
  releasedYear,
  rating,
  cast,
  director,
  showTime,
}: Movie) => {
  const movie = {
    title,
    description,
    id,
    genre,
    poster,
    releasedYear,
    rating,
    cast,
    director,
    showTime,
  };
  return (
    <div className="container m-auto md:grid lg:grid md:pl-4 md:grid-cols-5 lg:grid-cols-8 gap-4">
      <div className="col-span-full my-2">
      <a
              className="uppercase tracking-wide no-underline hover:no-underline font-bold text-gray-800 text-xl "
              href="#"
            >
              Movie Detail
            </a>
      </div>
      <div className="relative tile row-start-2 row-end-5 col-span-1 md:col-span-2 lg:col-span-3 max-h-96 h-96 mt-8">
        <Image
          className="absolute top-0 left-0 w-full h-full object-cover"
          src={poster}
          alt={title}
        />
      </div>
      <div className="row-start-4 row-end-5 md:row-start-2 md:row-end-3 col-span-2 md:col-span-3 lg:col-span-5">
        <MovieInfoCard {...movie} />
      </div>
      <div className="tile bg-lime-600 lg:col-start-4 lg:col-span-2">
        <h1 className="tile-marker">FOUR</h1>
      </div>
      <div className="tile bg-green-600">
        <h1 className="tile-marker">FIVE</h1>
      </div>
      <div className="tile bg-emerald-500">
        <h1 className="tile-marker">SIX</h1>
      </div>
      <div className="tile bg-teal-500">
        <h1 className="tile-marker">SEVEN</h1>
      </div>
      <div className="tile bg-purple-500">
        <h1 className="tile-marker">EIGHT</h1>
      </div>
      <div className="tile bg-pink-500 row-start-5 md:col-span-full">
        <h1 className="tile-marker">NINE</h1>
      </div>
    </div>
  );
};

export default MovieDetail;
