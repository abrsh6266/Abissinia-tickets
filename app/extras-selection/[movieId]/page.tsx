"use client";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { IoMdArrowRoundBack } from "react-icons/io";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Movie2, SnackAndDrink } from "../../data";
import { Props } from "@/app/movies/[movieId]/page";
import Link from "next/link";
import { toast } from "react-toastify";
import Extra from "@/app/components/extrasComponents/Extra";
import {
  ExtraItem,
  resetExtraPrice,
  setExtras,
  setSelectedMovie,
} from "@/app/features/movie/movieSlice";
import { RootState } from "@/app/store/store";
import { useFetchData2 } from "@/api/getData";

const Extras = ({ params }: Props) => {
  const [id, setId] = useState(params.movieId);
  const { data: snacks1 } = useFetchData2("snacks");
  const { data: movie1 } = useFetchData2(`movies/${id}`);
  const [movie, setMovie] = useState<Movie2>(movie1);
  const [snacks, setSnacks] = useState<SnackAndDrink[]>([]);
  useEffect(() => {
    if (snacks1) {
      setSnacks(snacks1);
    }
    if (movie1) {
      setMovie(movie1);
    }
  }, [snacks1, movie1]);
  const handleSelectExtras = (selectedExtras: ExtraItem) => {
    dispatch(setExtras({ selectedExtras }));
  };

  const selectedMovie = useSelector(
    (state: RootState) => state.movieState.selectedMovie
  );
  const dispatch = useDispatch();
  const router = useRouter();

  useEffect(() => {
    if (!selectedMovie?.seats?.length) {
      toast.error("you have to select seats !", {
        position: toast.POSITION.TOP_RIGHT,
      });
      handleGoBack();
    }
    dispatch(resetExtraPrice());
  }, []);

  const handleGoBack = () => {
    router.back();
  };

  if (snacks)
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
          <img
            src={movie?.poster}
            alt={movie?.title}
            className="object-cover w-full h-[200px] md:h-[250px] lg:h-[400px] xl:h-[500px] rounded-lg"
          />
        </div>
        <div>
          <div className="carousel carousel-end rounded-box mt-10">
            <div className="ml-2 col-span-full my-2">
              <h1 className="capitalize tracking-wide no-underline hover:no-underline font-bold  text-2xl ">
                Select Your Extras
              </h1>
            </div>
          </div>
        </div>
        <div className="min-h-[180px]">
          <button className="px-6">
            <span className="font-bold text-dm">
              Total Price: {selectedMovie?.totalPrice}.0ETB
            </span>
          </button>
          <button
            onClick={handleGoBack}
            className="btn bg-transparent border-2 text-red-700 border-red-700 rounded-lg px-6 mr-8"
          >
            cancel
          </button>
          <Link href={`/payment-processing/${movie?._id}`}>
            <button className="btn border-2  bg-blue-700 rounded-lg px-4">
              Continue
            </button>
          </Link>
        </div>
        <div className="xl:max-w-[1200px] mb-[20px] flex flex-wrap gap-2 xl:gap-6">
          {snacks.map((snack) => {
            return (
              <Extra
                key={snack._id}
                snack={snack}
                handleSelectExtras={handleSelectExtras}
              />
            );
          })}
        </div>
      </section>
    );
};

export default Extras;
