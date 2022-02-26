import { ButtonGroup, Flex, Heading, IconButton } from "@chakra-ui/react";
import { RiArrowLeftSLine, RiArrowRightSLine } from "react-icons/ri";

interface CarrouselProps {
  heading: string;
}

export function Carrousel({ heading }: CarrouselProps) {
  return (
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
      <ButtonGroup colorScheme="purple">
        <IconButton aria-label="arrow left" icon={<RiArrowLeftSLine />} />
        <IconButton aria-label="arrow right" icon={<RiArrowRightSLine />} />
      </ButtonGroup>
    </Flex>
  );
}
