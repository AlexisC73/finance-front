import { createBrowserRouter } from "react-router-dom";
import { HomePage } from "./pages/Home";
import SigninPage from "./pages/auth/signin/signin-page";
import AuthLayout from "./layout/auth/auth-layout";
import SignupPage from "./pages/auth/signup/signup-page";
import SidebarLayout from "./layout/sidebar-layout";

export const createRouter = () =>
  createBrowserRouter([
    {
      path: "/auth",
      element: <AuthLayout />,
      children: [
        {
          path: "/auth/signin",
          Component: () => <SigninPage />,
        },
        {
          path: "/auth/signup",
          Component: () => <SignupPage />,
        },
      ],
    },
    {
      path: "/",
      Component: () => <SidebarLayout />,
      children: [{ path: "/", Component: () => <HomePage /> }],
    },
  ]);
