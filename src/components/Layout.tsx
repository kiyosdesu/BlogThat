import { Box } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

const Layout = () => {
  return (
    <Box>
      <Box>
        <Navbar />
      </Box>
      <Box display="flex" justifyContent="center">
        <Outlet />
      </Box>
    </Box>
  );
};

export default Layout;
