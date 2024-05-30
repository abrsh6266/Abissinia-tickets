import { setSelectedMovie } from "@/app/features/movie/movieSlice";
import { RootState } from "@/app/store/store";
import { Props } from "@/app/utils";
import { nanoid } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux";

const MovieSchedule = ({ times }: Props) => {
  const selectedMovie = useSelector(
    (state: RootState) => state.movieState.selectedMovie
  );
  const dispatch = useDispatch();
  return (
    <div className="mt-10">
      <div className="flex items-center justify-between">
        <h3 className="text-sm font-medium ">Time</h3>
        <p className="text-sm font-medium">3/28/2024</p>
      </div>
      <fieldset className="mt-4">
        <legend>Choose the time</legend>
        <div className="carousel carousel-end rounded-box flex-wrap justify-center md:justify-start">
          {times?.map((time) => {
            return (
              <button
                onClick={() => {
                  dispatch(
                    setSelectedMovie({
                      ...selectedMovie,
                      time: time,
                    })
                  );
                }}
                key={nanoid()}
                className={
                  selectedMovie?.time === time
                    ? "btn m-2 rounded-lg bg-blue-600 hover:bg-blue-600"
                    : "hover:bg-blue-600 btn m-2 rounded-lg"
                }
              >
                {time}
              </button>
            );
          })}
        </div>
      </fieldset>
    </div>
  );
};

export default MovieSchedule;
