import { createContext } from "react";

interface SidebarContext {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export const SidebarCtx = createContext<SidebarContext>({
  open: false,
  setOpen: () => {},
});
