import Link from "next/link";
import { Movie } from "../data";
import Image from "next/image";
import { useGlobalContext } from "../context";
import { FaArrowRight, FaTimesCircle } from "react-icons/fa";

const SearchResult = () => {
  const { searchMovies, setSearchMovies, setSearchTerm } = useGlobalContext();
  return (
    <div className="w-full bg-gradient-to-b from-white via-white to-gray-500">
      <div className="container mx-auto flex items-center flex-wrap pt-4 pb-12">
        <nav id="store" className="w-full z-30 top-0 px-6 py-1">
          <div className="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 px-2 py-3">
            <a
              className="uppercase tracking-wide no-underline hover:no-underline font-bold text-gray-800 text-xl "
              href="#"
            >
              Your Search Result
            </a>
            <button
        onClick={() => {
          setSearchMovies([]);
          setSearchTerm("");
        }}
        className="border flex gap-2 text-2xl rounded-lg p-2 hover:bg-blue-600 bg-blue-400 transition-all duration-300 md:text-4xl"
      >
        back <FaArrowRight />
      </button>
          </div>
        </nav>
        <section className="my-5 mx-auto grid grid-cols-2 gap-1 md:grid-cols-4 md:gap-4 ">
          {searchMovies.map((movie) => (
            <div key={movie.id}>
              <Link href={`/movies/${movie.id}`} className="hover:opacity-75">
                <Image
                  className="w-full h-64 object-cover"
                  src={movie.poster}
                  alt={movie.title}
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
              </Link>
            </div>
          ))}
        </section>
      </div>
    </div>
  );
};

export default SearchResult;
