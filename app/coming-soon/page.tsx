"use client";
import React, { useState } from "react";
import Aside from "../components/profileComponents/Aside";
import Image from "next/image";
import { movie } from "../data";
import ComingMovieCard from "../components/comingComponents/ComingMovieCard";

const ComingSoon = () => {
  const [movies, setMovies] = useState(movie);
  return (
    <div className=" w-full flex flex-col gap-5 px-3 md:px-16 lg:px-28 md:flex-row ">
      <aside className="hidden py-4 md:w-1/3 lg:w-1/5 md:block">
        <Aside />
      </aside>
      <div>
        {movies.map((m) => {
          return <ComingMovieCard {...m} key={m.id} />;
        })}
      </div>
      <aside className="hidden py-4 md:w-1/3 lg:w-1/5 md:block">
        <Aside />
      </aside>
    </div>
  );
};

export default ComingSoon;
