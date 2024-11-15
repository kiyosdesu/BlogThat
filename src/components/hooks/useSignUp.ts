import fetcher from "@/util/fetcher";
import { useMutation } from "@tanstack/react-query";

export interface SignUpData {
  email: string;
  username: string;
  password: string;
  confirmPassword: string;
}

const useSignUp = () => {
  const mutation = useMutation({
    mutationFn: async ({
      email,
      username,
      password,
      confirmPassword,
    }: SignUpData) => {
      fetcher("/auth/sign-up", "POST", {
        body: JSON.stringify({
          email,
          username,
          password,
          confirmPassword,
        }),
      });
    },
  });
  return mutation;
};

export default useSignUp;
