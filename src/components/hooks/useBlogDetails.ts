import fetcher from "@/util/fetcher";
import { useQuery } from "@tanstack/react-query";

type GetBlogResponseType = Blog;

type Blog = {
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
};

const useBlogDetails = (userId: string | undefined) => {
  const { isLoading, data, error } = useQuery({
    queryKey: [userId, "blog"],
    queryFn: async () => {
      const response = await fetcher<GetBlogResponseType>(`/blog/${userId}`);
      return response?.data;
    },
  });
  return { isLoading, data, error };
};

export default useBlogDetails;
