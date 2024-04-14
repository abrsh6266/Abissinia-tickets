import React from "react";
import { FaUser } from "react-icons/fa";

const MessageComponent = () => {
  return (
    <div className="w-full p-3 mt-4 bg-gray-700 rounded flex items-center text-white">
      <div className="w-8 h-8 border rounded-full text-red-700 pt-1 overflow-hidden text-3xl bg-white border-blue-700 flex items-center justify-center">
        <FaUser />
      </div>
      <div className="pl-3">
        <p className="text-sm leading-none">
          <span className="font-semibold">Admin:</span>{" "}
          <span className="">You have purchased the ticket successfully</span>
        </p>
        <p className="text-xs leading-3 pt-1 text-gray-300">2 hours ago</p>{" "}
      </div>
    </div>
  );
};

export default MessageComponent;
