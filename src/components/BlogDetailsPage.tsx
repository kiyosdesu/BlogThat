import { VStack, Text, HStack, Image } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import useBlogDetails from "./hooks/useBlogDetails";

const BlogDetailsPage = () => {
  const imahe =
    "https://scontent.xx.fbcdn.net/v/t1.15752-9/368132555_7343132522420384_4449525094969996147_n.jpg?stp=dst-jpg_p480x480&_nc_cat=109&ccb=1-7&_nc_sid=0024fc&_nc_ohc=m0jSS1dhEOkQ7kNvgGR7i_t&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent.xx&_nc_gid=APqUA2tUVfMABSV0Zu0RSjl&oh=03_Q7cD1QGjpD1Cx66fpDYzueVPiCs9-OovaFAxruzyaHx9QB-e_g&oe=674FF4B1";

  let { id } = useParams();
  const { data } = useBlogDetails(id);

  return (
    <VStack>
      <Text fontSize="5xl" fontWeight="extrabold">
        {data?.title}
      </Text>
      <Text fontWeight="light">{data?.description}</Text>
      <HStack>
        <Image src={imahe} boxSize="30px" fit="cover" borderRadius="full" />
        <VStack>
          <Text>{data?.authorUsername}</Text>
          {}
        </VStack>
      </HStack>
    </VStack>
  );
};

export default BlogDetailsPage;
