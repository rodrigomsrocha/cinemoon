import {
  Box,
  VStack,
  keyframes,
  Drawer,
  DrawerOverlay,
  DrawerHeader,
  DrawerContent,
  DrawerBody,
} from "@chakra-ui/react";
import { useRecoilState } from "recoil";
import { infoBarState } from "../../../recoil/movie/infoBar";

const shimmer = keyframes`
  100% {transform: translateX(100%)}
`;

export function LoadingInfobar() {
  const [infoBar, setInfoBar] = useRecoilState(infoBarState);

  const handleClose = () => {
    setInfoBar(false);
  };

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
    <Drawer size="xs" isOpen={infoBar} onClose={handleClose}>
      <DrawerOverlay />
      <DrawerContent>
        <DrawerHeader>
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
        </DrawerHeader>
        <DrawerBody>
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
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
}
