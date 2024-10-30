import { Box, Text, Link } from "@chakra-ui/react";

const NavItems = () => {
  const navItems = [
    { word: "Write", id: 1 },
    { word: "Sign in", id: 2, link: "signInPage" },
    { word: "Get Started", id: 3 },
  ];
  return (
    <Box
      display="flex"
      gap={{ base: "3.5", md: "7" }}
      flexDirection={{ base: "column", md: "row" }}
    >
      {navItems.map((items) => (
        <Link
          variant={{ base: "underline", md: "plain" }}
          href="/signInPage"
          _selected={{ border: "none" }}
          _focus={{ boxShadow: "none", border: "none", outline: "none" }}
        >
          <Text
            fontWeight={items.id === 3 ? "bold" : ""}
            fontSize={{ base: "2xl", md: "md" }}
          >
            {" "}
            {items.word}
          </Text>
        </Link>
      ))}
    </Box>
  );
};

export default NavItems;
