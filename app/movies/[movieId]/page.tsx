"use client";
import useFetchData from "@/api/getData";
import MovieDetail from "@/app/components/movieDetailComponents/MovieDetail";
import { setSelectedMovie } from "@/app/features/movie/movieSlice";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

export interface Props {
  params: {
    movieId: string;
  };
}
const Details = ({ params }: Props) => {
  const dispatch = useDispatch();
  const [id, setId] = useState(params.movieId);
  const { data, isLoading, isError } = useFetchData(`movies/${id}`);
  const [movie, setMovie] = useState(data);
  useEffect(() => {
    dispatch(setSelectedMovie(null));
    if (data) {
      setMovie(data);
    }
  }, [data]);
  if (movie) {
    return <MovieDetail movie={movie} />;
  }
};

export default Details;
