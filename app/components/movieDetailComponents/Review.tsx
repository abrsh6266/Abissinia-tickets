"use client";
import { useEffect, useState } from "react";
import Message from "./Message";
import { useSelector } from "react-redux";
import { RootState } from "@/app/store/store";
import RatingReview from "./RatingReview";
import { Review as ReviewType } from "@/app/data"; // Rename to avoid conflict with component name
import axios from "axios";

const Review = ({
  reviews,
  movieId,
}: {
  reviews: ReviewType[];
  movieId: string;
}) => {
  const [review, setReview] = useState(reviews);
  const [visibleMessages, setVisibleMessages] = useState(3);
  const [rating, setRating] = useState(1);
  const [comment, setComment] = useState("");
  const user = useSelector((state: RootState) => state.userState.user);
  const messages = review.map((review, index) => <Message key={index} review={review}/>);

  const handleSeeMore = () => {
    setVisibleMessages(Math.min(visibleMessages + 3, reviews.length));
  };

  const handleShowLess = () => {
    setVisibleMessages(3);
  };

  

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!comment.trim()) {
      alert("Comment is required");
      return;
    }
    if (user.id) {
      try {
        const response = await axios.post(
          "https://abissinia-backend.vercel.app/api/reviews",
          {
            userId: user.id,
            rating,
            comment,
            date: new Date(),
            movieId,
          }
        );
        // Handle successful review submission (e.g., refresh reviews, show success message, etc.)
        console.log("Review submitted:", response.data);
        setReview([...review,response.data])
        setComment(""); // Clear the comment input after successful submission
      } catch (error) {
        console.error("Error submitting review:", error);
      }
    }
  };

  return (
    <div className="overflow-x-hidden">
      <div className="p-2 max-w-[900px]">
        {user && (
          <div className="w-full">
            <form className="w-full" onSubmit={handleSubmit}>
              <div className="w-full px-3 mb-2 space-x-2 inline-flex">
                <div className="chat-image avatar">
                  <div className="w-12 rounded-full">
                    <img
                      src={
                        user.avatar ||
                        "https://firebasestorage.googleapis.com/v0/b/abissinia-tickets.appspot.com/o/images%2Favatar2.png?alt=media&token=e591a9bd-aeb6-4cbc-ba31-2c286f6f6f1c"
                      }
                    />
                  </div>
                </div>
                <input
                  type="text"
                  placeholder="Comment here"
                  className="input border-hidden input-accent w-full max-w-xs"
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                  required
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
        {visibleMessages < reviews.length ? (
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
