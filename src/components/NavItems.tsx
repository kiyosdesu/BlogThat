import { Box, Text, Link } from "@chakra-ui/react";

const NavItems = () => {
  const navItems = [
    { word: "Write", id: 1, link: "HomePage2" },
    { word: "Sign in", id: 2, link: "sign-in" },
    { word: "Get Started", id: 3, link: "blogs" },
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
          href={items.link}
          _selected={{ border: "none" }}
          _focus={{ boxShadow: "none", border: "none", outline: "none" }}
          key={items.id}
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
