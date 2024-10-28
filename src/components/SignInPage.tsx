import { Box, Button, Input, Text, VStack } from "@chakra-ui/react";
import { Field } from "@/components/ui/field";
import { PasswordInput } from "./ui/password-input";
import { useColorMode } from "./ui/color-mode";

const SignInPage = () => {
  const { colorMode } = useColorMode();
  const logIn = [
    {
      type: "username",
      placeholder: "Username",
      required: "required",
    },
    { type: "email", placeholder: "Example@mail.com" },
  ];

  const passLogin = [
    { type: "password", placeholder: "password" },
    { type: "confirm password", placeholder: "confirm password" },
  ];

  return (
    <VStack
      justify="center"
      gap="7"
      padding="20"
      // width="50vw"
      height="50vh"
      border={colorMode === "dark" ? "2px white solid" : "2px black solid"}
      borderRadius="3xl"
      bg={colorMode === "dark" ? "#18181b" : "#"}
    >
      <Box>
        <Text fontSize="3xl">Welcome Back!</Text>
      </Box>
      <VStack>
        {logIn.map((item) => (
          <Field label={item.type} required>
            <Input placeholder={item.placeholder} size="lg" />
          </Field>
        ))}
        {passLogin.map((item) => (
          <Field label={item.type} required>
            <PasswordInput placeholder={item.placeholder} size="lg" />
          </Field>
        ))}
      </VStack>

      <Button>
        <Text>Sign in</Text>
      </Button>
    </VStack>
  );
};

export default SignInPage;
