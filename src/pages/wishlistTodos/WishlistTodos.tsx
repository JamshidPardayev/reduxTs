// pages/WishlistTodos.tsx
import React, { useEffect, useState } from "react";
import { getWishlist, toggleWishlist } from "../../utils/storage";
import type { ITodos } from "../../types";

const WishlistTodos = () => {
  const [wishlist, setWishlist] = useState<ITodos[]>([]);

  useEffect(() => {
    const list = getWishlist();
    setWishlist(list);
  }, []);

  const handleDislike = (todo: ITodos) => {
    const updated = toggleWishlist(todo);
    setWishlist(updated);
  };

  return (
    <div className="container">
      <h2 className="text-[30px] text-center font-semibold mb-5 mt-2">Like Todos</h2>
      {wishlist.length === 0 ? (
        <p className="text-2xl text-center text-gray-700">No liked todos yet!</p>
      ) : (
        <ul className="space-y-2">
          {wishlist.map((todo) => (
            <li
              key={todo.id}
              className="flex flex-col gap-1 border border-gray-300 bg-gray-100 my-3 py-1 px-3 rounded"
            >
              <h2 className="text-[20px] font-medium ">{todo.title}</h2>
              <button
                onClick={() => handleDislike(todo)}
                className="h-[30px] w-[180px] rounded bg-red-500 text-white"
              >
                Dislike
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default WishlistTodos;
