import React from "react";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../../redux";
import type { IAlbums } from "../../types";
import { toggleAlbum } from "../../redux/features/albumSlice";

const WishlistAlbums = () => {
  const dispatch = useDispatch();
  const albums = useSelector((state: RootState) => state.albums.value);

  return (
    <div className="container">
      <h2 className="text-[30px] text-center font-semibold my-5">
        Like Albums
      </h2>

      {albums.length === 0 ? (
        <p className="text-center text-gray-700 text-2xl">
          No Liked Albums Yet!
        </p>
      ) : (
        <div className="grid gap-4">
          {albums.map((album: IAlbums) => (
            <div
              key={album.id}
              className="border border-gray-300 bg-gray-100 px-4 py-3 rounded shadow"
            >
              <h3 className="text-[20px] font-semibold">{album.title}</h3>
              <button
                onClick={() => dispatch(toggleAlbum(album))}
                className="w-[150px] mt-3 h-[35px] bg-red-500 hover:bg-red-700 text-white rounded font-medium transition duration-300"
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

export default React.memo(WishlistAlbums);
