import { Button, Text, Box } from "@chakra-ui/react";
import { useColorMode } from "./ui/color-mode";
import { CiLight } from "react-icons/ci";
import { MdDarkMode } from "react-icons/md";
const ColorModeSwitch = () => {
  const { toggleColorMode, colorMode } = useColorMode();
  return (
    <>
      {/* <Switch isChecked={colorMode === "dark"} onChange={toggleColorMode} /> */}
      <Button
        aria-label="toggle color mode"
        onClick={toggleColorMode}
        variant="ghost"
      >
        {colorMode === "dark" ? (
          <Box as={CiLight} boxSize="30px" />
        ) : (
          <Box as={MdDarkMode} boxSize="30px" />
        )}
      </Button>
      <Text> </Text>
    </>
  );
};

export default ColorModeSwitch;
