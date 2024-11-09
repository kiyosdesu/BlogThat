import { Box, Button, Input, Link, Span, Text, VStack } from "@chakra-ui/react";
import { Field } from "@/components/ui/field";
import { PasswordInput } from "./ui/password-input";
import { useColorMode } from "./ui/color-mode";
import { IoMdClose } from "react-icons/io";
import { useForm, FieldValues } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const schema = z.object({
  email: z.string().min(3),
  password: z.string().min(8),
});

type FormData = z.infer<typeof schema>;

const SignInPage = () => {
  const {
    register,
    handleSubmit,
    // formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = (data: FieldValues) => console.log(data);

  const { colorMode } = useColorMode();
  const logIn = [{ type: "email", placeholder: "Example@mail.com" }];

  const passLogin = [
    { type: "password", placeholder: "password" },
    // { type: "confirm password", placeholder: "confirm password" },
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
        <Box position="relative" top="-10">
          <Text fontSize="3xl">Welcome back!</Text>
        </Box>
        <form action="" onSubmit={handleSubmit(onSubmit)}>
          <VStack>
            {logIn.map((item, ind) => (
              <Field label={item.type} required key={ind}>
                <Input
                  placeholder={item.placeholder}
                  {...register("email")}
                  size="lg"
                />
              </Field>
            ))}
            {passLogin.map((item, ind) => (
              <Field label={item.type} required key={ind}>
                <PasswordInput
                  placeholder={item.placeholder}
                  {...register("password")}
                  size="lg"
                />
                <Text color="red" fontVariant="common-ligatures">
                  password must be atleast 8 characters
                </Text>
              </Field>
            ))}
            <Button margin="5">
              <input type="submit" value="Sign in" />
            </Button>
          </VStack>
        </form>
        <Text>
          Dont have an account?{" "}
          <Link href="/sign-up" variant="underline">
            <Span color="blue">Sign up</Span>
          </Link>
        </Text>
      </VStack>
    </VStack>
  );
};

export default SignInPage;
