"use client"

import Image from "next/image";
import { Movie } from "../data";

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
  return <div className=" sm:m-auto ml-2 md:ml-8 grid md:grid-cols-2">
    <div className="relative lg:w-64 lg:h-96 sm:w-32 sm:h-64">
        <Image className="absolute top-0 left-0 w-full h-full object-cover" src={poster} alt={title} />
    </div>
    <div>
        <h1 className="text-2xl">{title}</h1>
    </div>
  </div>;
};

export default MovieDetail;
