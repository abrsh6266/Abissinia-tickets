import { Movie } from "@/app/data";
import Image from "next/image";
import Link from "next/link";

const ComingMovieCard = ({
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
    <div className="relative px-2 md:px-10 lg:px-20 lg:w-[800px] w-[200] my-10">
      <div className="relative w-full">
        <div className="z-10 rounded-2xl absolute top-10 right-2 px-4 py-2 text-2xl ">
          <Link href={`/movies/${id}`} className="hover:opacity-75 ">
            <Image
              className="w-full h-48 object-cover rounded-lg hidden lg:block"
              src={poster}
              alt={title}
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
            />
          </Link>
        </div>
        <div className="border rounded-t-2xl relative">
          <Image
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
              {cast.map((actor, index) => (
                <span
                  key={index}
                  className="bg-gray-200 text-gray-900 rounded-full px-3 py-1 m-1"
                >
                  <span className="w-6 h-6 px-2 py-1 rounded-full bg-blue-700  text-white">
                    {actor[0]}
                  </span>{" "}
                  {actor}
                </span>
              ))}
            </div>
          </div>
          <div className="px-4 w-[300px]">
            <p className="text-center  text-lg font-semibold mb-2 text-black">
              Director
            </p>
            <div className="grid grid-row">
              {director.map((d, index) => (
                <span
                  key={index}
                  className="bg-gray-200 text-gray-900 rounded-full  py-1 m-1 my-1"
                >
                  <span className="w-6 h-6 px-2 py-1 rounded-full bg-blue-700  text-white">
                    {d[0]}
                  </span>{" "}
                  {d}
                </span>
              ))}
              <Link href={`/movies/${id}`} className="m-4 block lg:hidden">
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
