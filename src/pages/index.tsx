import { IndexPage } from "@/components/templates";
import { Flex } from "@chakra-ui/react";

export default function Home() {
  return (
    <Flex
      height="90vh"
      maxWidth="900px"
      margin="0 auto"
      justifyContent="center"
      alignItems="center"
      padding="1rem"
    >
      <IndexPage />
    </Flex>
  );
}
