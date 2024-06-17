"use client";
import React, { useEffect, useState } from "react";
import Bookmark from "../components/bookmarkComponents/Bookmark";
import { useFetchData2 } from "@/api/getData";
import Loading from "../components/common/Loading";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";
import { nanoid } from "@reduxjs/toolkit";

const Page = () => {
  const user = useSelector((state: RootState) => state.userState.user);
  let [total, setTotal] = useState(0);
  const { data, isLoading, isError } = useFetchData2(
    `bookings/user/${user?.id}`
  );

  useEffect(() => {
    setTotal((cur) => {
      let tot = 0;
      if (data?.length > 0) {
        data.map((booking: any) => {
          tot += booking.price;
        });
      }
      return tot;
    });
  }, [data]);
  if (isLoading) {
    return (
      <div>
        <Loading />
      </div>
    );
  }

  if (isError) {
    return <div>No booking history</div>; // Show an error state
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
                Total <span className="ml-auto">{total}ETB</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
