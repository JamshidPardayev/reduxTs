import React from "react";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../../redux";
import { toggleAlbum } from "../../redux/features/albumSlice";

const WishlistAlbums = () => {
  const dispatch = useDispatch();
  const albums = useSelector((state: RootState) => state.albums.value);

  return (
    <div className="container">
      <h2 className="text-[30px] text-center font-semibold">Like Albums</h2>
      {albums?.map((album) => {
        const isLiked = albums.some((item) => item?.id === album.id);
        return (
          <div
            key={album?.id}
            className="border border-gray-300 bg-gray-100 px-3 py-1 my-3 rounded"
          >
            <h3 className="text-[20px] font-semibold">{album?.title}</h3>
            <button
              onClick={() => dispatch(toggleAlbum(album))}
              className="w-[180px] mt-3 h-[30px] bg-red-500 hover:bg-red-700 text-white rounded cursor-pointer font-medium duration-300"
            >
              {isLiked ? "Dislike" : "Like"}
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default React.memo(WishlistAlbums);
