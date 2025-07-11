// useTodos.ts
import type { ITodos } from "../types";
import { api } from "../api";
import { useQuery } from "@tanstack/react-query";

export const useTodos = () => {
  return useQuery<ITodos[]>({
    queryKey: ["todos"],
    queryFn: async () => {
      const res = await api.get("/todos");
      return res.data;
    },
  });
};
