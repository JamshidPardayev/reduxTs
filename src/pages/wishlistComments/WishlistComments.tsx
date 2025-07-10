import React from "react";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../../redux";
import { toggleComment } from "../../redux/features/commentSlice";

const WishlistComments = () => {
  const dispatch = useDispatch();
  const comments = useSelector((state: RootState) => state.comments.value);

  return (
    <div className="container">
      <h2 className="text-[30px] font-semibold text-center mt-5 mb-2">
        Like Comments
      </h2>
      <div>
        {comments?.map((comment) => (
          <div
            key={comment?.id}
            className="flex flex-col gap-1 border border-gray-300 bg-gray-100 py-1 px-2 my-3"
          >
            <h3 className="text-[20px] font-semibold">{comment?.name}</h3>
            <p className="text-[18px] font-medium">{comment?.email}</p>
            <p>{comment?.body}</p>
            <button
              onClick={() => dispatch(toggleComment(comment))}
              className="w-[200px] h-[40px] bg-red-500 hover:bg-red-700 text-white rounded cursor-pointer font-medium"
            >
              {/* {isLiked ? "Dislike" : "Like"} */}
              like
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default React.memo(WishlistComments);
