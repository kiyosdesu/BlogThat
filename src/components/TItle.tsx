import { Box, Link, Text } from "@chakra-ui/react";

const TItle = () => {
  return (
    <Box>
      <Link
        href="/"
        _selected={{ border: "none" }}
        _focus={{ boxShadow: "none", border: "none", outline: "none" }}
      >
        <Text fontSize={{ base: "3xl", md: "5xl" }}>BlogThat</Text>
      </Link>
    </Box>
  );
};

export default TItle;
