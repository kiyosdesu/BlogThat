import { createBrowserRouter } from "react-router-dom";
import SignInPage from "./components/SignInPage";
import SignUpPage from "./components/SignUpPage";
import Layout from "./components/Layout";
import HomePage from "./components/HomePage";
import BlogPage from "./components/BlogPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "sign-in", element: <SignInPage /> },
      { path: "sign-up", element: <SignUpPage /> },
      { path: "blogs", element: <BlogPage /> },
    ],
  },
]);

export default router;
