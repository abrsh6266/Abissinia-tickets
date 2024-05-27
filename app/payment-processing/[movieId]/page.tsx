"use client";
import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { IoMdArrowRoundBack } from "react-icons/io";
import { useRouter } from "next/navigation";
import { Props } from "@/app/movies/[movieId]/page";
import { RootState } from "@/app/store/store";
import SelectionDetails from "@/app/components/movieDetailComponents/SelectionDetails";
import PaymentProcess from "@/app/components/paymentComponent/PaymentProcess";
import { toast } from "react-toastify";
import useFetchData from "@/api/getData";
import { Movie2, SnackAndDrink } from "@/app/data";

const PaymentDetail = ({ params }: Props) => {
  const [id, setId] = useState(params.movieId);
  const { data: snacks1 } = useFetchData("snacks");
  const { data: movie1 } = useFetchData(`movies/${id}`);
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
  const selectedMovie = useSelector(
    (state: RootState) => state.movieState.selectedMovie
  );
  const dispatch = useDispatch();
  const router = useRouter();
  useEffect(() => {
    if (!selectedMovie?.seats?.length) {
      toast.error("you have to select can not proceed to payment!", {
        position: toast.POSITION.TOP_RIGHT,
      });
      handleGoBack();
    }
  }, []);

  const handleGoBack = () => {
    router.back();
  };
  //modal

  const dialogRef = useRef<HTMLDialogElement | null>(null);

  const openModal = () => {
    if (dialogRef.current) {
      dialogRef.current.showModal();
    }
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
              your order details
            </h1>
          </div>
        </div>
      </div>
      <div className="min-h-[180px]">
        <div className="">
          <SelectionDetails movie={movie} />
          <button
            onClick={handleGoBack}
            className="btn bg-transparent border-2 text-red-700 border-red-700 rounded-lg px-6 mr-8"
          >
            cancel
          </button>
          <button
            className="btn border-2  bg-blue-700 rounded-lg px-4"
            onClick={openModal}
          >
            proceed to Payment
          </button>
          <div>
            <dialog className="modal bg-gray-700 " ref={dialogRef}>
              <div className="modal-box max-w-80 rounded-2xl">
                <PaymentProcess />
              </div>
            </dialog>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PaymentDetail;
