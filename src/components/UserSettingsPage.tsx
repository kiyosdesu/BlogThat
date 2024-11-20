import { Text, Stack, HStack, VStack } from "@chakra-ui/react";

const UserSettingsPage = () => {
  const settings = [
    { type: "Username", act: "takish155" },
    { type: "Password", act: "******" },
  ];

  return (
    <VStack height="80vh" gap="10vh" width="98vw">
      <Text fontSize="4xl" ml="16vh" alignSelf="start">
        Settings
      </Text>
      <Stack gap={{ base: "5vh", md: "20vh" }} flexWrap="wrap">
        {settings.map((set, ind) => (
          <HStack gap={{ base: "7vh", md: "35vh" }} flexWrap="wrap" key={ind}>
            <Text alignSelf="start" fontSize="2xl">
              {set.type}
            </Text>
            <Text fontSize="2xl">{set.act}</Text>
          </HStack>
        ))}
      </Stack>
    </VStack>
  );
};

export default UserSettingsPage;
