"use client";
import { useState } from "react";
import SectionTitle from "../components/SectionTitle";
import { movie } from "../data";
import MovieDetail from "../components/movieDetailComponents/MovieDetail";
import PaginationContainer from "../components/PaginationContainer";

const Page = () => {
  const [movies, setMovies] = useState(movie);
  const handleFilter = (e: any) => {
    if (e.target.value != "") {
      const filteredMovies = movie.filter((m) =>
        m.showTime.some((s) => s.day === e?.target?.value)
      );
      setMovies(filteredMovies);
    } else setMovies(movie);
  };
  return (
    <div className="align-element">
      <div className="sm:flex md:grid md:grid-cols-2">
        <SectionTitle text={"showTimes"} />
        <div className="md:m-auto ml-2 relative h-10 w-72 min-w-[200px]">
          <select
            onChange={handleFilter}
            className="h-full w-full rounded-[7px]  disabled:border-0 select select-bordered"
            style={{ color: "#fff" }}
          >
            <option value="">none</option>
            <option value="Monday">
              Monday
            </option>
            <option value="Tuesday">
              Tuesday
            </option>
            <option value="Wednesday">
              Wednesday
            </option>
            <option value="Thursday">
              Thursday
            </option>
            <option value="Friday">
              Friday
            </option>
            <option value="Saturday">
              Saturday
            </option>
            <option value="Sunday">
              Sunday
            </option>
          </select>
          <label
            className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-gray-900 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-gray-900 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-gray-900 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500"
          >
            Select Day ...
          </label>
        </div>
      </div>
      <div className="md:text-2xl text-gray-200 sm:text-xl italic lg:mx-20">
        <p>
          Film schedule is updated and published on a weekly basis every Monday
          evening. You do not need to print the tickets - just present them to
          us via your mobile device when you arrive at the cinema. Ticket sales
          are subject to our Terms and Conditions.
        </p>
      </div>
      <div className="min-h-8 max-h-full m-4">
        {movies.map((m) => {
          return <MovieDetail key={m.id} movie={m} />;
        })}
      </div>
      <div className="align-element">
        <PaginationContainer />
      </div>
    </div>
  );
};

export default Page;
