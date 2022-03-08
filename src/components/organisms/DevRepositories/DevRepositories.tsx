/* eslint-disable camelcase */
/* eslint-disable react/destructuring-assignment */
import { useDispatch } from "react-redux";

import { Repository } from "@/components/molecules";
import { useSelectorPage } from "@/hooks/useSelectorPage";
import { useSelectorUser } from "@/hooks/useSelectorUser";
import { useRepositories } from "@/services/Users/hooks/useData";
import { changePage } from "@/store/GitHubUser/gitUserSlice";
import { Button, Grid, Spinner, Text } from "@chakra-ui/react";

export function DevRepositories(): JSX.Element {
  const dispatch = useDispatch();

  const { page, perPage } = useSelectorPage();
  const user = useSelectorUser();

  const { isLoading, error, data } = useRepositories(user, page, perPage);

  function handleLoadMore() {
    const loadMoreCount = perPage + 6;

    dispatch(
      changePage({
        perPage: loadMoreCount,
        page: 1,
      })
    );
  }

  return (
    <>
      <Grid templateColumns={["1fr", "repeat(3, 1fr)"]} gap="1rem">
        {isLoading && <Spinner />}
        {!isLoading &&
          !error &&
          data?.map((repos) => {
            return (
              <Repository
                key={repos.id}
                name={repos.name}
                description={repos.description}
                html_url={repos.html_url}
                language={repos.language}
              />
            );
          })}
        {data && data.length <= 0 && <Text>No repositories found...</Text>}
      </Grid>
      {data && data.length > 0 && (
        <Button
          borderRadius="none"
          colorScheme="red"
          onClick={() => {
            handleLoadMore();
          }}
        >
          Load more...
        </Button>
      )}
    </>
  );
}
