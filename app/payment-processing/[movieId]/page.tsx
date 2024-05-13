"use client";
import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { IoMdArrowRoundBack } from "react-icons/io";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { snackAndDrinkData } from "../../data";
import { Props } from "@/app/movies/[movieId]/page";
import { setSelectedMovie } from "@/app/features/movie/movieSlice";
import { RootState } from "@/app/store/store";
import { movie as movies } from "@/app/data";
import { FaPaypal } from "react-icons/fa";

const PaymentDetail = ({ params }: Props) => {

  const [snacks, setSnacks] = useState(snackAndDrinkData);
  const [id, setId] = useState(params.movieId);
  const [movie, setMovie] = useState(() => {
    return movies.find((m) => m.id.toString() === id);
  });
  const selectedMovie = useSelector(
    (state: RootState) => state.movieState.selectedMovie
  );
  const dispatch = useDispatch();
  const router = useRouter();

  useEffect(() => {
    if (selectedMovie?.day === undefined && selectedMovie?.time === undefined) {
      //   toast.error("you have to select day, time and seats !", {
      //     position: toast.POSITION.TOP_RIGHT,
      //   });
      //   handleGoBack();
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
        seats: undefined,
      })
    );
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
        <div className="">
          <div className="">
            <p className="flex  text-lg border-b border-base-300 pb-2 mb-4">
              <span className="mr-2">Movie Name :</span>
              <span className="font-medium">{movie?.title}</span>
            </p>
            <p className="flex text-lg border-b border-base-300 pb-2 mb-4">
              <span className="mr-2">Date : </span>
              <span className="font-medium">Jan 20, 2024</span>
            </p>
            <p className="flex text-lg border-b border-base-300 pb-2 mb-4">
              <span className="mr-2">Time : </span>
              <span className="font-medium">10:00AM</span>
            </p>
            <p className="flex text-lg border-b border-base-300 pb-2 mb-4">
              <span className="mr-2">Seat Area : </span>
              <span className="font-medium">Standard</span>
            </p>
            <p className="flex text-lg border-b border-base-300 pb-2 mb-4">
              <span className="mr-2">Seats : </span>
              <span className="font-medium">AB, AC</span>
            </p>

            <p className="flex text-lg border-b border-base-300 pb-2 mb-4">
              <span className="mr-2">Extras : </span>
              <span className="font-medium">Yegebs kolo, Chips</span>
            </p>

            <p className="mt-4 flex justify-between text-lg font-bold  pb-2">
              <span className="font-bold">Total Price</span>
              <span className="font-bold">220ETB</span>
            </p>
          </div>
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
                <form method="dialog" className="p-4 ">
                  <div className="space-y-4">
                    <label className="input input-bordered flex items-center gap-2">
                      <input
                        type="text"
                        className="grow"
                        placeholder="Username"
                      />
                    </label>
                    <label className="input input-bordered flex items-center gap-2">
                      <input
                        type="tel"
                        id="phone"
                        className="grow"
                        placeholder="Enter your phone number"
                      />
                    </label>
                    <label className="block">Pay With</label>
                    <div className="flex space-x-4">
                      <FaPaypal size={24} />
                    </div>
                  </div>
                  <div className="flex justify-between items-center mt-4">
                    <button
                      className="btn bg-transparent border-2 text-red-700 border-red-700 rounded-lg px-6 mr-8"
                      onClick={() => dialogRef.current?.close()}
                    >
                      Close
                    </button>
                  </div>
                </form>
              </div>
            </dialog>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PaymentDetail;
