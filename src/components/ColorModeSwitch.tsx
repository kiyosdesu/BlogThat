import { Button, Text } from "@chakra-ui/react";
import { useColorMode } from "./ui/color-mode";
import { CiLight } from "react-icons/ci";
import { MdDarkMode } from "react-icons/md";
const ColorModeSwitch = () => {
  const { toggleColorMode, colorMode } = useColorMode();
  return (
    <>
      {/* <Switch isChecked={colorMode === "dark"} onChange={toggleColorMode} /> */}
      <Button aria-label="toggle color mode" onClick={toggleColorMode}>
        {colorMode === "dark" ? <CiLight /> : <MdDarkMode />}
      </Button>
      <Text> </Text>
    </>
  );
};

export default ColorModeSwitch;
