import Dropdown from "@/components/dropdown/dropdown";
import DropdownButton from "@/components/dropdown/dropdown-button";
import DropdownMenu, {
  DropdownSeparator,
} from "@/components/dropdown/dropdown-menu/dropdown-menu";
import DropdownMenuItem from "@/components/dropdown/dropdown-menu/dropdown-menu-item";
import SelectButton from "@/components/select/select-button";
import { CATEGORIES, CATEGORIES_LIST } from "@/helpers/data";
import useDropdown from "@/hooks/use-dropdown";
import React, { useState } from "react";

export default function CategorySelect({
  name,
  label,
}: {
  name: string;
  label: string;
}) {
  const { closeDropdown, toggleDropdown, dropdownOpen } = useDropdown();
  const [currentCategory, setCurrentCategory] = useState(
    CATEGORIES.ENTERNTAINMENT,
  );

  const updateCurrentCategory = (category: CATEGORIES) => {
    setCurrentCategory(category);
    closeDropdown();
  };
  return (
    <div id="budget-category">
      <label
        className="text-preset-5-bold text-grey-500"
        htmlFor="budget-category"
      >
        {label}
      </label>
      <input readOnly hidden name={name} id={name} value={currentCategory} />
      <Dropdown closeDropdown={closeDropdown}>
        <DropdownButton fullWidth action={toggleDropdown}>
          <SelectButton>{currentCategory}</SelectButton>
        </DropdownButton>
        <DropdownMenu customClassName="left-0" isOpen={dropdownOpen}>
          {CATEGORIES_LIST.map((category, index) => (
            <React.Fragment key={category}>
              <DropdownMenuItem action={() => updateCurrentCategory(category)}>
                {category}
              </DropdownMenuItem>
              {index < CATEGORIES_LIST.length - 1 && <DropdownSeparator />}
            </React.Fragment>
          ))}
        </DropdownMenu>
      </Dropdown>
    </div>
  );
}
