import { InputGroupCustom } from "@/components/molecules";
import { Box, Flex, Heading, Stack } from "@chakra-ui/react";

export function Header(): JSX.Element {
  return (
    <Stack as="header" width="100%">
      <Flex justifyContent="space-between">
        <Box>
          <Heading size="md">Dev Finder</Heading>
        </Box>
        <Box>Search for dev`s</Box>
      </Flex>
      <InputGroupCustom />
    </Stack>
  );
}
