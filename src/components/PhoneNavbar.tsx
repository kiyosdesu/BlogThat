import { Box, HStack, useDisclosure } from "@chakra-ui/react";
import {
  DrawerActionTrigger,
  DrawerBackdrop,
  DrawerBody,
  DrawerCloseTrigger,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerRoot,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
// import { Button } from "./ui/button";
import TItle from "./TItle";
import NavItems from "./NavItems";
import { useColorMode } from "./ui/color-mode";
import ColorModeSwitch from "./ColorModeSwitch";
import { FaHamburger } from "react-icons/fa";
import { Link } from "react-router-dom";
import UserAvatar from "./UserAvatar";

const PhoneNavbar = () => {
  const { onClose } = useDisclosure();
  const theme = useColorMode();
  return (
    <Box
      display="flex"
      justifyContent="space-between"
      paddingX="5"
      alignItems="center"
      borderBottom={
        theme.colorMode === "light" ? "2px white solid" : "2px black solid"
      }
      minHeight="10vh"
    >
      <Box>
        <TItle />
      </Box>
      <Box>
        {" "}
        <HStack wrap="wrap">
          <DrawerRoot placement="start" size="full">
            <DrawerBackdrop />
            <DrawerTrigger asChild>
              {/* <Button variant="outline" size="sm"> */}
              <Box padding="5">
                <FaHamburger />
              </Box>
              {/* </Button> */}
            </DrawerTrigger>
            <DrawerContent>
              <DrawerHeader>
                <DrawerTitle display="flex" gap="5">
                  <TItle />

                  <Box onClick={onClose}></Box>
                  <Link to={"/userSettings"}>
                    <UserAvatar />
                  </Link>
                  <ColorModeSwitch />
                </DrawerTitle>
              </DrawerHeader>
              <DrawerBody>
                <DrawerActionTrigger asChild>
                  <Box onClick={onClose}>
                    <NavItems />
                  </Box>
                </DrawerActionTrigger>
              </DrawerBody>
              <DrawerFooter>
                {/* <DrawerActionTrigger asChild>
                  <Button variant="outline"></Button>
                </DrawerActionTrigger> */}
              </DrawerFooter>
              <DrawerCloseTrigger />
            </DrawerContent>
          </DrawerRoot>
        </HStack>
      </Box>
    </Box>
  );
};

export default PhoneNavbar;
