import Image from "next/image";
import { Movie, Movie2 } from "../../data";
import Link from "next/link";

const MovieCard2 = ({
  _id,
  title,
  duration,
  genre,
  country,
  starsId,
  releaseDate,
  description,
  poster,
  reviewId,
}: Movie2) => {
  return (
    <>
      <div className="mx-auto w-[250px] h-auto border shadow-lg rounded-lg cursor-pointer items-center justify-center font-bold overflow-hidden">
        <div className="relative w-[250px] h-[300px] overflow-hidden">
          <Link href={`/movies/${_id}`}>
            <img
              alt={title}
              className="absolute top-0 left-0 w-full h-full object-cover transition duration-700 transform hover:scale-110"
              src={poster}
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
            />
          </Link>
        </div>
        <div className="p-2">
          <p className="text-gray-200">{title}</p>
        </div>
      </div>
    </>
  );
};

export default MovieCard2;
