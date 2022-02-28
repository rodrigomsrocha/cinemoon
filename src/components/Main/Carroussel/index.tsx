import {
  Box,
  ButtonGroup,
  Flex,
  Heading,
  IconButton,
  VStack,
} from "@chakra-ui/react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { RiArrowRightSLine } from "react-icons/ri";
import { Item } from "./Item";
import "@splidejs/splide/dist/css/splide.min.css";

interface Movie {
  title: string;
  backdrop_path: string;
  id: string;
}

interface CarrouselProps {
  heading: string;
  movies: Movie[];
}

export function Carrousel({ heading, movies }: CarrouselProps) {
  return (
    <VStack w="full" align="flex-start" gap="4">
      <Flex w="full" align="center" justify="space-between">
        <Heading
          color="purple.500"
          position="relative"
          _before={{
            content: '""',
            display: "iblock",
            height: "20px",
            width: "20px",
            bgColor: "#ED64A6",
            borderRadius: "6px",
            position: "absolute",
            zIndex: -1,
            left: "-5px",
            top: "2px",
          }}
        >
          {heading}
        </Heading>
      </Flex>
      <Splide
        renderControls={() => (
          <ButtonGroup
            colorScheme="purple"
            className="splide__arrows"
            gap="8"
            position="absolute"
            top="-38%"
            right="-4"
          >
            <IconButton
              className="splide__arrow--prev"
              aria-label="arrow left"
              icon={<RiArrowRightSLine />}
            />
            <IconButton
              className="splide__arrow--next"
              aria-label="arrow right"
              icon={<RiArrowRightSLine />}
            />
          </ButtonGroup>
        )}
        options={{
          autoWidth: true,
          perPage: 3,
          gap: "1rem",
          pagination: false,
          rewind: true,
        }}
      >
        {movies.map((movie) => (
          <SplideSlide key={movie.id}>
            <Item
              id={movie.id}
              backdrop_path={movie.backdrop_path}
              title={movie.title}
            />
          </SplideSlide>
        ))}
      </Splide>
    </VStack>
  );
}
