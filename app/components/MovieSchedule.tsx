interface Props {
  showTime: string[];
}
const MovieSchedule = ({ showTime }: Props) => {
  return (
    <div className="mt-10 border-2 rounded p-2">
      <div className="flex items-center justify-between">
        <h3 className="text-sm font-medium text-gray-200">Time</h3>
        <p
          className="text-sm font-medium text-gray-200"
        >
          3/28/2024
        </p>
      </div>

      <fieldset className="mt-4">
        <legend className="text-gray-200">Choose the time</legend>
        <div className="flex gap-4 lg:grid-cols-4">
            {
                showTime.map(time=>{
                    return <button key={time} className="overflow-hidden p-2 h-auto bg-gray-700 text-white border-none rounded-md text-xl font-bold cursor-pointer relative z-10 group">
                    {time}
                    <span className="absolute w-36 h-32 -top-8 -left-2 bg-white rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-500 duration-1000 origin-left"></span>
                    <span className="absolute w-36 h-32 -top-8 -left-2 bg-purple-400 rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-700 duration-700 origin-left"></span>
                    <span className="absolute w-36 h-32 -top-8 -left-2 bg-purple-600 rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-1000 duration-500 origin-left"></span>
                    <span className="group-hover:opacity-100 group-hover:duration-1000 duration-100 opacity-0 absolute top-2 left-3 z-10">
                      Choose
                    </span>
                  </button>
                })
            }
        </div>
      </fieldset>
    </div>
  );
};

export default MovieSchedule;
