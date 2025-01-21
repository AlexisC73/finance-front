import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import "virtual:uno.css";
import "@unocss/reset/tailwind.css";
import { RouterProvider } from "react-router-dom";
import { createRouter } from "./router.tsx";

const router = createRouter();

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
