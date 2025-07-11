import React from "react";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../../redux";
import type { IComments } from "../../types";
import { toggleComment } from "../../redux/features/commentSlice";

const WishlistComments = () => {
  const dispatch = useDispatch();
  const comments = useSelector((state: RootState) => state.comments.value);

  return (
    <div className="container">
      <h2 className="text-[30px] font-semibold text-center mt-5 mb-4">
        Like Comments
      </h2>

      {comments.length === 0 ? (
        <p className="text-center text-gray-700 text-2xl mb-3">
          No Liked Comments Yet!
        </p>
      ) : (
        <div className="grid gap-4 mb-3">
          {comments.map((comment: IComments) => (
            <div
              key={comment.id}
              className="flex flex-col gap-1 border border-gray-300 bg-gray-100 py-2 px-3 rounded"
            >
              <h3 className="text-[20px] font-semibold">{comment.name}</h3>
              <p className="text-[18px] font-medium text-gray-700">
                {comment.email}
              </p>
              <p className="text-gray-800">{comment.body}</p>
              <button
                onClick={() => dispatch(toggleComment(comment))}
                className="w-[150px] h-[40px] bg-red-500 hover:bg-red-700 text-white rounded font-medium mt-2"
              >
                Dislike
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default React.memo(WishlistComments);
