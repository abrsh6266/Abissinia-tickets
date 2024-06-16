import { genres, gridSquareVariant, squareVariant } from "../../data";
import { motion } from "framer-motion";

interface GenreProps {
  onGenreSelect: (genre: string) => void;
}

const Genre = ({ onGenreSelect }: GenreProps) => {
  return (
    <motion.div
      className="sticky flex flex-col gap-2 p-4 text-sm md:border-r overflow-auto h-[500px]"
      variants={gridSquareVariant}
      initial="hidden"
      animate="show"
    >
      <h2 className="pl-3 mb-4 text-3xl font-semibold">Genres</h2>
      {genres.map((g) => (
        <motion.button
          key={g}
          variants={squareVariant}
          className="flex items-center font-semibold px-3 py-2.5 border border-black btn hover:border-blue-700 rounded-xl text-2xl"
          onClick={() => onGenreSelect(g)}
        >
          {g}
        </motion.button>
      ))}
    </motion.div>
  );
};

export default Genre;
