import { Box, Text, VStack } from "@chakra-ui/react";

const HomePage = () => {
  return (
    <VStack width="100vw" height="100vh" alignItems="center " justify="center">
      <Box alignSelf="start" marginLeft="20">
        <Text fontSize="5xl">Kupals and Animals</Text>
        <Text fontSize="3xl">Place to waste your time</Text>
      </Box>
    </VStack>
  );
};

export default HomePage;
