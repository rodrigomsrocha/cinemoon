import {
  Box,
  Button,
  Collapse,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
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
import { useRecoilState, useRecoilValue } from "recoil";
import { infoBarState } from "../../../recoil/movie/infoBar";
import { movieDetailsState } from "../../../recoil/movie/movieDetails";

export const InfoBar = () => {
  const [infoBar, setInfoBar] = useRecoilState(infoBarState);
  const [showText, setShowText] = useState(false);
  const movieDetails = useRecoilValue(movieDetailsState);

  const showCompleteSynopsis = () => {
    setShowText(!showText);
  };

  const handleClose = () => {
    setInfoBar(false);
  };

  return (
    <Drawer size="xs" isOpen={infoBar} onClose={handleClose}>
      <DrawerOverlay />
      <DrawerContent borderLeftWidth="1px" borderColor="purple.500" py="8">
        <DrawerHeader>
          {movieDetails?.poster ? (
            <Image mx="auto" borderRadius={10} src={movieDetails.poster} />
          ) : (
            <Flex
              mx="auto"
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
        </DrawerHeader>
        <DrawerBody
          sx={{
            "&::-webkit-scrollbar": {
              width: "6px",
              backgroundColor: `#D6BCFA`,
            },
            "&::-webkit-scrollbar-thumb": {
              borderRadius: "3px",
              backgroundColor: `#6B46C1`,
            },
          }}
        >
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
                    {showText ? "Show less" : "Show more"}
                  </Button>
                </VStack>
              </Box>
              <Box mt="8">
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
                <Grid templateColumns="repeat(7, 1fr)" gap={2}>
                  {movieDetails.providers ? (
                    movieDetails.providers.map((provider) => (
                      <Image
                        borderRadius={6}
                        key={provider.provider_id}
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
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
};
