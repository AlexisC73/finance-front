import { useState } from "react";

export default function useDropdown() {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return {
    dropdownOpen,
    setDropdownOpen,
    closeDropdown: () => setDropdownOpen(false),
    toggleDropdown: () => setDropdownOpen((prev) => !prev),
  };
}
