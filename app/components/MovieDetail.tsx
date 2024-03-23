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
  return <div className=" m-auto ml-2 grid lg:grid-cols-2">
    <div>
        <h1 className="text-2xl">{title}</h1>
    </div>
    <div className="relative w-64 h-64">
        <Image className="absolute top-0 left-0 w-full h-full object-cover" src={poster} alt={title} />
    </div>
  </div>;
};

export default MovieDetail;
