import React, { useEffect, useState } from "react";
import { api } from "../../api";
import type { IAlbums } from "../../types";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../../redux";
import { toggleAlbum } from "../../redux/features/albumSlice";

const AlbumSkeleton = () => {
  return (
    <div className="w-full border border-gray-300 bg-gray-100 px-3 py-1 my-3 rounded">
      <div className="h-8 w-1/2 bg-gray-300 rounded"></div>
      <div className="h-6 w-[180px] bg-gray-300 rounded mt-3"></div>
    </div>
  );
};

const Albums = () => {
  const dispatch = useDispatch();
  const likeAlbums = useSelector((state: RootState) => state.albums.value);
  const [albums, setAlbums] = useState<null | IAlbums[]>(null);
  const [error, setError] = useState<null | string>(null);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    setLoading(true);
    api
      .get("/albums")
      .then((res) => {
        setAlbums(res.data);
      })
      .catch((err) => {
        setError(err);
      })
      .finally(() => setLoading(false));
  }, []);
  return (
    <div className="container">
      <h2 className="text-[30px] font-semibold text-center">Albums</h2>
      {loading && (
        <>
          {[...Array(albums?.length || 10)].map((_, inx) => (
            <AlbumSkeleton key={inx} />
          ))}
        </>
      )}
      {error && <p className="text-2xl text-center text-red-600">Error...</p>}
      <div>
        {albums?.map((album: IAlbums) => {
          const isLiked = likeAlbums.some((item) => item?.id === album.id);
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
                {isLiked ? "Dislike" : <p className="bg-green-600 content-center rounded w-full h-full">Like</p> }
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default React.memo(Albums);
