import { VStack, Image, Text, HStack } from "@chakra-ui/react";
import { FaRegThumbsUp, FaRegCommentAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Blog } from "./hooks/useBlog";

// interface Props {
//   id: string;
//   image: string;
//   userAvatar: string;
//   userName: string;
//   title: string;
//   description: string;
//   createdAt: Date;
//   likeCount: number;
//   commentCount: number;
// }

import image from "../image/blogitcard/apocalypse.webp";

const BlogCard = ({ data }: { data: Blog }) => {
  const imahe =
    "https://scontent.xx.fbcdn.net/v/t1.15752-9/368132555_7343132522420384_4449525094969996147_n.jpg?stp=dst-jpg_p480x480&_nc_cat=109&ccb=1-7&_nc_sid=0024fc&_nc_ohc=m0jSS1dhEOkQ7kNvgGR7i_t&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent.xx&_nc_gid=APqUA2tUVfMABSV0Zu0RSjl&oh=03_Q7cD1QGjpD1Cx66fpDYzueVPiCs9-OovaFAxruzyaHx9QB-e_g&oe=674FF4B1";

  // const Wrapper = ({ children }: { children: React.ReactNode }) => {
  //   return <Link to={"/blogs/" + userName}>{children}</Link>;
  // };

  // const formatDate = createdAt.getDate().toString;
  // const formattedDate = createdAt.toString();
  return (
    <>
      <Link to={"/blogs/" + data.id}>
        <VStack maxWidth="sm" overflow="hidden" padding="5" paddingY="10">
          <Image
            src={image}
            width="98vw"
            height="200px"
            fit="cover"
            overflow="hidden"
          />

          <HStack alignSelf="start" marginY="2">
            <Image
              src={data.thumbnail ?? imahe}
              boxSize="30px"
              fit="cover"
              borderRadius="full"
            />
            <Text>{data.authorUsername}</Text>
          </HStack>
          <VStack alignSelf="start">
            <Text
              fontSize="2xl"
              fontWeight="bolder"
              paddingY="2"
              alignSelf="start"
            >
              {data.title}
            </Text>
            <Text fontWeight="extralight">{data.description}</Text>
          </VStack>
          <HStack alignSelf="start">
            <Text fontSize="13px" fontWeight="normal">
              {data.createdAt.toString()}
            </Text>
            <FaRegThumbsUp />
            <Text fontSize="12px">{data.likeCount}</Text>
            <FaRegCommentAlt size="16px" />
            <Text>{69}</Text>
          </HStack>
        </VStack>
      </Link>
    </>
  );
};

export default BlogCard;
