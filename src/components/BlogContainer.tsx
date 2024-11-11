import { Box, HStack } from "@chakra-ui/react";
import BlogCard from "./BlogCard";
import useBlog from "./hooks/useBlog";
import BlogsSkeleton from "./BlogsSkeleton";

const BlogContainer = () => {
  const skeleton = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  const { data, isLoading } = useBlog();

  {
    isLoading && skeleton.map((ske) => <BlogsSkeleton key={ske} />);
  }

  return (
    <Box marginY="8vh">
      <HStack flexWrap="wrap" justify="center">
        {data?.blog.map((blg) => (
          <BlogCard data={blg} />
        ))}
      </HStack>
    </Box>
  );
};

export default BlogContainer;
