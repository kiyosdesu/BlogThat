import { Box, Button, Input, Link, Span, Text, VStack } from "@chakra-ui/react";
import { Field } from "@/components/ui/field";
import { PasswordInput } from "./ui/password-input";
import { useColorMode } from "./ui/color-mode";
import { IoMdClose } from "react-icons/io";
import { useForm } from "react-hook-form";
import useSignIn from "./hooks/useSignIn";

interface SignUpData {
  username: string;
  password: string;
}

const SignInPage = () => {
  const { register, handleSubmit } = useForm<SignUpData>();
  const onSubmit = (data: SignUpData) => {
    mutate(data); // Directly pass the form data
  };
  const { colorMode } = useColorMode();
  const { mutate, isPending } = useSignIn();

  const logIn = [
    {
      type: "username",
      placeholder: "BlogThatUser",
      reactForm: { ...register("username") },
    },
  ];

  const passwordLogIn = [
    {
      type: "password",
      placeholder: "password",
      reactForm: { ...register("password") },
    },
  ];

  if (isPending) return <Text>signing in</Text>;

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
        minHeight={{ base: "100vh", md: "35vh" }}
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
        <form action="" onSubmit={handleSubmit(onSubmit)}>
          {logIn.map((item, ind) => (
            <Field label={item.type} required key={ind}>
              <Input
                placeholder={item.placeholder}
                {...item.reactForm}
                size="lg"
              />
            </Field>
          ))}
          {passwordLogIn.map((item, ind) => (
            <Field label={item.type} required key={ind}>
              <PasswordInput
                placeholder={item.placeholder}
                size="lg"
                {...item.reactForm}
              />
            </Field>
          ))}
          <Button margin="5">
            <input type="submit" value="Sign u" />
          </Button>
        </form>
        <Text>
          Dont have an account yet?{" "}
          <Link href="sign-up" variant="underline">
            <Span color="blue">Sign up</Span>
          </Link>
        </Text>
      </VStack>
    </VStack>
  );
};

export default SignInPage;
