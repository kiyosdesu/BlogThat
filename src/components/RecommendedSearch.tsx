import { HStack, Text } from "@chakra-ui/react";

const RecommendedSearch = () => {
  const arr = [
    "Celebrity",
    "Technology",
    "Country",
    "Programming",
    "Vehicles",
    "Media",
    "War",
    "Celebrity",
    "Technology",
    "Country",
    "Programming",
    "Vehicles",
    "Media",
    "War",
  ];
  return (
    <>
      <HStack
        id="container"
        // maxWidth="100vw"
        width="98.7vw"
        gap="10"
        overflowX="scroll"
        overflowY="hidden"
        bg="red"
        scrollBehavior="smooth"
        scrollbarWidth="hidden"
        justify="center"
        alignItems="center"
      >
        {arr.map((item, ind) => (
          <Text key={ind} fontSize="3xl" paddingX="2">
            {item}
          </Text>
        ))}
      </HStack>
    </>
  );
};

export default RecommendedSearch;
