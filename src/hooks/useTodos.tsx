// hooks/useTodos.ts
import { useQuery } from "@tanstack/react-query";
import { api } from "../api";
import type { ITodos } from "../types";

export const useTodos = () => {
  return useQuery<ITodos[]>({
    queryKey: ["todos"],
    queryFn: async () => {
      const { data } = await api.get<ITodos[]>("/todos");
      return data;
    },
    staleTime: 1000 * 60 * 5,
    retry: 1,
  });
};
