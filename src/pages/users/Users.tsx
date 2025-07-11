// pages/Users.tsx
import React, { useState } from "react";
import { isUserLiked, toggleUserWishlist } from "../../utils/userWishlist";
import { useUsers } from "../../hooks/useUsers";
import type { IUsers } from "../../types";

const UserSkeleton = () => {
  return (
    <div className="border border-gray-300 bg-gray-100 px-3 py-1 my-3 w-full rounded">
      <div className="h-8 w-6/12 bg-gray-300 mt-1 rounded"></div>
      <div className="h-6 w-4/12 bg-gray-300 mt-1 rounded"></div>
      <div className="h-6 w-4/12 bg-gray-300 mt-1 rounded"></div>
      <div className="h-8 w-[200px] bg-gray-300 mt-1 rounded"></div>
    </div>
  );
};

const Users = () => {
  const { data, isLoading } = useUsers();
  const [, setWishlist] = useState<IUsers[]>([]);

  const handleToggle = (user: IUsers) => {
    const updated = toggleUserWishlist(user);
    setWishlist(updated);
  };

  if (isLoading) {
    return (
      <>
        {Array.from({ length: data?.length ?? 6 }).map((_, i) => (
          <UserSkeleton key={i} />
        ))}
      </>
    );
  }

  return (
    <div className="container">
      <h2 className="text-[30px] text-center font-semibold mb-3">Users</h2>
      <ul className="space-y-3">
        {data?.map((user) => (
          <li
            key={user?.id}
            className="flex flex-col gap-1 px-3 py-1 my-3 border border-gray-300 bg-gray-100 rounded shadow"
          >
            <div>
              <h3 className="text-[20px] font-semibold">{user?.name}</h3>
              <p>{user?.email}</p>
              <p>{user?.phone}</p>
            </div>
            <button
              onClick={() => handleToggle(user)}
              className={`w-[200px] h-[35px] hover:cursor-pointer rounded ${
                isUserLiked(user?.id)
                  ? "bg-red-500 text-white"
                  : "bg-green-500 text-white"
              }`}
            >
              {isUserLiked(user.id) ? "Dislike" : "Like"}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default React.memo(Users);
