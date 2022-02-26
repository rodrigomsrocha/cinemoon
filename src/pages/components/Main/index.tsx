import { Heading, VStack } from "@chakra-ui/react";
import { TopRated } from "./TopRated";

export function Main() {
  return (
    <VStack align="flex-start" mt="8">
      <TopRated />
    </VStack>
  );
}
