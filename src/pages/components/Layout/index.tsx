import { Flex } from "@chakra-ui/react";
import { FunctionComponent } from "react";

export const Layout: FunctionComponent = ({ children }) => {
  return (
    <Flex p="12" ml="72">
      {children}
    </Flex>
  );
};
