import { MovieScheduleProps, useGlobalContext } from "@/app/context";
import Link from "next/link";

const MovieSchedule = ({ showTime, poster, day }: MovieScheduleProps) => {
  const { setSelectedMovie } = useGlobalContext();
  return (
    <div className="mt-10 border rounded p-2 ">
      <div className="flex items-center justify-between">
        <h3 className="text-sm font-medium ">Time</h3>
        <p className="text-sm font-medium">3/28/2024</p>
      </div>

      <fieldset className="mt-4">
        <legend>Choose the time</legend>
        <div className="flex gap-4 lg:grid-cols-4">
          {showTime.map((time) => {
            return (
              <Link href={`/ticket-purchase`}>
              <button
                onClick={() =>
                  setSelectedMovie({
                    poster: poster,
                    day: day,
                    time:time,
                    showTime: showTime,
                  })
                }
                key={time}
                className="overflow-hidden p-2 h-auto bg-blue-700 hover:bg-blue-900 rounded-lg"
              >
                {time}
              </button>
              </Link>
            );
          })}
        </div>
      </fieldset>
    </div>
  );
};

export default MovieSchedule;
