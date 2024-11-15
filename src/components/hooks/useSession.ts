import fetcher from "@/util/fetcher";
import { useQuery } from "@tanstack/react-query";

const useSession = () => {
  const { isLoading, isError, isSuccess } = useQuery({
    queryKey: ["session"],
    queryFn: async () => {
      const response = await fetcher("/auth/status");
      return response?.data;
    },
    retry: false,
  });
  return { isLoading, isError, isSuccess };
};

export default useSession;

export type UseSession = ReturnType<typeof useSession>;
