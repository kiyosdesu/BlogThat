import { createBrowserRouter } from "react-router-dom";
import SignInPage from "./components/SignInPage";
import SignUpPage from "./components/SignUpPage";
import Layout from "./components/Layout";
import HomePage from "./components/HomePage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "signInPage", element: <SignInPage /> },
      { path: "/signUpPage", element: <SignUpPage /> },
    ],
  },
]);

export default router;
