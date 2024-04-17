import { Movie } from "@/app/data";
import SmallSize from "../imagesComponent/SmallSize";
import { AiFillDelete } from "react-icons/ai";
const Bookmark = ({ movie }: { movie: Movie }) => {
  return (
    <div className="lg:col-span-2  divide-y">
      <div className="flex items-start max-sm:flex-col gap-8 py-6">
        <SmallSize img={movie.poster} />
        <div className="flex items-start gap-6 max-md:flex-col w-full">
          <div>
            <h3 className="text-xl font-extrabold  mb-6">{movie.title}</h3>
            <div>
              <h6 className="text-md ">
                Tickets: <strong className="ml-2">5</strong>
              </h6>
              <h6 className="text-md  mt-2">
                Snacks: <strong className="ml-2">yes</strong>
              </h6>
            </div>
            <div className="mt-6 flex flex-wrap gap-6">
              <button
                type="button"
                className="btn font-semibold  text-sm flex items-center gap-2 shrink-0"
              >
                <AiFillDelete />
                Remove
              </button>
              <div className="badge badge-accent border rounded-md border-green-500 text-green-400">
                Pending
              </div>
            </div>
          </div>
          <div className="md:ml-auto md:text-right">
            <div className="mt-6">
              <h4 className="text-lg font-bold ">
                <p className=" mr-2 font-medium">220ETB</p>
              </h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bookmark;
