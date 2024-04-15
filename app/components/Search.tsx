"use client";

import { FaSearch } from "react-icons/fa";
import { useGlobalContext } from "../context";

const Search = () => {
  const { setSearchTerm } = useGlobalContext();
  return (
    <div>
      <div className="flex flex-col p-2 py-6 mt-20">
        <div className="mx-auto border items-center justify-between w-full sm:max-w-3xl sm:mx-auto rounded-full flex shadow-lg p-2sticky">
          <input
            onChange={(e) => {
              setSearchTerm(e.currentTarget.value);
            }}
            className="font-bold uppercase rounded-full  w-full py-4 pl-4 input lg:text-sm text-xs border "
            type="text"
            name="search"
            placeholder="Search Movies"
          />
        </div>
      </div>
    </div>
  );
};

export default Search;
