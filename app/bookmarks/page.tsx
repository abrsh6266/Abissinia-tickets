"use client";
import React, { useState } from "react";
import { movie } from "../data";
import Bookmark from "../components/bookmarkComponents/Bookmark";

const page = () => {
  return (
    <div className="align-element">
      <div className="font-[sans-serif]">
        <div className="grid lg:grid-cols-3 gap-12 p-6">
          <Bookmark movie={movie[0]} />
          <div className="shadow-md p-6">
            <h3 className="text-xl font-extrabold  border-b pb-4">Summary</h3>
            <ul className=" divide-y mt-6">
              <li className="flex flex-wrap gap-4 text-md py-4">
                Subtotal <span className="ml-auto font-bold">220ETB</span>
              </li>
              <li className="flex flex-wrap gap-4 text-md py-4">
                Tax <span className="ml-auto font-bold">30ETB</span>
              </li>
              <li className="flex flex-wrap gap-4 text-md py-4 font-bold">
                Total <span className="ml-auto">250ETB</span>
              </li>
            </ul>
            <button
              type="button"
              className="mt-6 text-md px-6 py-2.5 w-full bg-blue-600 hover:bg-blue-700 text-white rounded"
            >
              Check out
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
