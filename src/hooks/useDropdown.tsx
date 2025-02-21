import React from "react";

export default function useDropdown() {
  const [isOpen, setIsOpen] = React.useState(false);
  const toggleDropdown = () => {
    setIsOpen((prev) => !prev);
  };

  const closeDropdown = () => {
    setIsOpen(false);
  };
  return { isOpen, toggleDropdown, closeDropdown, setIsOpen };
}
