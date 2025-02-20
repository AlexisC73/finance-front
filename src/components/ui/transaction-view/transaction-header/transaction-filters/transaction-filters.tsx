import { FilterIcon } from "@/assets/icons/icons";
import DropdownButton from "@/components/dropdown/dropdown-button/dropdown-button";
import DropdownMenu from "@/components/dropdown/dropdown-menu/dropdown-menu";
import SortDropdown from "@/components/ui/sort-dropdown/sort-dropdown";
import { SORT_OPTIONS } from "@/helpers/data";
import useOutsideClick from "@/hooks/use-outside-click";
import { useState } from "react";

const transactionCategories = [
  "All Transactions",
  "Entertainment",
  "Bills",
  "Groceries",
  "Dining Out",
  "Transportation",
  "Personal Care",
];

export default function TransactionFilters() {
  const [showCategoryMenu, setShowCategoryMenu] = useState(false);
  const [currentSort, setCurrentSort] = useState(SORT_OPTIONS[0]);
  const categoryRef = useOutsideClick({
    callback: () => setShowCategoryMenu(false),
  });
  const [currentCaterogy, setCurrentCategory] = useState(
    transactionCategories[0],
  );

  const handleToggleCategoryMenu = () => {
    setShowCategoryMenu((prev) => !prev);
  };

  const updateCategory = (option: string) => {
    setCurrentCategory(option);
    setShowCategoryMenu(false);
  };

  return (
    <div className="flex gap-x-6 text-5">
      <SortDropdown
        currentSort={currentSort}
        sortOptions={SORT_OPTIONS}
        updateSort={(sort) => setCurrentSort(sort)}
      />
      <div id="category-menu" className="flex gap-x-2 items-center">
        <p className="text-preset-4 hidden md:block text-grey-500">Category</p>
        <div className="relative w-full md:w-44.25" ref={categoryRef}>
          <div className="hidden md:flex">
            <DropdownButton action={handleToggleCategoryMenu}>
              {currentCaterogy}
            </DropdownButton>
          </div>
          <button className="md:hidden">
            <FilterIcon onClick={handleToggleCategoryMenu} />
          </button>
          <div
            hidden={!showCategoryMenu}
            className="absolute md:left-0 right-0 mt-2"
          >
            <DropdownMenu
              currentOption={currentCaterogy}
              options={transactionCategories}
              updateOption={updateCategory}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
