import React, { useEffect, useState } from "react";
import { useFetchData2 } from "@/api/getData";
import { useSelector } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";
import Loading from "../common/Loading";
import Bookmark from "../bookmarkComponents/Bookmark";
import { RootState } from "@/app/store/store";

const ApprovedBooking = () => {
  const user = useSelector((state: RootState) => state.userState.user);
  let [total, setTotal] = useState(0);
  const { data, isLoading, isError } = useFetchData2(
    `bookings/user/${user?.id}`
  );

  useEffect(() => {
    setTotal((cur) => {
      let tot = 0;
      if (data?.length > 0) {
        data.forEach((booking: any) => {
          tot += booking.price;
        });
      }
      return tot;
    });
  }, [data]);

  if (isLoading) {
    return (
      <main className="w-full min-h-screen py-1 md:w-2/3 lg:w-3/4">
        <div className="p-2 md:p-4">
          <Loading />
        </div>
      </main>
    );
  }

  if (isError) {
    return (
      <main className="w-full min-h-screen py-1 md:w-2/3 lg:w-3/4">
        <div className="p-2 md:p-4">
          <h2 className="text-2xl font-bold mb-2">No data found</h2>
        </div>
      </main>
    );
  }

  if (data?.length === 0) {
    return (
      <main className="w-full min-h-screen py-1 md:w-2/3 lg:w-3/4">
        <div className="p-2 md:p-4">
          <h2 className="text-2xl font-bold mb-2">No Approved Bookings</h2>
          <p className="text-gray-700">
            You have no approved bookings at the moment. Please check back
            later.
          </p>
        </div>
      </main>
    );
  }

  return (
    <div className="align-element">
      <div className="font-[sans-serif]">
        <div className="grid lg:grid-cols-3 gap-12 p-6">
          <div className="lg:col-span-2 divide-y">
            {data.map((booking: any) => (
              <Bookmark key={nanoid()} booking={booking} />
            ))}
          </div>
          <div className="shadow-md p-6">
            <h3 className="text-xl font-extrabold border-b pb-4">Summary</h3>
            <ul className="divide-y mt-6">
              <li className="flex flex-wrap gap-4 text-md py-4 font-bold">
                Total <span className="ml-auto">{total} ETB</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApprovedBooking;
