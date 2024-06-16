import { fetchData } from "@/app/utils";
import { useQuery } from "@tanstack/react-query";

const useFetchMoviesByGenre = (genre: string, page: number, limit: number) => {
  return useQuery(["movies", genre, page, limit], () =>
    fetchData(`/movies/genre?genre=${genre}&page=${page}&limit=${limit}`)
  );
};

export default useFetchMoviesByGenre;