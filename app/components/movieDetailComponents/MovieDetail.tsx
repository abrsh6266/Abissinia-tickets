"use client";
import { RxArrowBottomRight } from "react-icons/rx";
import MovieInfoCard from "./MovieInfoCard";
import { Movie2 } from "../../data";
import Review from "./Review";
import Link from "next/link";
import { useSelector } from "react-redux";
import { RootState } from "@/app/store/store";
import { useEffect, useState } from "react";
import { customFetch2 } from "@/app/utils";

const MovieDetail = ({ movie }: { movie: Movie2 }) => {
  const [scheduled, setScheduled] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      const response = await customFetch2(`/movie-shows/by-movie/${movie._id}`);
      const result = await response.data;
      setScheduled(result.length > 0);
    };
    fetchData();
  }, []);
  const { user } = useSelector((state: RootState) => state.userState);
  return (
    <div className="align-element shadow-gray-700 shadow-xl mb-6">
      <div className="m-auto md:grid lg:grid md:pl-4 md:grid-cols-5 lg:grid-cols-8 gap-4">
        <div className="relative tile row-start-2 row-end-5 col-span-1 md:col-span-2 lg:col-span-3 max-h-96 h-96 mt-8">
          <img
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
      {scheduled &&
        (user?.id ? (
          <Link
            href={`/ticket-purchase/${movie?._id}`}
            className="mt-4 mx-20 align-element btn glass bg-blue-700 hover:bg-blue-800 rounded duration-300"
          >
            Get Tickets <RxArrowBottomRight />
          </Link>
        ) : (
          <Link
            href={`/login`}
            className="mt-4 mx-20 align-element btn glass bg-blue-700 hover:bg-blue-800 rounded duration-300"
          >
            please login to get tickets
            <RxArrowBottomRight />
          </Link>
        ))}
      <div>
        <div className="ml-2 col-span-full my-2">
          <h1 className="uppercase tracking-wide no-underline hover:no-underline font-bold  text-xl ">
            Reviews
          </h1>
        </div>
        <Review reviews={movie.reviewId} movieId={movie._id} />
      </div>
    </div>
  );
};

export default MovieDetail;
