"use client";
import React from "react";
import { useGlobalContext } from "../context";
import { IoMdArrowRoundBack } from "react-icons/io";
import Image from "next/image";
import { useRouter } from "next/navigation";

const Tickets = () => {
  const { selectedMovie } = useGlobalContext();
  const router = useRouter();
  const handleGoBack = () => {
    router.back();
  };
  return (
    <section className="h-screen grid place-items-center">
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
          src={selectedMovie?.poster || "img"}
          alt={selectedMovie?.day || "poster"}
          className="object-cover w-full h-[200px] md:h-[250px] lg:h-[350px] xl:h-[400px] rounded-lg"
        />
      </div>
      <div className="max-w-[600px]">
        <div >
        <label htmlFor="seat" className="capitalize mb-2">Choose seat area </label>
        <select name="seat" className="select select-info select-lg w-full max-w-xs">
          <option disabled selected>
            Standard
          </option>
          <option>English</option>
          <option>Japanese</option>
          <option>Italian</option>
        </select>
        </div>
      </div>
    </section>
  );
};

export default Tickets;
