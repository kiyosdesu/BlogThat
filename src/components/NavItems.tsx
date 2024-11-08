import { Box, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
const NavItems = () => {
  const navItems = [
    { word: "Write", id: 1, link: "" },
    { word: "Sign in", id: 2, link: "sign-in" },
    { word: "Get Started", id: 3, link: "blogs" },
  ];
  return (
    <Box
      display="flex"
      gap={{ base: "5", md: "7" }}
      flexDirection={{ base: "column", md: "row" }}
    >
      {navItems.map((items) => (
        <Link
          to={items.link}
          // variant={{ base: "underline", md: "plain" }}
          // href={items.link}
          // _selected={{ border: "none" }}
          // _focus={{ boxShadow: "none", border: "none", outline: "none" }}
          key={items.id}
        >
          <Text
            fontWeight={items.id === 3 ? "bold" : ""}
            fontSize={{ base: "2xl", md: "md" }}
            textDecoration="underline"
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
