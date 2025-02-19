import { ArrowIcon } from "@/assets/icons/icons";
import React, { useState } from "react";
import DropdownItem from "./dropdown-item";

export default function DropdownMenu({
  options,
  currentOption,
  label,
  updateOption,
}: {
  options: string[];
  currentOption: string;
  label: string;
  updateOption: (option: string) => void;
}) {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen((prev) => !prev);

  const updateCurrentFilter = (filter: string) => {
    if (options.includes(filter)) {
      updateOption(filter);
      toggleMenu();
    }
  };

  return (
    <div className="flex items-center flex-1 gap-x-2">
      <p className="text-preset-4 text-grey-500">{label}</p>
      <div className="flex-1 relative">
        <button
          onClick={toggleMenu}
          className="text-preset-4 text-grey-900 flex gap-x-4 items-center w-full justify-between px-5 py-3 border border-beige-500 rounded-2"
        >
          {currentOption} <ArrowIcon className="rotate-90" />
        </button>
        {menuOpen && (
          <ul className="px-5 py-3 absolute flex flex-col left-0 right-0 mt-3 bg-white shadow rounded-2 text-preset-4 text-grey-900 gap-y-3">
            {options.map((option, index) => (
              <React.Fragment>
                <DropdownItem
                  updateFilter={() => updateCurrentFilter(option)}
                  active={option === currentOption}
                >
                  {option}
                </DropdownItem>
                {index !== options.length - 1 && (
                  <div id="separator" className="h-px bg-grey-100 w-full"></div>
                )}
              </React.Fragment>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
