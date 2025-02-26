import { ReactNode, useState } from "react";
import { OverlayCtx } from "./overlay";

export const OverlayProvider = ({ children }: { children: ReactNode }) => {
  const [overlayOpen, setOverlayOpen] = useState(false);
  const [Component, setComponent] = useState<ReactNode>(<></>);
  const displayOverlay = (Component: ReactNode) => {
    setComponent(Component);
    setOverlayOpen(true);
  };
  const handleCloseOverlay = () => {
    setComponent(<></>);
    setOverlayOpen(false);
  };

  return (
    <OverlayCtx.Provider
      value={{
        open: overlayOpen,
        setOpen: setOverlayOpen,
        displayOverlay,
        closeOverlay: handleCloseOverlay,
      }}
    >
      <div
        hidden={!overlayOpen}
        className="bg-grey-900 bg-opacity-40 fixed inset-0 z-100000 flex justify-center items-center px-5"
      >
        {Component}
      </div>
      {children}
    </OverlayCtx.Provider>
  );
};
