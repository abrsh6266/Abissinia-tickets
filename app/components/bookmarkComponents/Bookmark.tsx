import React from "react";
import SmallSize from "../imagesComponent/SmallSize";

interface BookingProps {
  booking: {
    movieShowId: {
      movieId: {
        poster: string;
        title: string;
      };
      hallId: {
        name: string;
      };
      showTime: any[];
    };
    seats: {
      booked: { seatNumber: string }[];
    };
    order: {
      snacks: { snackId: { name: string } }[];
      price: number;
    };
    status: string;
    day: string; // assuming this is still needed for some other reason
    time: string;
    bookingDate: string;
  };
}

const Bookmark = ({ booking }: BookingProps) => {
  const { movieShowId, seats, order, bookingDate,day } = booking;
  const { movieId, hallId } = movieShowId;
  const snacks = order.snacks.map((snack) => snack.snackId.name).join(", ");
  const seatNumbers = seats.booked.map((seat) => seat.seatNumber).join(", ");

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

  function isWatched(bookedDate: string, bookedTime: string): boolean {
    const currentDateTime = new Date();
    const bookedDateTime = new Date(
      `${bookedDate}T${bookedTime}`.substring(0, 24)
    );
    console.log("CURRENT TIME", currentDateTime);
    console.log("BOOKED TIME", bookedDateTime);

    return currentDateTime > bookedDateTime;
  }

  const watched = isWatched(day, booking.time);

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
            <h6 className="text-md">
              Seats: <strong className="ml-2">{seatNumbers}</strong>
            </h6>
            <h6 className="text-md mt-2">
              Snacks: <strong className="ml-2">{snacks}</strong>
            </h6>
            <h6 className="text-md mt-2">
              Hall: <strong className="ml-2">{hallId.name}</strong>
            </h6>
            <h6 className="text-md mt-2">
              Price: <strong className="ml-2">{order.price} ETB</strong>
            </h6>
            <h6 className="text-md mt-2">
              Day: <strong className="ml-2">{booking.day}</strong>
            </h6>
            <h6 className="text-md mt-2">
              Time: <strong className="ml-2">{booking.time}</strong>
            </h6>
          </div>
          <div className="mt-6 flex flex-wrap gap-6">
            <div
              className={`badge ${
                watched
                  ? "badge-accent border rounded-md border-green-500 text-green-400"
                  : "badge-secondary border rounded-md border-yellow-500 text-yellow-400"
              }`}
            >
              {watched ? "Watched" : "Pending"}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bookmark;
