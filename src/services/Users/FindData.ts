import { api } from "../api";
import { UsersRepositoriesResponse, UsersResponse } from "./Users.types";

export async function findData(user: string): Promise<UsersResponse> {
  if (!user) return {} as UsersResponse;
  const response = await api.get<UsersResponse>(user);

  return response.data;
}

export async function findRepos(
  user: string,
  page: number,
  perPage = 6
): Promise<UsersRepositoriesResponse[]> {
  if (!user) return {} as UsersRepositoriesResponse[];
  const response = await api.get<UsersRepositoriesResponse[]>(
    `${user}/repos?sort=created&direction=desc&page=${page}&per_page=${perPage}`
  );

  return response.data;
}
