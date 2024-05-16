"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { setSelectedMovie } from "@/app/features/movie/movieSlice";
import { Props } from "@/app/movies/[movieId]/page";
import { movie as movies } from "@/app/data";
import Link from "next/link";
import { toast } from "react-toastify";
import { IoMdArrowRoundBack } from "react-icons/io";
import { PiArmchairFill } from "react-icons/pi";
import { RootState } from "@/app/store/store";

const Seats = ({ params }: Props) => {
  const [id, setId] = useState(params.movieId);
  const [movie, setMovie] = useState(() => {
    return movies.find((m) => m.id.toString() === id);
  });
  const selectedMovie = useSelector(
    (state: RootState) => state.movieState.selectedMovie
  );
  const dispatch = useDispatch();
  const router = useRouter();

  const handleSelectSeat = (id: any) => {
    dispatch(
      setSelectedMovie({
        ...selectedMovie,
        seats: selectedMovie?.seats?.map((seat) =>
          seat.id === id ? { ...seat, selected: !seat.selected } : seat
        ),
      })
    );
  };

  useEffect(() => {
    if (!selectedMovie?.time || selectedMovie?.totalSeat === 0) {
      toast.error("you have to select ticket type day and time !", {
        position: toast.POSITION.TOP_RIGHT,
      });
      handleGoBack();
    }
    dispatch(
      setSelectedMovie({
        ...selectedMovie,
        seats: Array.from({ length: 64 }, (_, index) => ({
          id: index + 1,
          selected: false,
          booked: index % 3 === 0,
        })),
      })
    );
  }, []);

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
      <div className="max-w-[600px] mb-[20px]">
        <div>
          <div className="grid grid-cols-8">
            {selectedMovie?.seats?.map((seat) => {
              return (
                <div
                  className="md:m-4 md:h-10 md:w-10 m-3 h-6 w-6"
                  key={seat?.id}
                >
                  <button
                    onClick={() => {
                      if (!seat.booked) handleSelectSeat(seat.id);
                    }}
                    className={`${
                      seat.selected ? "text-blue-700" : ""
                    } text-2xl md:text-5xl
                    ${
                      !seat.booked
                        ? "hover:text-blue-700 md:hover:text-6xl hover:text-4xl"
                        : "text-red-700"
                    }  duration-300 `}
                  >
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
        <Link href={`/extras-selection/${movie?.id}`}>
          <button className="btn border-2  bg-blue-700 rounded-lg px-4">
            Continue
          </button>
        </Link>
      </div>
    </section>
  );
};

export default Seats;
