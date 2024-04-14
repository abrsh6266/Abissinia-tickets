"use client";
import { useGlobalContext } from "@/app/context";
import { FaTimes } from "react-icons/fa";

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
            <FaTimes className="text-black text-3xl"/>
          </div>
        </div>
        <div className="w-full p-3 mt-8 bg-gray-700 rounded flex items-center text-white">
          <div className="w-8 h-8 border rounded-full bg-white border-blue-700 flex items-center justify-center">
          </div>
          <div className="pl-3">
            <p className="text-sm leading-none">
              <span className="font-semibold">Admin:</span>{" "}
              <span className="">
                You have purchased the ticket successfully
              </span>
            </p>
            <p className="text-xs leading-3 pt-1 text-gray-300">2 hours ago</p>{" "}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Notification;
