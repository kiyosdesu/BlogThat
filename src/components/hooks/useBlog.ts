import fetcher from "@/util/fetcher";
import { useQuery } from "@tanstack/react-query";

interface Blog {
  id: string;
  authorId: string;
  authorUsername: string;
  title: string;
  description: string;
  body: string;
  category: string;
  thumbnail: string | null;
  createdAt: Date;
  updatedAt: Date;
  likeCount: number;
}

interface GetBlogResponseType {
  blog: Blog[];
  cursor: string | null;
}

const useBlog = () => {
  const { isLoading, data, error } = useQuery({
    queryKey: ["blog"],
    queryFn: async () => {
      const response = await fetcher<GetBlogResponseType>("/blog");
      return response?.data;
    },
  });
  return { isLoading, data, error };
};

export default useBlog;
