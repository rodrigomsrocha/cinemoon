import { VStack } from "@chakra-ui/react";
import { NowPlaying } from "./NowPlaying";
import { Popular } from "./Popular";
import { TopRated } from "./TopRated";

export function Main() {
  return (
    <VStack align="flex-start" mt="10" gap="8">
      <Popular />
      <TopRated />
      <NowPlaying />
    </VStack>
  );
}
