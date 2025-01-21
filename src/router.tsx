import { createBrowserRouter } from "react-router-dom";
import { HomePage } from "./pages/Home";
import SigninPage from "./pages/auth/signin/signin-page";

export const createRouter = () =>
  createBrowserRouter([
    {
      path: "/auth",
      children: [
        {
          path: "/auth/signin",
          Component: () => <SigninPage />,
        },
      ],
    },
    {
      path: "/",
      Component: () => <HomePage />,
    },
  ]);
