/* eslint-disable @typescript-eslint/no-explicit-any */

import { DevBody, Header } from "@/components/organisms";
import { useSelectorUser } from "@/hooks/useSelectorUser";
import { useUser } from "@/services/Users/hooks/useData";
import { Box, Stack } from "@chakra-ui/react";

export function IndexPage(): JSX.Element {
  const user = useSelectorUser();
  const { isLoading, error, data } = useUser(user);

  return (
    <Stack width="100%">
      <Header />
      {isLoading && !error && <Box>Loading...</Box>}
      {error && <Box>Oops, an error has occurred.</Box>}
      {!isLoading && data && user && !error && (
        <DevBody
          name={data.name}
          login={data.login}
          avatar_url={data.avatar_url}
          html_url={data.html_url}
          bio={data.bio}
          followers={data.followers}
          following={data.following}
        />
      )}
    </Stack>
  );
}
