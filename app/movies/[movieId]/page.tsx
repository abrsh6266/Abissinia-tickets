"use client";
import MovieDetail from "@/app/components/movieDetailComponents/MovieDetail";
import { movie as movies } from "../../data";
import { useState } from "react";

export interface Props {
  params: {
    movieId: string;
  };
}
const Details = ({ params }: Props) => {
  const [id, setId] = useState(params.movieId);
  const [movie, setMovie] = useState(() => {
    return movies.find((m) => m.id.toString() === id);
  });
  if (movie) {
    return <MovieDetail movie={movie} />;
  }
  return <h1>page not found</h1>;
};

export default Details;
