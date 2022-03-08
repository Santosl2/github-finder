/* eslint-disable @typescript-eslint/no-explicit-any */

import { DevBody, DevRepositories, Header } from "@/components/organisms";
import { useSelectorUser } from "@/hooks/useSelectorUser";
import { useUser } from "@/services/Users/hooks/useData";
import { Box, Heading, Stack } from "@chakra-ui/react";

export function IndexPage(): JSX.Element {
  const user = useSelectorUser();
  const { isLoading, error, data } = useUser(user);

  return (
    <Stack width="100%">
      <Header />
      {isLoading && !error && <Box>Loading...</Box>}
      {error && <Box>Oops, an error has occurred.</Box>}
      {!isLoading && data && user && !error && (
        <Stack gap="1rem">
          <DevBody
            name={data.name}
            login={data.login}
            avatar_url={data.avatar_url}
            html_url={data.html_url}
            bio={data.bio}
            followers={data.followers}
            following={data.following}
            public_repos={data.public_repos}
          />

          <Heading>Repositories:</Heading>

          <DevRepositories />
        </Stack>
      )}
    </Stack>
  );
}
