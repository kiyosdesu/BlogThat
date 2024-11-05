import { Box, HStack } from "@chakra-ui/react";
import BlogCard from "./BlogCard";

const BlogContainer = () => {
  return (
    <Box marginY="8vh">
      <HStack flexWrap="wrap" justify="center">
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
      </HStack>
    </Box>
  );
};

export default BlogContainer;
