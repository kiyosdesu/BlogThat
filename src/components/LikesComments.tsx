import { HStack } from "@chakra-ui/react";
import { FaRegThumbsUp, FaRegCommentAlt } from "react-icons/fa";
interface Props {
  likesCount: number | undefined;
  commentCount: number;
}
const LikesComments = ({ likesCount, commentCount }: Props) => {
  return (
    <HStack borderY="2px ridge " width="100%" paddingY="4" gap="5">
      <HStack>
        <FaRegThumbsUp />
        {likesCount}
      </HStack>
      <HStack>
        <FaRegCommentAlt />
        {commentCount}
      </HStack>
    </HStack>
  );
};

export default LikesComments;
