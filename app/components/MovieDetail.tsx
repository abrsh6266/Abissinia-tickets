"use client";

import Image from "next/image";
import MovieInfoCard from "./MovieInfoCard";
import MovieSchedule from "./MovieSchedule";
import { Movie } from "../data";
import Review from "./Review";

const MovieDetail = ({ movie }: { movie: Movie }) => {
  return (
    <div className="align-element">
      <div className="m-auto md:grid lg:grid md:pl-4 md:grid-cols-5 lg:grid-cols-8 gap-4">
        <div className="ml-2 col-span-full my-2"></div>
        <div className="relative tile row-start-2 row-end-5 col-span-1 md:col-span-2 lg:col-span-3 max-h-96 h-96 mt-8">
          <Image
            className="absolute top-0 left-0 w-full h-full object-cover"
            src={movie.poster}
            alt={movie.title}
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          />
        </div>
        <div className="row-start-4 row-end-5 md:row-start-2 md:row-end-3 col-span-2 md:col-span-3 lg:col-span-5">
          <MovieInfoCard {...movie} />
        </div>
      </div>
      <div className="ml-2 col-span-full my-2">
          <h1 className="uppercase tracking-wide no-underline hover:no-underline font-bold  text-xl ">
            Schedules
          </h1>
        </div>
      <div className=" m-auto lg:flex sm: gap-4">
        {movie.showTime.map((time, index) => {
          const { day, times } = time;
          return (
            <div key={day} className="lg:col-start-4 lg:col-span-2 my-4 mx-4">
              <h1 className="text-center">{time.day}</h1>
              <MovieSchedule showTime={times} />
            </div>
          );
        })}
      </div>
      <div>
        <div className="ml-2 col-span-full my-2">
          <h1 className="uppercase tracking-wide no-underline hover:no-underline font-bold  text-xl ">
            Reviews
          </h1>
        </div>
        <Review />
      </div>
    </div>
  );
};

export default MovieDetail;
