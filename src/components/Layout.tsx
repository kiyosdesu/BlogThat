import { Box, Show } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

const Layout = () => {
  return (
    <Box>
      <Box hideBelow="sm">
        <Navbar />
      </Box>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        height="90vh"
      >
        <Outlet />
      </Box>
    </Box>
  );
};

export default Layout;
