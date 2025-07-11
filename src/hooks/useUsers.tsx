import type { IUsers } from "../types";
import { useQuery } from "react-query";
import { api } from "../api";

export const useUsers = () => {
  return useQuery<IUsers[]>({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await api.get("/users");
      return res.data;
    },
  });
};
