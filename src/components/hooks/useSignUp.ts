import fetcher from "@/util/fetcher";
import { useMutation } from "@tanstack/react-query";

interface SignUpData {
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
}

const useSignUp = () => {
  const mutation = useMutation<Error, SignUpData>({
    mutationFn: async (signUpData) => {
      return await fetcher("/auth/sign-up", "POST");
    },
  });
};
