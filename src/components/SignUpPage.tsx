import { Box, Button, Input, Link, Span, Text, VStack } from "@chakra-ui/react";
import { Field } from "@/components/ui/field";
import { PasswordInput } from "./ui/password-input";
import { useColorMode } from "./ui/color-mode";
import { IoMdClose } from "react-icons/io";

const SignUpPage = () => {
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
      minWidth="30vw"
      minHeight="50vh"
      shadow="2xl"
      marginY="10"
      justify="center"
      gap="7"
      // padding="20"
      padding={{ sm: "10", md: "20" }}
      border={{
        sm: "",
        md: colorMode === "dark" ? "2px white solid" : "2px black solid",
      }}
      // borderRadius="3xl"
      borderRadius={{ sm: "none", md: "3xl" }}
      bg={colorMode === "dark" ? "#18181b" : "#"}
    >
      <VStack
        minWidth="30vw"
        padding="5"
        width={{ base: "100vw", md: "30vw" }}
        height={{ base: "100vh", md: "35vh" }}
        alignItems="center"
        justifyContent="center"
      >
        <Box
          hideFrom="md"
          position="absolute"
          top="5"
          right="5"
          cursor="pointer" // Optional: Add pointer cursor for interactivity
          fontSize="3.5vh"
        >
          <Link href="/">
            <IoMdClose />
          </Link>
        </Box>
        <Box>
          <Text fontSize="3xl">Welcome!</Text>
        </Box>
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

        <Button margin="5">
          <Text>Sign up</Text>
        </Button>
        <Text>
          Already have an account?{" "}
          <Link href="/signInPage" variant="underline">
            <Span color="blue">Sign in</Span>
          </Link>
        </Text>
      </VStack>
    </VStack>
  );
};

export default SignUpPage;
