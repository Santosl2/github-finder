import { useSelector } from "react-redux";

type User = {
  gitUser: {
    name: string;
  };
};

export function useSelectorUser(): string {
  const userData = useSelector<User>((state) => state.gitUser.name);
  return userData as string;
}
