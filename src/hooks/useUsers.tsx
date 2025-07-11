import type { IUsers } from "../types";
import { api } from "../api";
import { useQuery } from "@tanstack/react-query";

export const useUsers = () => {
  return useQuery<IUsers[]>({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await api.get("/users");
      return res.data;
    },
  });
};
