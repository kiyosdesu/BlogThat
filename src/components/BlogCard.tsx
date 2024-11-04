import { VStack, Image, Text, HStack } from "@chakra-ui/react";
import image from "../image/blogitcard/apocalypse.webp";
// import { FaRegThumbsUp, FaRegCommentAlt } from "react-icons/fa";

const BlogCard = () => {
  const imahe =
    "https://scontent.xx.fbcdn.net/v/t1.15752-9/368132555_7343132522420384_4449525094969996147_n.jpg?stp=dst-jpg_p480x480&_nc_cat=109&ccb=1-7&_nc_sid=0024fc&_nc_ohc=m0jSS1dhEOkQ7kNvgGR7i_t&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent.xx&_nc_gid=APqUA2tUVfMABSV0Zu0RSjl&oh=03_Q7cD1QGjpD1Cx66fpDYzueVPiCs9-OovaFAxruzyaHx9QB-e_g&oe=674FF4B1";
  return (
    <VStack>
      {/* <Card.Root width="sm" overflow="hidden" height="md">
        <Image
          src={image}
          alt="Green double couch with wooden legs"
          width="100vw"
          height="200px"
          objectFit="cover"
        />
        <Card.Body gap="2">
          <Text>user name</Text>
          <Card.Title fontWeight="bolder" fontSize="2xl">
            BlogIt app dying
          </Card.Title>
          <Card.Description>the reason this app is dying</Card.Description>
        </Card.Body>
        <Card.Footer gap="2">
          <Button variant="ghost">
            <FaRegThumbsUp />
          </Button>
          <Button variant="ghost">
            <FaRegCommentAlt />
          </Button>
        </Card.Footer>
      </Card.Root> */}

      <VStack width="sm" overflow="hidden">
        <Image src={image} width="100%" height="200px" fit="cover" />

        <HStack alignSelf="start" marginY="2">
          <Image src={imahe} boxSize="30px" fit="cover" borderRadius="full" />
          <Text>Kakashi Uchiha</Text>
        </HStack>
        <VStack alignSelf="start">
          <Text fontSize="2xl" fontWeight="bolder" paddingY="2">
            The downfall of Bloggit
          </Text>
          <Text fontWeight="extralight">
            The true reason why Bloggit fell off
          </Text>
        </VStack>
      </VStack>
    </VStack>
  );
};

export default BlogCard;
