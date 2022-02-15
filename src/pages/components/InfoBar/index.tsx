import {
  Box,
  Button,
  Collapse,
  Flex,
  Grid,
  Heading,
  Image,
  Spacer,
  Text,
  VStack,
} from "@chakra-ui/react";
import { useState } from "react";
import { FaImdb } from "react-icons/fa";
import { FiClock } from "react-icons/fi";

export const InfoBar = () => {
  const [showText, setShowText] = useState(false);

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
      <Box>
        <Heading size="lg" color="purple.500">
          La La Land
        </Heading>
        <VStack align="flex-start">
          <Collapse startingHeight={70} in={showText}>
            O pianista Sebastian conhece a atriz Mia, e os dois se apaixonam
            perdidamente. Em busca de oportunidades para suas carreiras na
            competitiva Los Angeles, os jovens tentam fazer o relacionamento
            amoroso dar certo, enquanto perseguem fama e sucesso.
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
          <Text mr="2">128m</Text>
          <FaImdb size="18" />
          <Text>8.0</Text>
        </Flex>
        <Text color="purple.300">Comédia, Drama, Romance, Música</Text>
      </Box>
      <Box>
        <Heading color="purple.400" mb="4" size="md">
          Where to watch
        </Heading>
        <Grid templateColumns="repeat(5, 1fr)" gap={2}>
          <Image
            borderRadius={6}
            width="32px"
            height="32px"
            src="https://image.tmdb.org/t/p/original/t2yyOv40HZeVlLjYsCsPHnWLk4W.jpg"
          />
          <Image
            borderRadius={6}
            width="32px"
            height="32px"
            src="https://image.tmdb.org/t/p/original/9heT8tYWAXAeF0spSrCmfZ3m8M.jpg"
          />
        </Grid>
      </Box>
    </VStack>
  );
};
