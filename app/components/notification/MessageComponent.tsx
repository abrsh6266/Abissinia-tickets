import React from "react";
import { FaUser, FaTrash } from "react-icons/fa";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import { setShowNotification } from "@/app/features/user/userSlice";

interface NotificationProps {
  notification: {
    _id: string;
    content: string;
    date: string;
    seen: boolean;
    link: string;
  };
  onMarkAsSeen: () => void;
  onDelete: () => void;
}

const MessageComponent: React.FC<NotificationProps> = ({
  notification,
  onMarkAsSeen,
  onDelete,
}) => {
  const router = useRouter();
  const dispatch = useDispatch();

  const handleCloseNotification = () => {
    dispatch(setShowNotification(false));
  };
  const handleClick = () => {
    handleCloseNotification();
    onMarkAsSeen();
    if (notification.link && notification.link !== "#") {
      router.push(notification.link);
    }
  };

  return (
    <div
      className={`w-full p-3 mt-4 rounded flex items-center justify-between ${
        notification.seen ? "bg-gray-700 text-white" : "bg-blue-700 text-white"
      }`}
    >
      <div className="flex items-center cursor-pointer" onClick={handleClick}>
        <div className="w-8 h-8 border rounded-full text-blue-700 pt-1 overflow-hidden text-3xl bg-white border-blue-700 flex items-center justify-center">
          <FaUser />
        </div>
        <div className="pl-3">
          <p className="text-sm leading-none">
            <span className="font-semibold">Admin:</span>{" "}
            <span>{notification.content}</span>
          </p>
          <p className="text-xs leading-3 pt-1 text-gray-300">
            {new Date(notification.date).toLocaleString()}
          </p>
        </div>
      </div>
      <FaTrash className="text-white cursor-pointer" onClick={onDelete} />
    </div>
  );
};

export default MessageComponent;
