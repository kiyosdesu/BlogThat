import fetcher from "@/util/fetcher";
import { useQuery } from "@tanstack/react-query";
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

type GetBlogResponseType = {
  blog: Blog[];
  cursor: string | null; // Pass this to pagination (or next page)
};

const useBlog = () => {
  const { isLoading, data, error } = useQuery({
    queryKey: ["blog"],
    queryFn: async () => await fetcher<GetBlogResponseType[]>("/blog"),
  });
};

export default useBlog;
