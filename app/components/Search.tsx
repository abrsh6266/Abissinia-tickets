"use client";

import { FaSearch } from "react-icons/fa";
import { useGlobalContext } from "../context";

const Search = () => {
  const { setSearchTerm } = useGlobalContext();
  const handleSubmit = (e: any) => {
    e.preventDefault();
    const searchValue = e.target.elements.search.value;
    setSearchTerm(searchValue);
  };
  return (
    <div>
      <div className="flex flex-col p-2 py-6 mt-20">
        <form action="" onSubmit={handleSubmit}>
          <div className="bg-white items-center justify-between w-full sm:max-w-3xl sm:mx-auto rounded-full flex shadow-lg p-2sticky">
            <input
              className="font-bold uppercase rounded-full  w-full py-4 pl-4 text-gray-700 bg-gray-100 leading-tight focus:outline-none focus:shadow-outline lg:text-sm text-xs"
              type="text"
              name="search"
              placeholder="Search"
            />
            <div className="bg-gray-600 p-2 hover:bg-blue-400 cursor-pointer mx-2 rounded-full">
              <button type="submit">
                <FaSearch className="text-2xl" />
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Search;
