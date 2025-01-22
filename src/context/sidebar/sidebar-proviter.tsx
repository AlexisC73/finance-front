import { ReactNode, useState } from "react";
import { SidebarCtx } from "./sidebar";

export const SidebarProvider = ({ children }: { children: ReactNode }) => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  return (
    <SidebarCtx.Provider value={{ open: sidebarOpen, setOpen: setSidebarOpen }}>
      {children}
    </SidebarCtx.Provider>
  );
};
