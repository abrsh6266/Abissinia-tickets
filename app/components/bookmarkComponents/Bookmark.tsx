import React from "react";
import SmallSize from "../imagesComponent/SmallSize";

const Bookmark = ({ booking }: { booking: any }) => {
  const { movieShowId, seats, order, status, day, time, bookingDate } = booking;
  const { movieId, hallId, showTime } = movieShowId;
  const snacks = order.snacks
    .map((snack: any) => snack.snackId.name)
    .join(", ");
  const seatNumbers = seats.booked
    .map((seat: any) => seat.seatNumber)
    .join(", ");
  function formatDate(dateString: string): string {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
      second: "numeric",
    });
  }
  return (
    <div className="flex items-start max-sm:flex-col gap-8 py-6">
      <SmallSize img={movieId.poster} />
      <div className="flex items-start gap-6 max-md:flex-col w-full">
        <div>
          <h3 className="text-xl font-extrabold mb-6">{movieId.title}</h3>
          <div>
            <h6 className="text-md mt-2">
              Date: <strong className="ml-2">{formatDate(bookingDate)}</strong>
            </h6>
            <h6 className="text-md ">
              Seats: <strong className="ml-2">{seatNumbers}</strong>
            </h6>
            <h6 className="text-md mt-2">
              Snacks: <strong className="ml-2">{snacks}</strong>
            </h6>
            <h6 className="text-md mt-2">
              Hall: <strong className="ml-2">{hallId.name}</strong>
            </h6>
            <h6 className="text-md mt-2">
              Price: <strong className="ml-2">{order.price}ETB</strong>
            </h6>
            <h6 className="text-md mt-2">
              Day: <strong className="ml-2">{day}</strong>
            </h6>
            <h6 className="text-md mt-2">
              Time: <strong className="ml-2">{time}</strong>
            </h6>
          </div>
          <div className="mt-6 flex flex-wrap gap-6">
            <div className="badge badge-accent border rounded-md border-green-500 text-green-400">
              {status.charAt(0).toUpperCase() + status.slice(1)}
            </div>
          </div>
        </div>
        <div className="md:ml-auto md:text-right">
          <div className="mt-6">
            <h4 className="text-lg font-bold">
              <p className="mr-2 font-medium">{order.price}ETB</p>
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bookmark;
