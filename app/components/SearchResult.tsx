import Link from "next/link";
import { Movie } from "../data";
import Image from "next/image";
import { useGlobalContext } from "../context";
import { FaArrowRight, FaTimesCircle } from "react-icons/fa";

const SearchResult = () => {
  const { searchMovies, setSearchMovies, setSearchTerm } = useGlobalContext();
  return (
    <div className="w-full overflow-hidden">
      <div className="container mx-auto flex items-center flex-wrap pt-4 pb-12">
        <nav  className="w-full z-30 top-0 px-6 py-1">
          <div className="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 px-2 py-3">
            <h1
              className="uppercase md:tracking-wide font-bold text-gray-200 md:text-xl "
            >
              Your Search Result
            </h1>
            <button
              onClick={() => {
                setSearchMovies([]);
                setSearchTerm("");
              }}
              className="btn bg-transparent  md:text-2xl border-2 border-gray-400 hover:bg-blue-700 rounded-lg px-6 mr-8"
            >
              back
            </button>
          </div>
        </nav>
        <section className="my-5 mx-auto grid grid-cols-2 gap-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6  md:gap-4 ">
          {searchMovies.map((movie) => (
            <div key={movie.id} className="border-2 border-white rounded-lg">
              <Link href={`/movies/${movie.id}`} className="hover:opacity-75 ">
                <Image
                  className="w-full h-64 object-cover"
                  src={movie.poster}
                  alt={movie.title}
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
                <div className="text-white left-5 top-5 p-1 -bottom-16 duration-500 group-hover:-translate-y-40 bg-gray-900 bg-opacity-40 h-16 w-52">
                  <span >{movie.title}</span>
                </div>
              </Link>
            </div>
          ))}
        </section>
      </div>
    </div>
  );
};

export default SearchResult;
