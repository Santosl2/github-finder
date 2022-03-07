import { useQuery } from "react-query";

import { findData } from "../FindData";

export function useUser(user: string) {
  return useQuery(["findData", user], () => findData(user), {
    staleTime: 1000 * 15,
    cacheTime: 1000 * 15,
  });
}
