import { useQuery } from "react-query";

import { findData, findRepos } from "../FindData";

export function useUser(user: string) {
  return useQuery(["findData", user], () => findData(user), {
    staleTime: 1000 * 15,
    cacheTime: 1000 * 15,
  });
}

export function useRepositories(user: string, page = 1, perPage = 6) {
  return useQuery(
    ["findRepos", user, page, perPage],
    () => findRepos(user, page, perPage),
    {
      staleTime: 1000 * 15,
      cacheTime: 1000 * 15,
    }
  );
}
