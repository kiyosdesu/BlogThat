import { VStack, Image } from "@chakra-ui/react";
import image from "../image/blogitcard/apocalypse.webp";

const BlogCard = () => {
  return (
    <VStack
      minWidth="30vh"
      minHeight="30vh"
      bg="red"
      alignItems="center"
      justifyContent="center"
    >
      <Image src={image} width="20vw" height="10vh" />
    </VStack>
  );
};

export default BlogCard;
