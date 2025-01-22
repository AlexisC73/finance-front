import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import "virtual:uno.css";
import "@unocss/reset/tailwind.css";
import { RouterProvider } from "react-router-dom";
import { createRouter } from "./router.tsx";
import { SidebarProvider } from "./context/sidebar/sidebar-proviter.tsx";

const router = createRouter();

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <SidebarProvider>
      <RouterProvider router={router} />
    </SidebarProvider>
  </StrictMode>,
);
