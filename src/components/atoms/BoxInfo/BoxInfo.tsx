import { Box, Text } from "@chakra-ui/react";

import { BoxInfoProps } from "./BoxInfo.types";

export function BoxInfo({ title, content }: BoxInfoProps): JSX.Element {
  return (
    <Box bg="gray.900" p="1rem" width={["100%", "200px"]}>
      {title}
      <Text fontWeight="bold">{content}</Text>
    </Box>
  );
}
