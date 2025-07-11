import React, { useEffect, useState } from "react";
import { api } from "../../api";
import type { IPosts } from "../../types";
import { useDispatch, useSelector } from "react-redux";
import { togglePost } from "../../redux/features/postSlice";
import type { RootState } from "../../redux";

const PostSkeleton = () => {
  return (
    <div className="border border-gray-300 bg-gray-100 py-1 px-3 my-2 flex flex-col gap-2 animate-pulse rounded">
      <div className="h-7 bg-gray-300 rounded w-1/2"></div>
      <div className="h-6 bg-gray-300 rounded w-full"></div>
      <div className="h-10 bg-gray-300 rounded w-[200px]"></div>
    </div>
  );
};

const Posts = () => {
  const dispatch = useDispatch();
  const likePost = useSelector((state: RootState) => state.posts.value);
  const [posts, setPosts] = useState<null | IPosts[]>(null);
  const [error, setError] = useState<null | string>(null);
  const [loading, setLoading] = useState<boolean>(false);
  useEffect(() => {
    setLoading(true);
    api
      .get("/posts")
      .then((res) => {
        setPosts(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        setError(err);
      })
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="container ">
      <h2 className="text-[36px] text-center font-semibold mt-3 mb-6">Posts</h2>
      {loading && (
        <>
          {[...Array(posts?.length || 5)].map((_, inx) => (
            <PostSkeleton key={inx} />
          ))}
        </>
      )}

      {error && <p className="text-2xl text-red-600">Error...</p>}
      <div>
        {posts?.map((post: IPosts) => {
          const isLiked = likePost.some((item) => item.id === post.id);
          return (
            <div
              key={post?.id}
              className="border-gray-300 border rounded bg-gray-100 py-1 px-2 my-3 flex flex-col gap-1"
            >
              <h3 className="text-[24px] font-medium">{post?.title}</h3>
              <p className="text-[18px]">{post?.body}</p>
              <button
                onClick={() => dispatch(togglePost(post))}
                className="w-[200px] h-[40px] bg-red-500 hover:bg-red-700 text-white rounded cursor-pointer font-medium duration-300"
              >
                {isLiked ? (
                  "Dislike"
                ) : (
                  <p className="bg-green-600 h-full w-full rounded content-center">
                    Like
                  </p>
                )}
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default React.memo(Posts);
