import { Button } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { ReactElement } from "react";

interface MenuItemProps {
  tabName: string;
  icon: ReactElement;
  path: string;
}

export const MenuItem = ({ tabName, icon, path }: MenuItemProps) => {
  const router = useRouter();

  function handleRedirect() {
    router.push(path);
  }

  return (
    <Button
      w="full"
      aria-label={tabName}
      leftIcon={icon}
      colorScheme="purple"
      variant={path === router.asPath ? "solid" : "outline"}
      position="relative"
      justifyContent="flex-start"
      onClick={handleRedirect}
      _after={{
        position: "absolute",
        display: path === router.asPath ? "inline" : "none",
        content: '""',
        left: "122%",
        top: "50%",
        width: "6px",
        transform: "translateY(-50%)",
        height: "80%",
        bg: "#6B6CD3",
        borderTopLeftRadius: "3px",
        borderBottomLeftRadius: "3px",
      }}
    >
      {tabName}
    </Button>
  );
};
