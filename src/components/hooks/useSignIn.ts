import fetcher from "@/util/fetcher";
import { useMutation } from "@tanstack/react-query";

interface SignUpData {
  username: string;
  password: string;
}

const useSignIn = async ({ username, password }: SignUpData) => {
  const { error, isPending } = useMutation({
    mutationFn: async () => {
      const response = await fetcher("/auth/sign-in", "POST", {
        body: JSON.stringify({
          username: username, // min 3, max 20
          password: password, // min 6, max 100
        }),
      });
      return response?.data;
    },
  });
  // const respone = fetcher("/auth/sign-in", "POST", {
  //   body: JSON.stringify({
  //     username,
  //     password,
  //   }),
  // });
  return { error, isPending };
};

export default useSignIn;
