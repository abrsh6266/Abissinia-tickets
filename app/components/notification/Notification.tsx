"use client";
import { useSelector, useDispatch } from "react-redux";
import { setShowNotification } from "../../features/user/userSlice";
import { FaTimes } from "react-icons/fa";
import MessageComponent from "./MessageComponent";
import { RootState } from "@/app/store/store";
import { customFetch2 } from "@/app/utils";
import { useFetchData2 } from "@/api/getData";
import { useState, useEffect } from "react";

const Notification = () => {
  const showNotification = useSelector(
    (state: RootState) => state.userState.showNotification
  );
  const user = useSelector((state: RootState) => state.userState.user);
  const dispatch = useDispatch();

  const {
    data: notifications,
    isLoading,
    isError,
  } = useFetchData2(`/notifications/user/${user?.id}`);

  const [localNotifications, setLocalNotifications] = useState(notifications);

  useEffect(() => {
    if (notifications) {
      setLocalNotifications(notifications);
    }
  }, [notifications]);

  const handleCloseNotification = () => {
    dispatch(setShowNotification(false));
  };

  const handleMarkAsSeen = async (id: string) => {
    try {
      await customFetch2.patch(`/notifications/${id}/seen`, {
        seen: true,
      });
      setLocalNotifications((prevNotifications: any) =>
        prevNotifications.map((notification: any) =>
          notification._id === id
            ? { ...notification, seen: true }
            : notification
        )
      );
    } catch (error) {
      console.error("Error marking notification as seen:", error);
    }
  };

  const handleDelete = async (id: string) => {
    try {
      await customFetch2.delete(`/notifications/${id}`);
      setLocalNotifications((prevNotifications: any) =>
        prevNotifications.filter((notification: any) => notification._id !== id)
      );
    } catch (error) {
      console.error("Error deleting notification:", error);
    }
  };

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
          <div className="cursor-pointer" onClick={handleCloseNotification}>
            <FaTimes className="text-black text-3xl" />
          </div>
        </div>
        {isLoading ? (
          <p>Loading notifications...</p>
        ) : isError ? (
          <p>Error loading notifications</p>
        ) : (
          localNotifications?.map((notification: any) => (
            <MessageComponent
              key={notification._id}
              notification={notification}
              onMarkAsSeen={() => handleMarkAsSeen(notification._id)}
              onDelete={() => handleDelete(notification._id)}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default Notification;
