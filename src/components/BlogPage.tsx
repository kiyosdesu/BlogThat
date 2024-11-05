import { VStack, Text } from "@chakra-ui/react";
import BlogContainer from "./BlogContainer";
import useBlog from "./hooks/useBlog";

const BlogPage = () => {
  const { data } = useBlog();
  return (
    <VStack height="100vh" width="100vw">
      <BlogContainer />
      {data?.blog?.map((blog) => (
        <Text color="white">{blog.body}</Text>
      ))}
    </VStack>
  );
};

export default BlogPage;
