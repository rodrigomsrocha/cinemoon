import { Heading, Text, VStack } from "@chakra-ui/react";
import { FiHome, FiClock, FiCompass, FiList } from "react-icons/fi";
import { MenuItem } from "./MenuItem";

export const Sidebar = () => {
  return (
    <VStack
      position="fixed"
      top={0}
      left={0}
      h="full"
      w="72"
      borderRight="1px"
      borderColor="purple.200"
      align="flex-start"
      padding="12"
      zIndex={10}
      bg="white"
    >
      <Heading mb={4} size="lg" color="purple.500">
        Cinemoon
      </Heading>
      <VStack w="full" align="flex-start">
        <Text color="purple.200">Menu</Text>
        <MenuItem path="/" icon={<FiHome />} tabName="Home" />
        <MenuItem path="/discover" icon={<FiCompass />} tabName="Discover" />
        <MenuItem
          path="/coming-soon"
          icon={<FiClock />}
          tabName="Coming soon"
        />
        <MenuItem path="/my-list" icon={<FiList />} tabName="My list" />
      </VStack>
    </VStack>
  );
};
