"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import {
  setGlobalSeats,
  setSeat,
  setSelectedMovie,
} from "@/app/features/movie/movieSlice";
import { Props } from "@/app/movies/[movieId]/page";
import Link from "next/link";
import { toast } from "react-toastify";
import { IoMdArrowRoundBack } from "react-icons/io";
import { PiArmchairFill } from "react-icons/pi";
import { RootState } from "@/app/store/store";
import useFetchData from "@/api/getData";
import { Movie2 } from "@/app/data";

const Seats = ({ params }: Props) => {
  const [id, setId] = useState(params.movieId);
  const { data, isLoading, isError } = useFetchData(`movies/${id}`);
  const [movie, setMovie] = useState<Movie2>(data);
  useEffect(() => {
    if (data) {
      setMovie(data);
    }
  }, [data]);
  const selectedMovie = useSelector(
    (state: RootState) => state.movieState.selectedMovie
  );
  const seats = useSelector((store: RootState) => store.movieState.seats);
  const dispatch = useDispatch();
  const router = useRouter();
  const [validChoose, setValidChoose] = useState(selectedMovie?.totalSeat || 0);
  const handleSelectSeat = (id: number) => {
    const existingSeatIndex = selectedMovie?.seats
      ? selectedMovie?.seats.findIndex((s) => s === id)
      : -1;
    if (validChoose >= 1 || existingSeatIndex !== -1) {
      dispatch(
        setSeat({
          id,
        })
      );

      setValidChoose(
        existingSeatIndex !== -1 ? validChoose + 1 : validChoose - 1
      );
    } else {
      toast.error("you have no left seats to choose");
    }
  };

  useEffect(() => {
    if (!selectedMovie?.time || selectedMovie?.totalSeat === 0) {
      toast.error("you have to select ticket type day and time !", {
        position: toast.POSITION.TOP_RIGHT,
      });
      handleGoBack();
    }
  }, []);

  const handleGoBack = () => {
    dispatch(
      setSelectedMovie({
        ...selectedMovie,
        seats: [],
      })
    );
    dispatch(setGlobalSeats());
    router.back();
  };

  if (movie)
    return (
      <section className="grid place-items-center overflow-hidden">
        <div className="relative w-full px-2 md:px-10 lg:px-20 rounded-lg shadow-lg">
          <div className="ml-2 col-span-full my-2 align-element">
            <h1
              onClick={handleGoBack}
              className="uppercase tracking-wide no-underline rounded-full font-bold  text-4xl lg:mb-10 btn"
            >
              <IoMdArrowRoundBack />
            </h1>
          </div>
          <img
            src={movie?.poster || "img"}
            alt={movie?.title || "poster"}
            className="object-cover w-full h-[200px] md:h-[250px] lg:h-[400px] xl:h-[500px] rounded-lg"
          />
        </div>
        <div>
          <div className="carousel carousel-end rounded-box mt-10">
            <div className="ml-2 col-span-full my-2">
              <h1 className="capitalize tracking-wide no-underline hover:no-underline font-bold  text-2xl ">
                Select Your Seats
              </h1>
            </div>
          </div>
        </div>
        <div className="ml-2 col-span-full my-2">
          <h1 className="tracking-wide no-underline hover:no-underline font-bold">
            Select your seats by clicking your preferred seat from the available
            seats.
          </h1>
        </div>
        <div className="min-h-[180px]">
          <button className="px-6">
            <PiArmchairFill className="text-blue-700 text-6xl" />
            <h1 className="text-sm ">Selected</h1>
          </button>
          <button className="text-4xl px-6">
            <PiArmchairFill className="text-red-700 text-6xl" />
            <h1 className="text-sm">Booked</h1>
          </button>
          <button className="text-4xl px-6">
            <PiArmchairFill className="text-6xl" />
            <h1 className="text-sm">Available</h1>
          </button>
        </div>
        <div>
          <h1 className="text-md">
            Only {selectedMovie?.seatType} seats will be Selected
          </h1>
        </div>
        <div className="max-w-[600px] mb-[20px]">
          <div>
            <div className="grid grid-cols-8">
              {seats.map((seat) => {
                return (
                  <div
                    className="md:m-4 md:h-10 md:w-10 m-3 h-6 w-6"
                    key={seat?.id}
                  >
                    <button
                      onClick={() => {
                        if (
                          !seat.booked &&
                          seat.seatType === selectedMovie?.seatType
                        )
                          handleSelectSeat(seat.id);
                      }}
                      className={`indicator ${
                        seat.selected ? "text-blue-700" : ""
                      } text-2xl md:text-5xl
                    ${
                      !(
                        seat.booked ||
                        !(seat.seatType === selectedMovie?.seatType)
                      )
                        ? "hover:text-blue-700 md:hover:text-6xl hover:text-4xl"
                        : !(seat.seatType === selectedMovie?.seatType)
                        ? "text-gray-700"
                        : "text-red-700"
                    }  duration-300 `}
                    >
                      <span className="indicator-item badge badge-secondary bg-transparent  border-0">
                        {seat.id}
                      </span>
                      <PiArmchairFill />
                    </button>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div className="mt-5 flex">
          <button
            onClick={handleGoBack}
            className="btn bg-transparent border-2 text-red-700 border-red-700 rounded-lg px-6 mr-8"
          >
            cancel
          </button>
          <button
            className="btn border-2  bg-blue-700 rounded-lg px-4"
            disabled={validChoose !== 0}
          >
            <Link
              className="btn bg-transparent border-hidden"
              href={`/extras-selection/${movie?._id}`}
            >
              Continue
            </Link>
          </button>
        </div>
      </section>
    );
};

export default Seats;
