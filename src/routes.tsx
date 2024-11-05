import { createBrowserRouter } from "react-router-dom";
import SignInPage from "./components/SignInPage";
import SignUpPage from "./components/SignUpPage";
import Layout from "./components/Layout";
import HomePage from "./components/HomePage";
import BlogPage from "./components/BlogPage";
import Dawg from "./components/Dawg";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "blogs", element: <BlogPage /> },
      { path: "sign-in", element: <SignInPage /> },
      { path: "sign-up", element: <SignUpPage /> },
    ],
  },
  {
    path: "homePage2",
    element: <Dawg />,
  },
]);

export default router;
