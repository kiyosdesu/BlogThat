import { Box, Text } from "@chakra-ui/react";
import ColorModeSwitch from "./ColorModeSwitch";

const Navbar = () => {
  const navItems = [
    { word: "Write", id: 1 },
    { word: "Sign in", id: 2 },
    { word: "Get Started", id: 3 },
  ];
  return (
    <Box
      display="flex"
      justifyContent="space-around "
      padding="10"
      fontFamily="Inter"
      alignItems="center"
    >
      <Box>
        <Text fontSize="5xl">BlogThat</Text>
      </Box>
      <Box display="flex" gap="7" alignItems="center">
        {navItems.map((items) => (
          <Text fontWeight={items.id === 3 ? "bold" : ""}> {items.word}</Text>
        ))}
        <ColorModeSwitch />
      </Box>
    </Box>
  );
};

export default Navbar;
