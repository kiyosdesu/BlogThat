import fetcher from "@/util/fetcher";
import { useMutation } from "@tanstack/react-query";

interface SignInData {
  username: string;
  password: string;
}

const useSignIn = () => {
  const mutation = useMutation({
    mutationFn: async ({ username, password }: SignInData) => {
      const response = await fetcher("/auth/sign-in", "POST", {
        body: JSON.stringify({
          username, // min 3, max 20
          password, // min 6, max 100
        }),
      });
      return response?.data;
    },
  });

  return mutation; // Return the mutation object
};

export default useSignIn;
