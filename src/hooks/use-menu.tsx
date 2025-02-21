import React from "react";

export default function useMenu() {
  const [isOpen, setIsOpen] = React.useState(false);
  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };
  return { isOpen, toggleMenu, closeMenu, setIsOpen };
}
