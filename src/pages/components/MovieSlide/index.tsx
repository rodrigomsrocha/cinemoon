import { Box, HStack, IconButton, StackProps } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { ReactNode, useEffect, useRef, useState } from "react";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import { Item } from "./Item";

interface MovieProps {
  id: string;
  title: string;
  genres: {
    id: number;
    name: number;
  }[];
  rating: string;
  backdrop: string;
}

interface MovieSlideProps {
  gap?: number;
  movies: MovieProps[];
}

const MotionHStack = motion<StackProps>(HStack);

export const MovieSlide = ({ gap = 12, movies }: MovieSlideProps) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const variants = {
    moving: {
      x: (-ref?.current?.clientWidth - 56) * currentSlide,
    },
  };
  const movingTransition = {
    type: "spring",
    duration: 1.5,
    stiffness: 30,
  };

  const [isMoving, setIsMoving] = useState(false);

  const moveToNext = () => {
    if (currentSlide === movies.length - 1) {
      setCurrentSlide(-1);
    }
    setCurrentSlide((prevState) => (prevState += 1));
    setIsMoving(true);
    setTimeout(() => {
      setIsMoving(false);
    }, movingTransition.duration * 1000 - 1500);
  };
  const moveToPrev = () => {
    if (currentSlide === 0) {
      setCurrentSlide(movies.length);
    }
    setCurrentSlide((prevState) => (prevState -= 1));
    setIsMoving(true);
    setTimeout(() => {
      setIsMoving(false);
    }, movingTransition.duration * 1000 - 1500);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      buttonRef.current.click();
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <Box overflow="hidden" w="full" position="relative">
      <IconButton
        position="absolute"
        top="40%"
        left={10}
        zIndex={5}
        aria-label="left-arrow"
        icon={<FiArrowLeft color="white" />}
        bg="purple.200"
        opacity={0.7}
        onClick={moveToPrev}
        _hover={{
          bg: "purple.200",
          opacity: 1,
        }}
      />
      <MotionHStack
        variants={variants}
        animate={isMoving && "moving"}
        transition={movingTransition}
        gap={gap}
        transform="auto"
        ref={ref}
      >
        {movies?.map((movie) => {
          return <Item key={movie.id} movie={movie} />;
        })}
      </MotionHStack>
      <IconButton
        ref={buttonRef}
        top="40%"
        opacity={0.7}
        position="absolute"
        right={10}
        zIndex={5}
        aria-label="left-arrow"
        icon={<FiArrowRight color="white" />}
        bg="purple.200"
        onClick={moveToNext}
        _hover={{
          bg: "purple.200",
          opacity: 1,
        }}
      />
    </Box>
  );
};
