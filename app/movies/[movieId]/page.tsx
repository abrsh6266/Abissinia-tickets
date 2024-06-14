"use client";
import { useFetchData2 } from "@/api/getData";
import Loading from "@/app/components/common/Loading";
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
  const { data, isLoading, isError } = useFetchData2(`movies/${id}`);
  const [movie, setMovie] = useState(data);
  useEffect(() => {
    dispatch(setSelectedMovie(null));
    if (data) {
      console.log(data);
      setMovie(data);
    }
  }, [data]);
  if (isLoading) {
    return (
      <div>
        <Loading />
      </div>
    );
  }

  if (isError) {
    return <div>Error loading data</div>;
  }
  if (movie) {
    return <MovieDetail movie={movie} />;
  }
};

export default Details;
