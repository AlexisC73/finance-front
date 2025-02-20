import { SortIcon } from "@/assets/icons/icons";
import DropdownButton from "@/components/dropdown/dropdown-button/dropdown-button";
import DropdownMenu from "@/components/dropdown/dropdown-menu/dropdown-menu";
import useOutsideClick from "@/hooks/use-outside-click";
import { useState } from "react";

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
  const sortRef = useOutsideClick({ callback: () => setShowSortMenu(false) });

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
      <div className="relative w-full md:w-28.25" ref={sortRef}>
        <div className="hidden md:flex">
          <DropdownButton action={handleToggleSortMenu}>
            {currentSort}
          </DropdownButton>
        </div>
        <button className="md:hidden">
          <SortIcon onClick={handleToggleSortMenu} />
        </button>
        <div hidden={!showSortMenu} className="absolute md:left-0 right-0 mt-2">
          <DropdownMenu
            currentOption={currentSort}
            options={sortOptions}
            updateOption={handleUpdateSort}
          />
        </div>
      </div>
    </div>
  );
}
