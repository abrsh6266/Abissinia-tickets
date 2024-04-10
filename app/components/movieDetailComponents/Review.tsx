import Message from "./Message";

const Review = () => {
  return (
    <div>
      <div className="border-2 rounded p-2 border-gray-600 max-w-[900px]">
        <Message />
        <Message />
        <Message />
        <Message />
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
