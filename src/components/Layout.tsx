import { Box, Text } from "@chakra-ui/react";
import { Outlet, useLocation } from "react-router-dom";
import Navbar from "./Navbar";
import { useSessionContext } from "@/context/SessionContext";

const Layout = () => {
  const session = useSessionContext() || {};
  const location = useLocation();

  if (!session) return <Text>loading</Text>;

  // if (session) return <Text>loading</Text>;

  return (
    <Box>
      <Box hideFrom="md">
        {location.pathname !== "/sign-in" &&
          location.pathname !== "/sign-up" && <Navbar />}
      </Box>
      <Box hideBelow="md">
        <Navbar />
      </Box>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        height="100vh"
      >
        <Outlet />
      </Box>
    </Box>
  );
};

export default Layout;
