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
      <h2 className="text-[30px] font-semibold text-center">Like Posts</h2>
      <div>
        {posts?.map((post: IPosts) => {
          const isLiked = posts.some((item) => item.id === post.id);

          return (
            <div
              key={post?.id}
              className="border border-gray-300 bg-gray-100 rounded py-1 px-2 my-3 flex flex-col gap-1"
            >
              <h3 className="text-[24px] font-medium">{post?.title}</h3>
              <p className="text-[18px]">{post?.body}</p>
              <button
                onClick={() => dispatch(togglePost(post))}
                className="w-[200px] h-[40px] bg-red-500 hover:bg-red-700 text-white rounded cursor-pointer font-medium"
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

export default React.memo(WishlistPosts);
