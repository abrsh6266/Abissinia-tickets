"use client";
import { useEffect, useState } from "react";
import Message from "./Message";
import { useSelector } from "react-redux";
import { RootState } from "@/app/store/store";
import { getDownloadURL, ref } from "firebase/storage";
import { storage } from "@/app/firebase/firebaseConfig";
import RatingReview from "./RatingReview";

const Review = () => {
  const [showComment, setShowComment] = useState(false);
  const [visibleMessages, setVisibleMessages] = useState(1);
  const totalMessages = 10;
  const [rating, setRating] = useState(1);
  const messages = new Array(totalMessages)
    .fill(null)
    .map((_, index) => <Message key={index} />);

  const handleSeeMore = () => {
    setVisibleMessages(Math.min(visibleMessages + 3, totalMessages));
  };

  const handleShowLess = () => {
    setVisibleMessages(1);
  };
  const [avatarURL, setAvatarURL] = useState<string | null>(null);
  const user = useSelector((state: RootState) => state.userState.user);
  useEffect(() => {
    const fetchAvatar = async () => {
      if (user) {
        const avatarRef = ref(storage, `images/${user.id}.jpg`); // Path to the user's avatar image
        try {
          const url = await getDownloadURL(avatarRef);
          setAvatarURL(url);
        } catch (error) {
          console.error("Error fetching avatar:", error);
        }
      }
    };

    fetchAvatar();
  }, [user]);
  return (
    <div className=" overflow-x-hidden">
      <div className="p-2 max-w-[900px]">
        {user && (
          <div className="w-full">
            <form className="w-full">
              <div className="w-full px-3 mb-2 space-x-2 inline-flex">
                <div className="chat-image avatar">
                  <div className="w-12 rounded-full">
                    <img
                      src={
                        avatarURL ||
                        "https://firebasestorage.googleapis.com/v0/b/abissinia-tickets.appspot.com/o/images%2Favatar2.png?alt=media&token=e591a9bd-aeb6-4cbc-ba31-2c286f6f6f1c"
                      }
                    />
                  </div>
                </div>
                <input
                  type="text"
                  placeholder="comment here"
                  className="input border-hidden input-accent w-full max-w-xs"
                />
                <div className="flex justify-end px-4">
                  <input
                    type="submit"
                    className="btn px-2.5 py-1.5 rounded-md bg-indigo-700 inline"
                    value="Comment"
                  />
                </div>
              </div>
              <RatingReview rating={rating} setRating={setRating} />
            </form>
            
            <hr />
          </div>
        )}
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
    </div>
  );
};

export default Review;
