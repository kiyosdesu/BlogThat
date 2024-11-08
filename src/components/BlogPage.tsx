import { VStack } from "@chakra-ui/react";
import BlogContainer from "./BlogContainer";
// import RecommendedSearch from "./RecommendedSearch";

const BlogPage = () => {
  return (
    <VStack height="100vh" maxWidth="90vw">
      {/* <RecommendedSearch /> */}
      <BlogContainer />
    </VStack>
  );
};

export default BlogPage;
