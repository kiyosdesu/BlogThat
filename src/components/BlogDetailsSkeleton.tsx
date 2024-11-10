import { Box, HStack, VStack } from "@chakra-ui/react";
import { Skeleton, SkeletonCircle, SkeletonText } from "./ui/skeleton";

const BlogDetailsSkeleton = () => {
  return (
    <VStack width="50vw" alignItems="start" justify="center" gap="7">
      <Box width="10vw">
        <SkeletonText noOfLines={1} />
      </Box>
      <Box width="30vw">
        <SkeletonText noOfLines={1} height="10" />
      </Box>
      <Box width="35vw">
        <SkeletonText noOfLines={1} height="5" />
      </Box>
      <HStack width="100%" gap="7">
        <SkeletonCircle size="6vh" />
        <VStack width="12vw">
          <SkeletonText noOfLines={2} />
        </VStack>
      </HStack>
      <SkeletonText noOfLines={2} />
      <Skeleton height="40vh" width="50vw" />
      <SkeletonText noOfLines={3} />
    </VStack>
  );
};

export default BlogDetailsSkeleton;
