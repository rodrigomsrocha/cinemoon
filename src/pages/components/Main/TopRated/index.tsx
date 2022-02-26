import { VStack } from "@chakra-ui/react";
import { Carrousel } from "../Carroussel";

export function TopRated() {
  return (
    <VStack w="full" align="flex-start">
      <Carrousel heading="Top rated" />
    </VStack>
  );
}
