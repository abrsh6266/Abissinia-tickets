import { BiStar } from "react-icons/bi";
import { Movie } from "../../data";

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
    <div className="max-w-2xl shadow overflow-hidden sm:rounded-lg">
      <div className="px-4 py-5 sm:px-6">
        <h3 className="text-xl leading-6 font-medium">{title}</h3>
        <p className="mt-1 max-w-2xl text-sm ">
          {genre.map((g) => {
            return <span key={g}>{g}, </span>;
          })}
          .
        </p>
      </div>
      <div className="border-t">
        <dl>
          <div className=" px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-md font-medium ">Released Year</dt>
            <dd className="mt-1 text-sm sm:mt-0 sm:col-span-2">
              {releasedYear}
            </dd>
          </div>
          <div className=" px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-md font-medium">Cast</dt>
            <dd className="mt-1 text-sm sm:mt-0 sm:col-span-2">
              {cast.map((c) => {
                return <span key={c}>{c}, </span>;
              })}
            </dd>
          </div>
          <div className="px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-md font-medium">Director</dt>
            <dd className="mt-1 text-sm sm:mt-0 sm:col-span-2">
              {director.map((d) => {
                return <span key={d}>{d}, </span>;
              })}
            </dd>
          </div>
          <div className="px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-md font-medium">Rating</dt>
            <dd className="mt-1 text-sm sm:mt-0 sm:col-span-2">
              <BiStar className="inline mb-2 text-xl" /> {rating}
            </dd>
          </div>
          <div className="px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-md font-medium">Description</dt>
            <dd className="mt-1 text-sm sm:mt-0 sm:col-span-2">
              {description}
            </dd>
          </div>
        </dl>
      </div>
    </div>
  );
};

export default MovieInfoCard;
