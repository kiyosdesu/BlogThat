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

const PhoneNavbar = () => {
  return (
    <Box
      display="flex"
      justifyContent="space-around"
      alignItems="center"
      borderBottom="2px white solid"
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
                <DrawerTitle>
                  <TItle />
                </DrawerTitle>
              </DrawerHeader>
              <DrawerBody>
                <DrawerActionTrigger asChild>
                  <NavItems />
                </DrawerActionTrigger>
              </DrawerBody>
              <DrawerFooter>
                <DrawerActionTrigger asChild>
                  <Button variant="outline">Cancel</Button>
                </DrawerActionTrigger>
                <Button>Save</Button>
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
