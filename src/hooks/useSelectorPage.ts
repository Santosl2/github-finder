import { useSelector } from "react-redux";

type Page = {
  gitUser: {
    page: number;
    perPage: number;
  };
};

type Response = {
  perPage: number;
  page: number;
};

export function useSelectorPage(): Response {
  const currentPage = useSelector<Page>((state) => state.gitUser) as Response;

  return {
    perPage: currentPage.perPage,
    page: currentPage.page,
  };
}
