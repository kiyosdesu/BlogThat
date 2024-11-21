import { Text, Stack, HStack, VStack, Button } from "@chakra-ui/react";
import Modal from "./Modal";

const UserSettingsPage = () => {
  const settings = [
    { type: "Username", act: "takish155" },
    { type: "Password", act: "******" },
  ];

  return (
    <VStack height="80vh" gap="10vh" width="98vw">
      <Text fontSize="4xl" ml={{ base: "10vh", md: "40vh" }} alignSelf="start">
        Settings
      </Text>
      <Stack gap={{ base: "5vh", md: "20vh" }} flexWrap="wrap">
        {settings.map((set, ind) => (
          <HStack gap={{ base: "7vh", md: "35vh" }} flexWrap="wrap" key={ind}>
            <Text alignSelf="start" fontSize="2xl">
              {set.type}
            </Text>
            <Button variant="ghost">
              <Modal username={<Text fontSize="2xl">{set.act}</Text>} />
            </Button>
          </HStack>
        ))}
      </Stack>
    </VStack>
  );
};

export default UserSettingsPage;
