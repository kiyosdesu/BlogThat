import { Box } from "@chakra-ui/react";
import { Outlet, useLocation } from "react-router-dom";
import Navbar from "./Navbar";

const Layout = () => {
  const location = useLocation();

  return (
    <Box>
      <Box>
        {location.pathname !== "/sign-in" &&
          location.pathname !== "/sign-up" && <Navbar />}
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
