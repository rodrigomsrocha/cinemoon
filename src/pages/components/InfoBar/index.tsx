import {
  Box,
  Button,
  Collapse,
  Flex,
  Grid,
  GridItem,
  Heading,
  Image,
  Spacer,
  Text,
  VStack,
} from "@chakra-ui/react";
import { useState } from "react";
import { FaImdb } from "react-icons/fa";
import { FiClock } from "react-icons/fi";
import { useRecoilValue } from "recoil";
import { movieDetailsState } from "../../../recoil/movie/movieDetails";

export const InfoBar = () => {
  const [showText, setShowText] = useState(false);
  const movieDetails = useRecoilValue(movieDetailsState);
  console.log(movieDetails);

  const showCompleteSynopsis = () => {
    setShowText(!showText);
  };

  return (
    <VStack
      position="fixed"
      top={0}
      right={0}
      h="full"
      w="72"
      borderLeft="1px"
      borderColor="purple.200"
      align="flex-start"
      px="8"
      py="12"
      zIndex={10}
      bg="white"
      overflow="auto"
      gap="6"
    >
      {movieDetails?.poster ? (
        <Image borderRadius={10} src={movieDetails.poster} />
      ) : (
        <Flex
          minW="200px"
          w="200px"
          bg="purple.200"
          minH="300px"
          borderRadius={10}
          border="1px"
          borderStyle="dashed"
          borderColor="purple.300"
          align="center"
          justify="center"
          textAlign="center"
          p="6"
        >
          <Text color="purple.300">Select a movie to see its details</Text>
        </Flex>
      )}
      {movieDetails && (
        <>
          <Box>
            <Heading size="lg" color="purple.500">
              {movieDetails.title}
            </Heading>
            <VStack align="flex-start">
              <Collapse startingHeight={70} in={showText}>
                {movieDetails.synopsis}
              </Collapse>
              <Button
                onClick={showCompleteSynopsis}
                variant="link"
                colorScheme="purple"
              >
                Show more
              </Button>
            </VStack>
          </Box>
          <Box>
            <Flex align="center" w="full">
              <FiClock size="18" />
              <Text mr="2">{movieDetails.runtime}</Text>
              <FaImdb size="18" />
              <Text>{movieDetails.rating}</Text>
            </Flex>
            <Text color="purple.300">{movieDetails.genres.join(", ")}</Text>
          </Box>
          <Box>
            <Heading color="purple.400" mb="4" size="md">
              Where to watch
            </Heading>
            <Grid templateColumns="repeat(5, 1fr)" gap={2}>
              {movieDetails.providers ? (
                movieDetails.providers.map((provider) => (
                  <Image
                    borderRadius={6}
                    width="32px"
                    height="32px"
                    title={provider.provider_name}
                    src={provider.provider_logo}
                  />
                ))
              ) : (
                <GridItem colSpan={5} w="full">
                  <Text>No Watch providers yet.</Text>
                </GridItem>
              )}
            </Grid>
          </Box>
        </>
      )}
    </VStack>
  );
};
