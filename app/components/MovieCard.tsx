import Image from "next/image";
import { Movie } from "../data";
import { BiStar } from "react-icons/bi";

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
      <div className="mx-auto m-4 w-80 h-auto border border-white shadow-lg rounded-lg cursor-pointer transition duration-500 transform hover:border-black hover:scale-105 active:scale-95 active:rotate-1  items-center justify-center font-bold">
        <div className="relative w-full h-96">
          <Image
            alt={title}
            className="absolute top-0 left-0 w-full h-full object-cover"
            src={poster}
            layout="fill"
          />
        </div>
        <div className="p-2">
          <div className="pt-3 flex items-center justify-between p-1">
            <p className="">{title}</p>
            <svg
              className="h-6 w-6 fill-current text-gray-500 hover:text-black"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M12,4.595c-1.104-1.006-2.512-1.558-3.996-1.558c-1.578,0-3.072,0.623-4.213,1.758c-2.353,2.363-2.352,6.059,0.002,8.412 l7.332,7.332c0.17,0.299,0.498,0.492,0.875,0.492c0.322,0,0.609-0.163,0.792-0.409l7.415-7.415 c2.354-2.354,2.354-6.049-0.002-8.416c-1.137-1.131-2.631-1.754-4.209-1.754C14.513,3.037,13.104,3.589,12,4.595z M18.791,6.205 c1.563,1.571,1.564,4.025,0.002,5.588L12,18.586l-6.793-6.793C3.645,10.23,3.646,7.776,5.205,6.209 c0.76-0.756,1.754-1.172,2.799-1.172s2.035,0.416,2.789,1.17l0.5,0.5c0.391,0.391,1.023,0.391,1.414,0l0.5-0.5 C14.719,4.698,17.281,4.702,18.791,6.205z" />
            </svg>
          </div>
          <p className="pt-1 text-gray-900 inline">
            <BiStar className="inline mb-2 text-yellow-300 text-2xl" />
            {rating}
          </p>
          <button className="ml-20 w-40 h-12 bg-white cursor-pointer rounded-3xl border-2 border-[#9748FF] shadow-[inset_0px_-2px_0px_1px_#9748FF] group hover:bg-[#9748FF] transition duration-300 ease-in-out">
            <span className="font-medium text-[#333] group-hover:text-white">
              See Details
            </span>
          </button>
        </div>
      </div>
    </>
  );
};

export default MovieCard;
