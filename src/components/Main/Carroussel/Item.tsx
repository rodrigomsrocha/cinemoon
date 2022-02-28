import { Box, BoxProps, Image, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useSetRecoilState } from "recoil";
import { infoBarState } from "../../../recoil/movie/infoBar";
import { movieIdState } from "../../../recoil/movie/movieId";

const MotionBox = motion<BoxProps>(Box);

const boxAnimation = {
  rest: {
    y: 57,
    transition: {
      duration: 0.3,
      type: "linear",
      ease: "easeIn",
    },
  },
  hover: {
    y: 0,
    transition: {
      duration: 0.3,
      type: "linear",
      ease: "easeOut",
    },
  },
};

interface ItemProps {
  title: string;
  backdrop_path: string;
  id: string;
}

export function Item({ title, backdrop_path, id }: ItemProps) {
  const setInfoBar = useSetRecoilState(infoBarState);
  const setMovieId = useSetRecoilState(movieIdState);
  const handleMovieClick = (movieId: string) => {
    setMovieId(movieId);
    setInfoBar(true);
  };

  return (
    <MotionBox
      borderRadius="12"
      overflow="hidden"
      cursor="pointer"
      position="relative"
      borderWidth="1px"
      borderColor="purple.500"
      initial="rest"
      whileHover="hover"
      animate="rest"
      flex="none"
      onClick={() => handleMovieClick(id)}
      boxShadow="lg"
    >
      <Image src={backdrop_path} />
      <MotionBox
        position="absolute"
        bg="white"
        bottom="0"
        w="full"
        p="4"
        borderTopWidth="1px"
        borderColor="purple.500"
        variants={boxAnimation}
      >
        <Text isTruncated fontWeight="bold" color="purple.500">
          {title}
        </Text>
      </MotionBox>
    </MotionBox>
  );
}
