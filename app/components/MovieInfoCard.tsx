import { BiStar } from "react-icons/bi";
import { Movie } from "../data";

const MovieInfoCard = ({
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
    <div className="bg-black max-w-2xl shadow overflow-hidden sm:rounded-lg">
      <div className="px-4 py-5 sm:px-6">
        <h3 className="text-xl leading-6 font-medium text-gray-200">{title}</h3>
        <p className="mt-1 max-w-2xl text-sm text-gray-300">{genre}.</p>
      </div>
      <div className="border-t border-gray-200">
        <dl>
          <div className="bg-black px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-md font-medium text-gray-200">Released Year</dt>
            <dd className="mt-1 text-sm text-gray-200 sm:mt-0 sm:col-span-2">
              {releasedYear}
            </dd>
          </div>
          <div className="bg-black px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-md font-medium text-gray-200">Cast</dt>
            <dd className="mt-1 text-sm text-gray-200 sm:mt-0 sm:col-span-2">
              {cast.map((c) => {
                return <span key={c}>{c}, </span>;
              })}
            </dd>
          </div>
          <div className="bg-black px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-md font-medium text-gray-200">Director</dt>
            <dd className="mt-1 text-sm text-gray-200 sm:mt-0 sm:col-span-2">
              {director}
            </dd>
          </div>
          <div className="bg-black px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-md font-medium text-gray-200">Rating</dt>
            <dd className="mt-1 text-sm text-gray-200 sm:mt-0 sm:col-span-2">
              <BiStar className="inline mb-2 text-xl"/> {rating}
            </dd>
          </div>
          <div className="bg-black px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-md font-medium text-gray-200">Description</dt>
            <dd className="mt-1 text-sm text-gray-200 sm:mt-0 sm:col-span-2">
              {description}
            </dd>
          </div>
        </dl>
      </div>
    </div>
  );
};

export default MovieInfoCard;
