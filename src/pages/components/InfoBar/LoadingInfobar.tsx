import { Box, Flex, VStack, keyframes } from "@chakra-ui/react";

const shimmer = keyframes`
  100% {transform: translateX(100%)}
`;

export function LoadingInfobar() {
  const shimmerAnimation = `${shimmer} 2s infinite`;
  const shimmerAfter = {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    transform: "translateX(-100%)",
    backgroundImage: `linear-gradient(
      90deg,
      rgba(255, 255, 255, 0),
      rgba(255, 255, 255, 0.2) 20%,
      rgba(255, 255, 255, 0.5) 60%,
      rgba(255, 255, 255, 0)
    )`,
    content: '""',
    animation: shimmerAnimation,
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
      <Box
        minW="200px"
        w="200px"
        bg="#dddbdd"
        minH="300px"
        borderRadius={10}
        position="relative"
        overflow="hidden"
        display="inline-block"
        _after={shimmerAfter}
      ></Box>
      <Box
        w="full"
        minH="6"
        bg="#dddbdd"
        position="relative"
        overflow="hidden"
        borderRadius={6}
        _after={shimmerAfter}
      ></Box>
      <VStack w="full" align="start">
        <Box
          w="full"
          h="4"
          bg="#dddbdd"
          position="relative"
          overflow="hidden"
          borderRadius={6}
          _after={shimmerAfter}
        ></Box>
        <Box
          w="80%"
          h="4"
          bg="#dddbdd"
          position="relative"
          overflow="hidden"
          borderRadius={6}
          _after={shimmerAfter}
        ></Box>
        <Box
          w="70%"
          h="4"
          bg="#dddbdd"
          position="relative"
          overflow="hidden"
          borderRadius={6}
          _after={shimmerAfter}
        ></Box>
      </VStack>
    </VStack>
  );
}
