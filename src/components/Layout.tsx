import { Box } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <Box>
      <Box>Navbar</Box>
      <Box>
        <Outlet />
      </Box>
    </Box>
  );
};

export default Layout;
