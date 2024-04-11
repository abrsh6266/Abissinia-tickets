"use client";
import React from "react";
import { useGlobalContext } from "../context";
import Image from "next/image";
interface Props {
  params: {
    movieId: string;
  };
}
const Tickets = () => {
  const { selectedMovie } = useGlobalContext();
  return (
    <section className="h-screen grid place-items-center">
      <div className="relative ml-4 mr-4 md:ml-10 border border-red-900 md:mr-10 mx-1 rounded-lg shadow-lg">
        <Image
          src={selectedMovie?.poster || "img"}
          alt={selectedMovie?.day || "poster"}
          className="object-cover w-full h-full rounded-lg"
        />
      </div>
    </section>
  );
};

export default Tickets;
