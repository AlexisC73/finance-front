import React, { createContext, ReactNode } from "react";

interface OverlayContext {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  displayOverlay: (Component: ReactNode) => void;
}

export const OverlayCtx = createContext<OverlayContext>({
  open: false,
  setOpen: () => {},
  displayOverlay: () => <React.Fragment />,
});
