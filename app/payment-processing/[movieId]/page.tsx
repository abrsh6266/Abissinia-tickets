"use client";
import React, { useEffect, useState } from "react";
import { useGlobalContext } from "../../context";
import { IoMdArrowRoundBack } from "react-icons/io";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { movie as movies, SnackAndDrink, snackAndDrinkData } from "../../data";
import { Props } from "@/app/movies/[movieId]/page";
import Link from "next/link";
import { toast } from "react-toastify";
import Extra from "@/app/components/extrasComponents/Extra";

const Extras = ({ params }: Props) => {
  const [snacks, setSnacks] = useState<SnackAndDrink[]>(snackAndDrinkData);
  const [id, setId] = useState(params.movieId);
  const [movie, setMovie] = useState(() => {
    return movies.find((m) => m.id.toString() === id);
  });
  const { selectedMovie, setSelectedMovie } = useGlobalContext();
  const router = useRouter();
  useEffect(() => {
    if (selectedMovie?.day === undefined && selectedMovie?.time === undefined) {
      //   toast.error("you have to select day, time and seats !", {
      //     position: toast.POSITION.TOP_RIGHT,
      //   });
      //   handleGoBack();
    }
    setSelectedMovie((prev) => ({
      ...prev,
      seats: Array.from({ length: 64 }, (_, index) => ({
        id: index + 1,
        selected: false,
        booked: index % 3 === 0,
      })),
    }));
  }, []);
  const handleGoBack = () => {
    setSelectedMovie((prev) => ({
      ...prev,
      times: undefined,
      time: undefined,
      day: undefined,
      seats: undefined,
    }));
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
              your order details
            </h1>
          </div>
        </div>
      </div>
      <div className="min-h-[180px]">
        
      </div>
    </section>
  );
};

export default Extras;
