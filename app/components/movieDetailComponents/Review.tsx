"use client";
import { useState } from "react";
import Message from "./Message";
import { nanoid } from "@reduxjs/toolkit";

const Review = () => {
  const [showComment, setShowComment] = useState(false);
  const [visibleMessages, setVisibleMessages] = useState(1);
  const totalMessages = 10;
  const messages = new Array(totalMessages).fill(<Message key={nanoid()}/>);

  const handleSeeMore = () => {
    setVisibleMessages(Math.min(visibleMessages + 3, totalMessages));
  };

  const handleShowLess = () => {
    setVisibleMessages(1);
  };

  return (
    <div className=" overflow-x-hidden">
      <div className="border-2 rounded p-2 border-gray-600 max-w-[900px]">
        {messages.slice(0, visibleMessages)}
        {visibleMessages < totalMessages ? (
          <button className="btn rounded-lg hover" onClick={handleSeeMore}>
            See more comments
          </button>
        ) : (
          <button className="btn" onClick={handleShowLess}>
            Show less
          </button>
        )}
      </div>
      <div className="chat chat-start">
        <form className="">
          <div className="px-3 mb-2 mt-2">
            <input
              type="text"
              placeholder="comment here"
              className="inline input input-bordered input-secondary w-full max-w-xs"
            />
          </div>
          <div className="flex justify-end px-4">
            <input
              type="submit"
              className="btn px-2.5 py-1.5 rounded-md bg-indigo-700 inline"
              value="Comment"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Review;
