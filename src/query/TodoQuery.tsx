import { api } from "../api";

export const getTodos = async () => {
  const res = await api.get("/todos");
  return res.data;
};
