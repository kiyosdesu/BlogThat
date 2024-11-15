import { Box, Button, Input, Link, Span, Text, VStack } from "@chakra-ui/react";
import { Field } from "@/components/ui/field";
import { PasswordInput } from "./ui/password-input";
import { useColorMode } from "./ui/color-mode";
import { IoMdClose } from "react-icons/io";
import { useForm } from "react-hook-form";
import useSignUp, { SignUpData } from "./hooks/useSignUp";

const SignUpPage = () => {
  const { register, handleSubmit, reset } = useForm<SignUpData>();
  const onSubmit = (data: SignUpData) => {
    mutate(data);

    reset();
  };

  const { isPending, mutate } = useSignUp();

  const { colorMode } = useColorMode();
  const logInField = [
    {
      type: "username",
      placeholder: "Username",
      required: "required",
      reactForm: { ...register("username") },
    },
    {
      type: "email",
      placeholder: "Example@mail.com",
      reactForm: { ...register("email") },
    },
  ];

  const passLoginField = [
    {
      type: "password",
      placeholder: "password",
      reactForm: { ...register("password") },
    },
    {
      type: "confirm password",
      placeholder: "confirm password",
      reactForm: { ...register("confirmPassword") },
    },
  ];

  if (isPending) return <Text>Loading...</Text>;

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
          {logInField.map((item, ind) => (
            <Field label={item.type} required key={ind}>
              <Input
                placeholder={item.placeholder}
                {...item.reactForm}
                size="lg"
              />
            </Field>
          ))}
          {passLoginField.map((item, ind) => (
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
          Already have an account?{" "}
          <Link href="sign-in" variant="underline">
            <Span color="blue">Sign up</Span>
          </Link>
        </Text>
      </VStack>
    </VStack>
  );
};

export default SignUpPage;
