import React from "react";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../../redux";
import type { IPosts } from "../../types";
import { togglePost } from "../../redux/features/postSlice";

const WishlistPosts = () => {
  const dispatch = useDispatch();
  const posts = useSelector((state: RootState) => state.posts.value);

  return (
    <div className="container">
      <h2 className="text-[30px] font-semibold text-center mb-4">Like Posts</h2>

      {posts.length === 0 ? (
        <p className="text-center text-gray-700 text-2xl">No Liked Posts Yet!</p>
      ) : (
        <div className="grid gap-3">
          {posts.map((post: IPosts) => {
            return (
              <div
                key={post.id}
                className="border border-gray-300 bg-gray-100 rounded py-2 px-3"
              >
                <h3 className="text-[24px] font-medium">{post.title}</h3>
                <p className="text-[18px] mb-2">{post.body}</p>
                <button
                  onClick={() => dispatch(togglePost(post))}
                  className="w-[150px] h-[40px] bg-red-500 hover:bg-red-700 text-white rounded font-medium"
                >
                  Dislike
                </button>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default React.memo(WishlistPosts);
