// pages/Todos.tsx
import React, { useState } from "react";
import { useTodos } from "../../hooks/useTodos";
import { isInWishlist, toggleWishlist } from "../../utils/storage";
import type { ITodos } from "../../types";

const TodoSkeleton = () => {
  return (
    <div className="w-full bg-gray-100 border border-gray-300 px-3 py-1 my-3 animate animate-pulse">
      <div className="h-6 w-6/12 bg-gray-300"></div>
      <div className="h-8 bg-gray-300 w-[180px] mt-2"></div>
    </div>
  );
};

const Todos = () => {
  const { data, isLoading } = useTodos();
  const [, setWishlist] = useState<ITodos[]>([]);

  const handleToggle = (todo: ITodos) => {
    const updated = toggleWishlist(todo);
    setWishlist(updated);
  };

  if (isLoading) {
    return (
      <>
        {Array.from({ length: data?.length ?? 6 }).map((_, i) => (
          <TodoSkeleton key={i} />
        ))}
      </>
    );
  }

  return (
    <div className="container">
      <h2 className="text-[30px] text-center font-semibold mb-4">Todos</h2>
      <ul className="space-y-2">
        {data?.slice(0, 20).map((todo) => (
          <li
            key={todo.id}
            className="flex flex-col gap-1 border border-gray-300 bg-gray-100 px-3 py-1 my-3 rounded "
          >
            <h2 className="text-[20px] font-medium">{todo.title}</h2>
            <button
              onClick={() => handleToggle(todo)}
              className={`h-[30px] w-[180px] rounded ${
                isInWishlist(todo.id)
                  ? "bg-red-500 text-white"
                  : "bg-green-500 text-white"
              }`}
            >
              {isInWishlist(todo.id) ? "Dislike" : "Like"}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default React.memo(Todos);
