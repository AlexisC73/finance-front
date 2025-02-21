import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import "virtual:uno.css";
import "@unocss/reset/tailwind.css";
import { RouterProvider } from "react-router-dom";
import { createRouter } from "./router.tsx";
import { SidebarProvider } from "./context/sidebar/sidebar-proviter.tsx";
import { OverlayProvider } from "./context/overlay/overlay-provider.tsx";

const router = createRouter();

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <OverlayProvider>
      <SidebarProvider>
        <RouterProvider router={router} />
      </SidebarProvider>
    </OverlayProvider>
  </StrictMode>,
);
