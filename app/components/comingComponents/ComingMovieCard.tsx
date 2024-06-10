import { Movie2 } from "@/app/data";
import Link from "next/link";

const ComingMovieCard = ({
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
    <div className="relative px-2 md:px-10 lg:px-20 md:w-[650px] lg:w-[460px]  xl:w-[650px] 2xl:w-[800px] my-10">
      <div className="relative w-full">
        <div className="z-10 rounded-2xl absolute top-10 right-2 px-4 py-2 text-2xl ">
          <Link href={`/movies/${_id}`} className="hover:opacity-75 ">
            <img
              className="w-full h-48 object-cover rounded-lg hidden md:block lg:hidden xl:block"
              src={poster}
              alt={title}
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
            />
          </Link>
        </div>
        <div className="border rounded-t-2xl relative">
          <img
            src={poster}
            alt={title}
            className="object-cover rounded-t-2xl w-full h-20 blur-sm saturate-150"
          />
          <div className="bg-black bg-opacity-30 rounded-t-2xl absolute top-0 left-0 px-4 py-2 text-2xl text-white">
            <p className="font-bold">{title}</p>
          </div>
        </div>
        <div className="min-h-[250px] w-full rounded-b-2xl bg-white ">
          <div className="w-[300px]">
            <p className="text-lg font-semibold mb-2 text-black text-center">
              Main Cast
            </p>
            <div className="grid grid-row">
              {starsId.map((actor, index) => (
                <span
                  key={index}
                  className="bg-gray-200 text-gray-900 rounded-full px-3 py-1 m-1"
                >
                  <span className="w-6 h-6 px-2 py-1 rounded-full bg-blue-700  text-white">
                    {actor.name[0]}
                  </span>{" "}
                  {actor.name}
                </span>
              ))}
            </div>
          </div>
          <div className="px-4 w-[300px]">
            <div className="grid grid-row">
              <Link
                href={`/movies/${_id}`}
                className="m-4 sm:block md:hidden lg:block xl:hidden "
              >
                <button className="text-xlc btn bg-blue-700 hover:bg-black hover:border-2 hover:border-blue-700 rounded-lg">
                  See Details
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComingMovieCard;
