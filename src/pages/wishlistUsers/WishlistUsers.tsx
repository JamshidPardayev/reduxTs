// pages/WishlistUsers.tsx
import React, { useEffect, useState } from "react";
import { getUserWishlist, toggleUserWishlist } from "../../utils/userWishlist";
import type { IUsers } from "../../types";

const WishlistUsers = () => {
  const [wishlist, setWishlist] = useState<IUsers[]>([]);

  useEffect(() => {
    setWishlist(getUserWishlist());
  }, []);

  const handleDislike = (user: IUsers) => {
    const updated = toggleUserWishlist(user);
    setWishlist(updated);
  };

  return (
    <div className="p-4">
      <h2 className="text-[30px] font-semibold text-center mb-3">Like Users</h2>
      {wishlist.length === 0 ? (
        <p className="text-center text-2xl text-gray-700">No Liked Users Yet!</p>
      ) : (
        <ul className="space-y-3">
          {wishlist.map((user) => (
            <li
              key={user.id}
              className="border border-gray-300 bg-gray-100 p-3 rounded shadow flex flex-col gap-1"
            >
              <div>
                <h3 className="text-[20px] font-semibold">{user?.name}</h3>
                <p>{user?.email}</p>
                <p>{user?.phone}</p>
              </div>
              <button
                onClick={() => handleDislike(user)}
                className="w-[200px] h-[35px] rounded bg-red-500 hover:bg-red-700 text-white"
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

export default React.memo(WishlistUsers);
