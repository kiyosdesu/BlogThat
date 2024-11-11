import { VStack, Text, HStack, Image, Box } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import useBlogDetails from "./hooks/useBlogDetails";
import image from "../image/blogitcard/apocalypse.webp";
import LikesComments from "./LikesComments";
import BlogDetailsSkeleton from "./BlogDetailsSkeleton";

const BlogDetailsPage = () => {
  const imahe =
    "https://scontent.xx.fbcdn.net/v/t1.15752-9/368132555_7343132522420384_4449525094969996147_n.jpg?stp=dst-jpg_p480x480&_nc_cat=109&ccb=1-7&_nc_sid=0024fc&_nc_ohc=m0jSS1dhEOkQ7kNvgGR7i_t&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent.xx&_nc_gid=APqUA2tUVfMABSV0Zu0RSjl&oh=03_Q7cD1QGjpD1Cx66fpDYzueVPiCs9-OovaFAxruzyaHx9QB-e_g&oe=674FF4B1";

  let { id } = useParams();
  const { data, isLoading } = useBlogDetails(id);

  if (isLoading) return <BlogDetailsSkeleton />;

  return (
    <Box
      display="flex"
      flexDirection="column"
      gap={{ base: "3", md: "7" }}
      overflow="hidden"
      padding={{ base: "7", md: "5" }}
      // marginTop={{ base: "50vh", md: "1vh" }}
      // mt="130vh"
      mt="20vh"
    >
      <Box>
        <Text fontWeight="medium">Category: {data?.category}</Text>
      </Box>
      <Text fontSize={{ base: "3xl", md: "4xl" }} fontWeight="extrabold">
        {data?.title}
      </Text>
      <Text fontWeight="light" fontSize="2xl">
        {data?.description}
      </Text>
      <HStack gap="5">
        <Image
          src={imahe}
          boxSize={{ base: "40px", md: "56px" }}
          fit="cover"
          borderRadius="full"
        />
        <VStack>
          <Text alignSelf="start">{data?.authorUsername}</Text>
          {data?.createdAt.toString()}
        </VStack>
      </HStack>
      <LikesComments likesCount={data?.likeCount} commentCount={69} />
      <Image
        src={image}
        maxHeight="550px"
        maxWidth="550px"
        // padding={{ base: "7px", md: " 0" }}
      />
      {data?.body}
    </Box>
  );
};

export default BlogDetailsPage;
