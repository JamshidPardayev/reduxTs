import React, { useEffect, useState } from "react";
import { api } from "../../api";
import type { IComments } from "../../types";
import { useDispatch, useSelector } from "react-redux";
import { toggleComment } from "../../redux/features/commentSlice";
import type { RootState } from "../../redux";

const CommentSkeleton = () => {
  return (
    <div className="flex flex-col border border-gray-300 gap-2 animate-pulse rounded w-full px-2 py-1 my-3 bg-gray-100 ">
      <div className="h-6 w-8/12 bg-gray-300 rounded"></div>
      <div className="h-6 w-6/12 bg-gray-300 rounded"></div>
      <div className="h-10 w-full bg-gray-300 rounded"></div>
      <div className="h-8 w-[200px] bg-gray-300 rounded"></div>
    </div>
  );
};

const Comments = () => {
  const dispatch = useDispatch();
  const likeComments = useSelector((state: RootState) => state.comments.value);
  const [comments, setComments] = useState<null | IComments[]>(null);
  const [error, setError] = useState<null | string>(null);
  const [loading, setLoading] = useState<boolean>(false);
  useEffect(() => {
    setLoading(true);
    api
      .get("/comments")
      .then((res) => {
        setComments(res.data);
      })
      .catch((err) => {
        setError(err);
      })
      .finally(() => setLoading(false));
  }, []);
  return (
    <div className="container">
      <h2 className="text-[30px] text-center font-semibold">Comments</h2>
      {loading && (
        <>
          {[...Array(comments?.length || 5)].map((_, inx) => (
            <CommentSkeleton key={inx} />
          ))}
        </>
      )}
      {error && <p className="text-2xl text-red-600">Error...</p>}
      <div>
        {comments?.map((comment) => {
          const isLiked = likeComments.some((item) => item.id === comment.id);
          return (
            <div
              key={comment?.id}
              className="flex flex-col gap-1 border border-gray-300 bg-gray-100 py-1 px-2 my-3"
            >
              <h3 className="text-[20px] font-semibold">{comment?.name}</h3>
              <p className="text-[18px] font-medium">{comment?.email}</p>
              <p>{comment?.body}</p>
              <button
                onClick={() => dispatch(toggleComment(comment))}
                className="w-[200px] h-[40px] bg-red-500 duration-300 hover:bg-red-700 text-white rounded cursor-pointer font-medium"
              >
                {isLiked ? "Dislike" : "Like"}
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default React.memo(Comments);
