"use client";
import { useGlobalContext } from "@/app/context";
import { FaTimes } from "react-icons/fa";
import MessageComponent from "./MessageComponent";

const Notification = () => {
  const { setShowNotification, showNotification } = useGlobalContext();
  return (
    <div
      className={`fixed top-0 right-0 z-50 w-full h-full overflow-x-hidden transition-all ease-in-out duration-500 ${
        showNotification ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <div className="2xl:w-4/12 bg-gray-50 h-screen overflow-y-auto p-8 absolute right-0 top-0">
        <div className="flex items-center justify-between">
          <p className="text-2xl font-semibold leading-6 text-gray-800">
            Notifications
          </p>
          <div
            className="cursor-pointer"
            onClick={() => setShowNotification(false)}
          >
            <FaTimes className="text-black text-3xl" />
          </div>
        </div>
        <MessageComponent />
        <MessageComponent />
      </div>
    </div>
  );
};

export default Notification;
