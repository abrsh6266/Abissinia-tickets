import { genres } from "../../data";
const Genre = () => {
  return (
    <div className="sticky flex flex-col gap-2 p-4 text-sm md:border-r ">
      <h2 className="pl-3 mb-4 text-3xl font-semibold">Genres</h2>
      {genres.map((g) => {
        return (
          <a
            key={g}
            href="#"
            className="flex items-center font-semibold px-3 py-2.5 border border-black btn hover:border-blue-700 rounded-xl text-2xl"
          >
            {g}
          </a>
        );
      })}
    </div>
  );
};

export default Genre;
