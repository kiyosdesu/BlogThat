import { Box, HStack } from "@chakra-ui/react";
import BlogCard from "./BlogCard";
import useBlog from "./hooks/useBlog";
import BlogsSkeleton from "./BlogsSkeleton";

const BlogContainer = () => {
  const { data, isLoading } = useBlog();

  if (isLoading) return <BlogsSkeleton />;

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
