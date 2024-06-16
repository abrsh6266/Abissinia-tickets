// Genre.tsx
import { genres, gridSquareVariant, squareVariant } from "../../data";
import { motion } from "framer-motion";

const Genre = ({ setGenre }: { setGenre: (genre: string) => void }) => {
  return (
    <motion.div
      className="sticky flex flex-col gap-2 p-4 text-sm md:border-r overflow-auto h-[500px]"
      variants={gridSquareVariant}
      initial="hidden"
      animate="show"
    >
      <h2 className="pl-3 mb-4 text-3xl font-semibold">Genres</h2>
      {genres.map((g) => {
        return (
          <motion.a
            variants={squareVariant}
            key={g}
            href="#"
            onClick={() => setGenre(g)} // Set genre on click
            className="flex items-center font-semibold px-3 py-2.5 border border-black btn hover:border-blue-700 rounded-xl text-2xl"
          >
            {g}
          </motion.a>
        );
      })}
    </motion.div>
  );
};

export default Genre;
