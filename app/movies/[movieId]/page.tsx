"use client";
import useFetchData from "@/api/getData";
import MovieDetail from "@/app/components/movieDetailComponents/MovieDetail";
import { useEffect, useState } from "react";

export interface Props {
  params: {
    movieId: string;
  };
}
const Details = ({ params }: Props) => {
  const [id, setId] = useState(params.movieId);
  const { data, isLoading, isError } = useFetchData(`movies/${id}`);
  const [movie, setMovie] = useState(data);
  useEffect(() => {
    if (data) {
      setMovie(data);
    }
  }, [data]);
  if (movie) {
    return <MovieDetail movie={movie} />;
  }
};

export default Details;
