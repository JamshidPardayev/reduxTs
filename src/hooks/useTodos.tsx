// useTodos.ts
import { useQuery } from "react-query";
import type { ITodos } from "../types";
import { api } from "../api";

export const useTodos = () => {
  return useQuery<ITodos[]>({
    queryKey: ["todos"],
    queryFn: async () => {
      const res = await api.get("/todos");
      return res.data;
    },
  });
};
