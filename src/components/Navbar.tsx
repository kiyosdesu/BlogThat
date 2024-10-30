import { Box } from "@chakra-ui/react";
import ColorModeSwitch from "./ColorModeSwitch";
import PhoneNavbar from "./PhoneNavbar";
import TItle from "./TItle";
import NavItems from "./NavItems";

const Navbar = () => {
  return (
    <Box>
      <Box
        hideBelow="md"
        display="flex"
        justifyContent="space-around "
        padding="10"
        fontFamily="Inter"
        alignItems="center"
      >
        <TItle />
        <Box display="flex" gap="7" alignItems="center">
          <NavItems />
          <ColorModeSwitch />
        </Box>
      </Box>
      <Box hideFrom="md">
        <PhoneNavbar />
      </Box>
    </Box>
  );
};

export default Navbar;
