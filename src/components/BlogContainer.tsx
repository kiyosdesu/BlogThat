import { Box, HStack } from "@chakra-ui/react";
import BlogCard from "./BlogCard";
import useBlog from "./hooks/useBlog";
import image from "../image/blogitcard/apocalypse.webp";

const BlogContainer = () => {
  const { data } = useBlog();

  const imahe =
    "https://scontent.xx.fbcdn.net/v/t1.15752-9/368132555_7343132522420384_4449525094969996147_n.jpg?stp=dst-jpg_p480x480&_nc_cat=109&ccb=1-7&_nc_sid=0024fc&_nc_ohc=m0jSS1dhEOkQ7kNvgGR7i_t&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent.xx&_nc_gid=APqUA2tUVfMABSV0Zu0RSjl&oh=03_Q7cD1QGjpD1Cx66fpDYzueVPiCs9-OovaFAxruzyaHx9QB-e_g&oe=674FF4B1";
  return (
    <Box marginY="8vh">
      <HStack flexWrap="wrap" justify="center">
        {data?.blog.map((blg) => (
          <BlogCard
            image={image}
            key={blg.id}
            userAvatar={imahe}
            userName={blg.authorUsername}
            title={blg.title}
            description={blg.description}
            createdAt={blg.createdAt}
            likeCount={blg.likeCount}
            commentCount={69}
          />
        ))}
        {data?.blog.map((blg) => (
          <BlogCard
            image={image}
            key={blg.id}
            userAvatar={imahe}
            userName={blg.authorUsername}
            title={blg.title}
            description={blg.description}
            createdAt={blg.createdAt}
            likeCount={blg.likeCount}
            commentCount={69}
          />
        ))}
        {data?.blog.map((blg) => (
          <BlogCard
            image={image}
            key={blg.id}
            userAvatar={imahe}
            userName={blg.authorUsername}
            title={blg.title}
            description={blg.description}
            createdAt={blg.createdAt}
            likeCount={blg.likeCount}
            commentCount={69}
          />
        ))}
        {data?.blog.map((blg) => (
          <BlogCard
            image={image}
            key={blg.id}
            userAvatar={imahe}
            userName={blg.authorUsername}
            title={blg.title}
            description={blg.description}
            createdAt={blg.createdAt}
            likeCount={blg.likeCount}
            commentCount={69}
          />
        ))}
        {data?.blog.map((blg) => (
          <BlogCard
            image={image}
            key={blg.id}
            userAvatar={imahe}
            userName={blg.authorUsername}
            title={blg.title}
            description={blg.description}
            createdAt={blg.createdAt}
            likeCount={blg.likeCount}
            commentCount={69}
          />
        ))}
        {data?.blog.map((blg) => (
          <BlogCard
            image={image}
            key={blg.id}
            userAvatar={imahe}
            userName={blg.authorUsername}
            title={blg.title}
            description={blg.description}
            createdAt={blg.createdAt}
            likeCount={blg.likeCount}
            commentCount={69}
          />
        ))}
      </HStack>
    </Box>
  );
};

export default BlogContainer;
