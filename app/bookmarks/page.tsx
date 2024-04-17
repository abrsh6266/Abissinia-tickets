"use client";
import React, { useState } from "react";
import { movie } from "../data";
import Bookmark from "../components/bookmarkComponents/Bookmark";

const page = () => {
  return (
    <div className="align-element">
      <div className="font-[sans-serif]">
        <div className="grid lg:grid-cols-3 gap-12 p-6">
          <Bookmark />
          <div className="shadow-md p-6">
            <h3 className="text-xl font-extrabold  border-b pb-4">
              Order Summary
            </h3>
            <ul className=" divide-y mt-6">
              <li className="flex flex-wrap gap-4 text-md py-4">
                Subtotal <span className="ml-auto font-bold">$55.5</span>
              </li>
              <li className="flex flex-wrap gap-4 text-md py-4">
                Shipping <span className="ml-auto font-bold">$4.00</span>
              </li>
              <li className="flex flex-wrap gap-4 text-md py-4">
                Tax <span className="ml-auto font-bold">$4.00</span>
              </li>
              <li className="flex flex-wrap gap-4 text-md py-4 font-bold">
                Total <span className="ml-auto">$63.5</span>
              </li>
            </ul>
            <button
              type="button"
              className="mt-6 text-md px-6 py-2.5 w-full bg-blue-600 hover:bg-blue-700 text-white rounded"
            >
              Check out
            </button>

            <div className="mt-10">
              <h3 className="text-xl font-extrabold  mb-6">Apply promo code</h3>
              <div className="flex border border-blue-600 overflow-hidden max-w-md rounded">
                <input
                  type="email"
                  placeholder="Promo code"
                  className="w-full outline-none  text-gray-600 text-md px-4 py-2.5"
                />
                <button
                  type="button"
                  className="flex items-center justify-center bg-blue-600 hover:bg-blue-700 px-6 text-md text-white"
                >
                  Apply
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
