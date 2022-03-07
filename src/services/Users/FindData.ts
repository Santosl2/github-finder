import { api } from "../api";
import { UsersResponse } from "./Users.types";

export async function findData(user: string): Promise<UsersResponse> {
  if (!user) return {} as UsersResponse;
  const response = await api.get<UsersResponse>(user);

  return response.data;
}
