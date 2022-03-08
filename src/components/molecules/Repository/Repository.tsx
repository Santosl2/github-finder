import { UsersRepositoriesResponse } from "@/services/Users/Users.types";
import { Badge, Box, Text } from "@chakra-ui/react";

export function Repository({
  name,
  description,
  language,
  html_url: htmlUrl,
}: Pick<
  UsersRepositoriesResponse,
  "name" | "description" | "language" | "html_url"
>): JSX.Element {
  return (
    <Box
      bg="gray.900"
      p="1rem"
      cursor="pointer"
      onClick={() => window.open(htmlUrl)}
    >
      <Text fontSize="xl" fontWeight="bold">
        {name}
      </Text>
      <Badge fontSize="xs" colorScheme="blue">
        {language}
      </Badge>

      <Text fontSize="sm">{description || "Sem descrição."}</Text>
    </Box>
  );
}
