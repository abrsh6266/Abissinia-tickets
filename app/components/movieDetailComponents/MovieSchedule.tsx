interface Props {
  showTime: string[];
}
const MovieSchedule = ({ showTime }: Props) => {
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
              <button
                key={time}
                className="overflow-hidden p-2 h-auto bg-blue-700 hover:bg-blue-900 rounded-lg"
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
