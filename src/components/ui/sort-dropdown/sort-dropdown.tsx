import { SortIcon } from "@/assets/icons/icons";
import Dropdown from "@/components/dropdown/dropdown";
import DropdownButton from "@/components/dropdown/dropdown-button";
import DropdownMenu, {
  DropdownSeparator,
} from "@/components/dropdown/dropdown-menu/dropdown-menu";
import DropdownMenuItem from "@/components/dropdown/dropdown-menu/dropdown-menu-item";
import SelectButton from "@/components/select/select-button";
import React, { useState } from "react";

export default function SortDropdown({
  currentSort,
  sortOptions,
  updateSort,
}: {
  currentSort: string;
  updateSort: (sort: string) => void;
  sortOptions: string[];
}) {
  const [showSortMenu, setShowSortMenu] = useState(false);

  const handleToggleSortMenu = () => {
    setShowSortMenu((prev) => !prev);
  };

  const handleUpdateSort = (sort: string) => {
    updateSort(sort);
    setShowSortMenu(false);
  };

  return (
    <div id="sort-menu" className="flex gap-x-2 items-center">
      <p className="text-preset-4 hidden md:block text-grey-500">Sort by</p>
      <div className="w-full md:w-28.25">
        <Dropdown closeDropdown={() => setShowSortMenu(false)}>
          <DropdownButton action={handleToggleSortMenu}>
            <div className="hidden md:block">
              <SelectButton>{currentSort}</SelectButton>
            </div>
            <div className="md:hidden">
              <SortIcon />
            </div>
          </DropdownButton>
          <DropdownMenu customClassName="md:left-0" isOpen={showSortMenu}>
            {sortOptions.map((option, index) => (
              <React.Fragment key={option}>
                <DropdownMenuItem
                  action={() => handleUpdateSort(option)}
                  isBold={currentSort === option}
                  key={index}
                >
                  {option}
                </DropdownMenuItem>
                {index < sortOptions.length - 1 && <DropdownSeparator />}
              </React.Fragment>
            ))}
          </DropdownMenu>
        </Dropdown>
      </div>
    </div>
  );
}
