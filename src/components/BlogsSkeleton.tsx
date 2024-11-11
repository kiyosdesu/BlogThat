import { HStack, VStack } from "@chakra-ui/react";
import { Skeleton, SkeletonCircle, SkeletonText } from "./ui/skeleton";

const BlogsSkeleton = () => {
  return (
    <VStack>
      <Skeleton height="17vh" width="25vw" />
      <HStack alignSelf="start">
        <SkeletonCircle size="3vh" />
        <SkeletonText width="12vw" noOfLines={1} />
      </HStack>
      <VStack alignSelf="start" gap="5">
        <SkeletonText width="20vh" height="3vh" noOfLines={1} />
        <SkeletonText width="20vh" noOfLines={2} />
      </VStack>
    </VStack>
  );
};

export default BlogsSkeleton;
