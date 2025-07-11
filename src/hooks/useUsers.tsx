import { api } from "../api";
import { useQuery } from "@tanstack/react-query";
import type { IUsers } from "../types";

export const useUsers = () => {
  return useQuery<IUsers[]>({
    queryKey: ["users"],
    queryFn: async () => {
      const { data } = await api.get<IUsers[]>("/users");
      return data;
    },
    staleTime: 1000 * 60 * 5,
    retry: 1,
  });
};
