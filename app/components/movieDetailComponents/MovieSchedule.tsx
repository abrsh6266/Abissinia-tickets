import { Props, useGlobalContext } from "@/app/context";
import { nanoid } from "@reduxjs/toolkit";

const MovieSchedule = ({ times }: Props) => {
  const { setSelectedMovie, selectedMovie } = useGlobalContext();
  return (
    <div className="mt-10">
      <div className="flex items-center justify-between">
        <h3 className="text-sm font-medium ">Time</h3>
        <p className="text-sm font-medium">3/28/2024</p>
      </div>
      <fieldset className="mt-4">
        <legend>Choose the time</legend>
        <div className="flex gap-4 lg:grid-cols-4">
          {times?.map((time) => {
            return (
              <button
                onClick={() => {
                  setSelectedMovie((prevSelectedMovie) => ({
                    ...prevSelectedMovie,
                    time,
                  }));
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
