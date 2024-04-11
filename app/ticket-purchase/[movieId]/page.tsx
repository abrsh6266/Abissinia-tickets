"use client";
import React, { useState } from "react";
import { useGlobalContext } from "../../context";
import { IoMdArrowRoundBack } from "react-icons/io";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { nanoid } from "@reduxjs/toolkit";
import { movie as movies } from "../../data";
import { Props } from "@/app/movies/[movieId]/page";
import MovieSchedule from "@/app/components/movieDetailComponents/MovieSchedule";

const Tickets = ({ params }: Props) => {
  const [id, setId] = useState(params.movieId);
  const [movie, setMovie] = useState(() => {
    return movies.find((m) => m.id.toString() === id);
  });
  const { selectedMovie, showTimes, setSelectedMovie } = useGlobalContext();
  const router = useRouter();
  const handleGoBack = () => {
    router.back();
  };
  return (
    <section className="grid place-items-center">
      <div className="relative w-full ml-4 mr-4 md:ml-10 md:mr-10 mx-1 rounded-lg shadow-lg">
        <div className="ml-2 col-span-full my-2 align-element">
          <h1
            onClick={handleGoBack}
            className="uppercase tracking-wide no-underline rounded-full font-bold  text-4xl lg:mb-10 btn"
          >
            <IoMdArrowRoundBack />
          </h1>
        </div>
        <Image
          src={movie?.poster || "img"}
          alt={movie?.title || "poster"}
          className="object-cover w-full h-[200px] md:h-[250px] lg:h-[350px] xl:h-[400px] rounded-lg"
        />
      </div>
      <div>
        <div className="carousel carousel-end rounded-box">
          {movie?.showTime?.map((show) => {
            return (
              <div key={nanoid()}  className="carousel-item">
                <button
                  onClick={() => {
                    setSelectedMovie((prevSelectedMovie) => ({
                      ...prevSelectedMovie,
                      day: show.day,
                      times: show.times,
                      time: undefined,
                    }));
                  }}
                  className={
                    show.day === selectedMovie?.day
                      ? "btn m-2 rounded-lg bg-blue-600 hover:bg-blue-600"
                      : "hover:bg-blue-600 btn m-2 rounded-lg"
                  }
                >
                  {show.day}
                </button>
              </div>
            );
          })}
        </div>
        <div className="min-h-[180px]">
          {selectedMovie?.times !== undefined && (
            <MovieSchedule times={selectedMovie.times} />
          )}
        </div>
      </div>
      <div className="max-w-[600px] mb-[20px]">
        <div>
          <label htmlFor="seat" className="capitalize mb-2">
            Choose seat area{" "}
          </label>
          <select
            name="seat"
            className="select select-info select-lg w-full max-w-xs"
          >
            <option disabled selected>
              Standard
            </option>
            <option>English</option>
            <option>Japanese</option>
            <option>Italian</option>
          </select>
        </div>
      </div>
      <div className="overflow-x-auto">
        <label htmlFor="#x" className="capitalize mb-2">
          Choose your tickets
        </label>
        <table id="x" className="table table-zebra">
          {/* head */}
          <thead className="bg-blue-700  text-lg">
            <tr>
              <th>Ticket</th>
              <th>Price</th>
              <th>Quantity</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Adult 2D</td>
              <td>100ETB</td>
              <td>
                <select
                  name="ticket"
                  className="select select-info select-lg w-full max-w-xs"
                >
                  <option disabled selected>
                    none
                  </option>
                  {[...Array(8)].map((_, index) => (
                    <option key={index + 1}>{index + 1}</option>
                  ))}
                </select>
              </td>
            </tr>
            <tr>
              <td>Senior 2D</td>
              <td>120ETB</td>
              <td>
                <select
                  name="ticket"
                  className="select select-info select-lg w-full max-w-xs"
                >
                  <option disabled selected>
                    none
                  </option>
                  {[...Array(8)].map((_, index) => (
                    <option key={index + 1}>{index + 1}</option>
                  ))}
                </select>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default Tickets;
