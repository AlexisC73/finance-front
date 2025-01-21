import { createBrowserRouter } from "react-router-dom";

export const createRouter = () =>
  createBrowserRouter([
    {
      path: "/",
      Component: () => <div>Init Project</div>,
    },
  ]);
