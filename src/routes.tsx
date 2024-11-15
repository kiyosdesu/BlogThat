import { createBrowserRouter } from "react-router-dom";
import SignInPage from "./components/SignInPage";
import SignUpPage from "./components/SignUpPage";
import Layout from "./components/Layout";
import HomePage from "./components/HomePage";
import BlogPage from "./components/BlogPage";
import BlogDetailsPage from "./components/BlogDetailsPage";
import BlogDetailsSkeleton from "./components/BlogDetailsSkeleton";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "blogs", element: <BlogPage /> },
      { path: "sign-in", element: <SignInPage /> },
      { path: "sign-up", element: <SignUpPage /> },
      { path: "blogs/:id", element: <BlogDetailsPage /> },

      { path: "ga", element: <BlogDetailsSkeleton /> },
    ],
  },
]);

export default router;
