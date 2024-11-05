import { Box, HStack } from "@chakra-ui/react";
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
import { Button } from "./ui/button";
import TItle from "./TItle";
import NavItems from "./NavItems";
import { useColorMode } from "./ui/color-mode";
import ColorModeSwitch from "./ColorModeSwitch";

const PhoneNavbar = () => {
  const theme = useColorMode();
  return (
    <Box
      display="flex"
      justifyContent="space-around"
      alignItems="center"
      borderBottom={
        theme.colorMode === "light" ? "2px white solid" : "2px black solid"
      }
      minHeight="10vh"
    >
      <TItle />
      <Box>
        {" "}
        <HStack wrap="wrap">
          <DrawerRoot placement="start" size="full">
            <DrawerBackdrop />
            <DrawerTrigger asChild>
              <Button variant="outline" size="sm">
                Open
              </Button>
            </DrawerTrigger>
            <DrawerContent>
              <DrawerHeader>
                <DrawerTitle display="flex" gap="5">
                  <TItle />
                  <ColorModeSwitch />
                </DrawerTitle>
              </DrawerHeader>
              <DrawerBody>
                <DrawerActionTrigger asChild>
                  <NavItems />
                </DrawerActionTrigger>
              </DrawerBody>
              <DrawerFooter>
                <DrawerActionTrigger asChild>
                  <Button variant="outline"></Button>
                </DrawerActionTrigger>
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
