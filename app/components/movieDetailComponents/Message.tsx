import Link from "next/link";
import { BiEdit, BiSolidShare } from "react-icons/bi";
import { SlOptionsVertical } from "react-icons/sl";
import { AiFillDelete, AiFillLike } from "react-icons/ai";

const Message = ({ review }: { review: any }) => {  
  return (
    <div className="chat chat-start max-w-[500px] py-4">
      <div className="chat-image avatar">
        <div className="w-10 rounded-full">
          <img
            alt="Tailwind CSS chat bubble component"
            src={review.userId.avatar}
          />
        </div>
      </div>
      <div className="chat-header">
        {review.userId.username}
        <time className="text-xs opacity-50">12:45</time>
        <div className="dropdown ml-6 mb-3">
          <div tabIndex={0} role="0">
            <SlOptionsVertical className="inline mb-1" />
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a>
                <BiEdit />
                Edit
              </a>
            </li>
            <li>
              <a>
                <AiFillDelete className="text-red-700" /> Delete
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="chat-bubble">{review.comment}</div>
      <div className="chat-footer mt-3 flex">
        {[1, 2, 3, 4, 5].map((star) => {
          return (
            <span
              key={star}
              className="start"
              style={{
                cursor: "pointer",
                color: review.rating >= star ? "gold" : "gray",
                fontSize: `35px`,
              }}
            >
              {" "}
              ★{" "}
            </span>
          );
        })}
        <BiSolidShare className="ml-2 sm:text-xl" />
      </div>
    </div>
  );
};

export default Message;
