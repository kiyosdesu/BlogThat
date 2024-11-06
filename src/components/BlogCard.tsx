import { VStack, Image, Text, HStack } from "@chakra-ui/react";
import { FaRegThumbsUp, FaRegCommentAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

interface Props {
  image: string;
  userAvatar: string;
  userName: string;
  title: string;
  description: string;
  createdAt: Date;
  likeCount: number;
  commentCount: number;
}

const BlogCard = ({
  image,
  userAvatar,
  userName,
  title,
  description,
  createdAt,
  likeCount,
  commentCount,
}: Props) => {
  const Wrapper = ({ children }: { children: React.ReactNode }) => {
    return <Link to={"/blog/" + userName}>{children}</Link>;
  };

  // const formattedDate = `${createdAt.getMonth() + 1}/${createdAt.getDate()}`;
  const formattedDate = createdAt.toString();
  return (
    <>
      <Wrapper>
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
              src={userAvatar}
              boxSize="30px"
              fit="cover"
              borderRadius="full"
            />
            <Text>{userName}</Text>
          </HStack>
          <VStack alignSelf="start">
            <Text
              fontSize="2xl"
              fontWeight="bolder"
              paddingY="2"
              alignSelf="start"
            >
              {title}
            </Text>
            <Text fontWeight="extralight">{description}</Text>
          </VStack>
          <HStack alignSelf="start">
            <Text fontSize="13px" fontWeight="normal">
              {formattedDate}
            </Text>
            <FaRegThumbsUp />
            <Text fontSize="12px">{likeCount}</Text>
            <FaRegCommentAlt size="16px" />
            <Text>{commentCount}</Text>
          </HStack>
        </VStack>
      </Wrapper>
    </>
  );
};

export default BlogCard;
