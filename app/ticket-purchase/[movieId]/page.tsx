"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { nanoid } from "@reduxjs/toolkit";
import { useSelector, useDispatch } from "react-redux";
import { setSelectedMovie, setTickets } from "@/app/features/movie/movieSlice";
import { Props } from "@/app/movies/[movieId]/page";
import { movie as movies } from "@/app/data";
import MovieSchedule from "@/app/components/movieDetailComponents/MovieSchedule";
import Link from "next/link";
import { RootState } from "@/app/store/store";
import { IoMdArrowRoundBack } from "react-icons/io";

const Tickets = ({ params }: Props) => {
  const [id, setId] = useState(params.movieId);
  const [movie, setMovie] = useState(() => {
    return movies.find((m) => m.id.toString() === id);
  });
  const { selectedMovie } = useSelector((state: RootState) => state.movieState);
  const dispatch = useDispatch();
  const router = useRouter();
  const [childAmount, setChildAmount] = useState(
    selectedMovie?.tickets?.find((ticket) => ticket.ticketType === "child")
      ?.amount || 0
  );
  const [adultAmount, setAdultAmount] = useState(
    selectedMovie?.tickets?.find((ticket) => ticket.ticketType === "adult")
      ?.amount || 0
  );
  const [seatType, setSeatType] = useState(
    selectedMovie?.seatType || "standard"
  );
  useEffect(() => {
    dispatch(
      setSelectedMovie({
        ...selectedMovie,
        seatType: seatType,
      })
    );
    dispatch(
      setTickets({
        ticketType: "child",
        amount: childAmount,
      })
    );
    dispatch(
      setTickets({
        ticketType: "adult",
        amount: adultAmount,
      })
    );
  }, [childAmount, adultAmount,seatType]);
  const handleGoBack = () => {
    dispatch(
      setSelectedMovie({
        ...selectedMovie,
        times: undefined,
        time: undefined,
        day: undefined,
        movie: undefined,
        seats: undefined,
        tickets: undefined,
        totalSeat: undefined,
      })
    );
    router.back();
  };

  return (
    <section className="grid place-items-center overflow-x-hidden">
      <div className="relative w-full px-2 md:px-10 lg:px-20 rounded-lg shadow-lg">
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
          className="object-cover w-full h-[200px] md:h-[250px] lg:h-[400px] xl:h-[500px] rounded-lg"
        />
      </div>
      <div>
        <label htmlFor="seat" className="capitalize mb-2 block mt-4 ml-2">
          Choose The day
        </label>
        <div className="carousel carousel-end rounded-box">
          {movie?.showTime?.map((show) => {
            return (
              <div key={nanoid()} className="carousel-item">
                <button
                  onClick={() => {
                    dispatch(
                      setSelectedMovie({
                        ...selectedMovie,
                        day: show.day,
                        tickets: [],
                        totalSeat: 0,
                        movie: movie,
                        times: show.times,
                        time: undefined,
                        seats: [],
                      })
                    );
                    setSeatType("standard");
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
            value={seatType}
            onChange={(e) => {
              setSeatType(e.currentTarget.value);
            }}
            name="seat"
            className="select select-info select-lg w-full max-w-xs"
          >
            <option value={"standard"}>Standard</option>
            <option value={"sofa"}>Sofa</option>
            <option value={"premier"}>Premier</option>
          </select>
        </div>
      </div>
      <div className="ml-2 mr-2">
        <label htmlFor="#x" className="capitalize mb-2">
          Choose your tickets
        </label>
        <table id="x" className="md:table">
          <thead className="bg-blue-700  md:text-lg">
            <tr>
              <th>Ticket</th>
              <th>Price</th>
              <th>Quantity</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Adult</td>
              <td>120ETB</td>
              <td>
                <select
                  onChange={(e) => {
                    setAdultAmount(Number.parseInt(e.currentTarget.value));
                  }}
                  name="ticket"
                  className="select select-info select-lg w-full max-w-xs mt-4 md:mt-0 mx-1 md:mx-0"
                  value={adultAmount}
                >
                  <option value={0}>none</option>
                  {[...Array(8)].map((_, index) => (
                    <option value={index + 1} key={index + 1}>
                      {index + 1}
                    </option>
                  ))}
                </select>
              </td>
            </tr>
            <tr>
              <td>Child</td>
              <td>100ETB</td>
              <td>
                <select
                  onChange={(e) => {
                    setChildAmount(Number.parseInt(e.currentTarget.value));
                  }}
                  name="ticket"
                  className="select select-info select-lg w-full max-w-xs mt-4 md:mt-0 mx-1 md:mx-0"
                  value={childAmount}
                >
                  <option value={0}>none</option>
                  {[...Array(8)].map((_, index) => (
                    <option value={index + 1} key={index + 1}>
                      {index + 1}
                    </option>
                  ))}
                </select>
              </td>
            </tr>
          </tbody>
          <div className="mt-5 flex">
            <button
              onClick={handleGoBack}
              className="btn bg-transparent border-2 text-red-700 border-red-700 rounded-lg px-6 mr-8"
            >
              cancel
            </button>
            <Link href={`/seat-selection/${movie?.id}`}>
              <button className="btn border-2  bg-blue-700 rounded-lg px-4">
                Continue
              </button>
            </Link>
          </div>
        </table>
      </div>
    </section>
  );
};

export default Tickets;
