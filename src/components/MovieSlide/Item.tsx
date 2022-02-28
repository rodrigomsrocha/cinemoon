import { Box, Button, Flex, Heading, Text } from "@chakra-ui/react";
import { FiPlus } from "react-icons/fi";
import { FaImdb } from "react-icons/fa";
import { useSetRecoilState } from "recoil";
import { movieIdState } from "../../recoil/movie/movieId";
import { infoBarState } from "../../recoil/movie/infoBar";

interface ItemProps {
  movie: {
    id: string;
    title: string;
    genres: {
      id: number;
      name: number;
    }[];
    rating: string;
    backdrop: string;
  };
}

export const Item = ({ movie }: ItemProps) => {
  const setInfoBar = useSetRecoilState(infoBarState);
  const setMovieId = useSetRecoilState(movieIdState);
  const handleMovieClick = (movieId: string) => {
    setMovieId(movieId);
    setInfoBar(true);
  };

  return (
    <Flex
      align="flex-end"
      color="white"
      borderRadius={16}
      bgImage={movie.backdrop}
      bgPosition="center"
      bgSize="cover"
      p={10}
      minW="full"
      h="96"
      onClick={() => handleMovieClick(movie.id)}
      cursor="pointer"
    >
      <Flex justify="flex-start" direction="column" gap="4">
        <Heading>{movie.title}</Heading>
        <Text>{movie.genres.map((genre) => genre.name).join(", ")}</Text>
        <Flex color="white" align="flex-end" gap={2} ml="-1px">
          <Button leftIcon={<FiPlus />} colorScheme="purple">
            Add to my list
          </Button>
          <Box bg="black" w={10} h={10} borderRadius={6}>
            <FaImdb color="#E2B616" size="100%" />
          </Box>
          <Text fontWeight="bold">{movie.rating}</Text>
        </Flex>
      </Flex>
    </Flex>
  );
};
