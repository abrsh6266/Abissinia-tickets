import Image from "next/image";
import { Movie } from "../../data";
import { BiStar } from "react-icons/bi";
import Link from "next/link";

const MovieCard = ({
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
  return (
    <>
      <div className="mx-auto gap-4 my-4 w-80 h-auto border border-white shadow-lg rounded-lg cursor-pointer hover:border-gray-600 bg-slate-950  items-center justify-center font-bold overflow-hidden">
        <div className="relative w-full h-96 overflow-hidden">
          <Image
            alt={title}
            className="absolute top-0 left-0 w-full h-full object-cover transition duration-700 transform hover:scale-110"
            src={poster}
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          />
        </div>
        <div className="p-2">
          <div className="pt-3 flex items-center justify-between p-1">
            <p className="text-gray-200">{title}</p>
          </div>
          <p className="pt-1 text-gray-200 inline">
            <BiStar className="inline mb-2 text-yellow-300 text-2xl" />
            {rating}
          </p>
          <Link href={`/movies/${id}`}>
            <button className="ml-20 w-40 h-12 cursor-pointer rounded-3xl border-2 border-blue-700 shadow-blue-700 group hover:bg-blue-700 transition duration-300 ease-in-out">
              <span className="font-medium group-hover:">
                See Details
              </span>
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default MovieCard;
