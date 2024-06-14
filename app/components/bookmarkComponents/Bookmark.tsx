import React from "react";
import SmallSize from "../imagesComponent/SmallSize";

// Define a type for the days of the week
type DayOfWeek = "Monday" | "Tuesday" | "Wednesday" | "Thursday" | "Friday" | "Saturday" | "Sunday";

// Mapping of days to their index for comparison
const daysOfWeek: Record<DayOfWeek, number> = {
  Monday: 1,
  Tuesday: 2,
  Wednesday: 3,
  Thursday: 4,
  Friday: 5,
  Saturday: 6,
  Sunday: 7,
};

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

  function isWatched(bookedDay: DayOfWeek, bookedTime: string): boolean {
    const currentDayIndex = new Date().getDay() === 0 ? 7 : new Date().getDay(); // getDay() returns 0 for Sunday
    const bookedDayIndex = daysOfWeek[bookedDay];

    if (currentDayIndex > bookedDayIndex) {
      return true;
    } else if (currentDayIndex === bookedDayIndex) {
      const currentTime = new Date().toLocaleTimeString("en-US", { hour: '2-digit', minute: '2-digit', hour12: true });
      return currentTime > bookedTime;
    } else {
      return false;
    }
  }

  const watched = isWatched(day as DayOfWeek, time);

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
            <div className={`badge ${watched ? 'badge-accent border rounded-md border-green-500 text-green-400' : 'badge-secondary border rounded-md border-yellow-500 text-yellow-400'}`}>
              {watched ? 'Watched' : 'Pending'}
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
