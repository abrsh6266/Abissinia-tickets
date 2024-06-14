import React from "react";
import SmallSize from "../imagesComponent/SmallSize";

const daysOfWeek = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

function getNextDate(day: string, time: string): Date {
  const now = new Date();
  const todayDayIndex = now.getDay();
  console.log(todayDayIndex);
  const targetDayIndex = daysOfWeek.indexOf(day);
  let daysUntilTarget = targetDayIndex - todayDayIndex;

  if (daysUntilTarget < 0) {
    daysUntilTarget += 7; // Adjust for next week
  }

  const targetDate = new Date(now);
  targetDate.setDate(now.getDate() + daysUntilTarget);

  const [hours, minutes] = time.split(":");
  const period = time.split(" ")[1];
  let adjustedHours = parseInt(hours);

  if (period === "PM" && adjustedHours !== 12) {
    adjustedHours += 12;
  } else if (period === "AM" && adjustedHours === 12) {
    adjustedHours = 0;
  }

  targetDate.setHours(adjustedHours, parseInt(minutes), 0, 0);

  return targetDate;
}

const Bookmark = ({ booking }: { booking: any }) => {
  const { movieShowId, seats, order, status, day, time, bookingDate } = booking;
  const { movieId, hallId } = movieShowId;
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

  const currentDateTime = new Date();
  const showDateTime = getNextDate(day, time);
  const isWatched = currentDateTime > showDateTime;

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
              Day: <strong className="ml-2">{day}</strong>
            </h6>
            <h6 className="text-md mt-2">
              Time: <strong className="ml-2">{time}</strong>
            </h6>
          </div>
          <div className="mt-6 flex flex-wrap gap-6">
            <div
              className={`badge ${
                isWatched
                  ? "badge-accent border rounded-md border-green-500 text-green-400"
                  : "badge-warning border rounded-md border-yellow-500 text-black"
              }`}
            >
              {isWatched ? "Watched" : "Pending"}
            </div>
          </div>
        </div>
        <div className="md:ml-auto md:text-right">
          <div className="mt-6">
            <h4 className="text-lg font-bold">
              <p className="mr-2 font-medium">{order.price} ETB</p>
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bookmark;
