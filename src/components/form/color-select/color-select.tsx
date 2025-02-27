import ColorTag from "@/components/color-tag/color-tag";
import Dropdown from "@/components/dropdown/dropdown";
import DropdownButton from "@/components/dropdown/dropdown-button";
import DropdownMenu, {
  DropdownSeparator,
} from "@/components/dropdown/dropdown-menu/dropdown-menu";
import DropdownMenuItem from "@/components/dropdown/dropdown-menu/dropdown-menu-item";
import DropdownTagOption from "@/components/dropdown/dropdown-tag-option";
import SelectButton from "@/components/select/select-button";
import { COLORS_TAG } from "@/helpers/data";
import useDropdown from "@/hooks/use-dropdown";
import { COLORS } from "@/theme/colors";
import React, { useState } from "react";

export default function ColorSelect({
  originalColor,
  label,
  inputName,
}: {
  originalColor: COLORS;
  label: string;
  inputName: string;
}) {
  const [tagColor, setTagColor] = useState(originalColor);

  const { closeDropdown, toggleDropdown, dropdownOpen } = useDropdown();
  const updateTagColor = (color: COLORS) => {
    setTagColor(color);
    closeDropdown();
  };

  return (
    <div id="budget-tag">
      <label
        className="text-preset-5-bold text-grey-500"
        htmlFor="budget-category"
      >
        {label}
      </label>
      <input readOnly name={inputName} type="text" hidden value={tagColor} />
      <Dropdown closeDropdown={closeDropdown}>
        <DropdownButton fullWidth action={toggleDropdown}>
          <SelectButton>
            <ColorTag color={tagColor} />
          </SelectButton>
        </DropdownButton>
        <DropdownMenu customClassName="left-0" isOpen={dropdownOpen}>
          {COLORS_TAG.map((tag, index) => (
            <React.Fragment key={tag.color}>
              <DropdownMenuItem
                disabled={tag.color === originalColor ? false : !tag.available}
                action={() => updateTagColor(tag.color)}
              >
                <DropdownTagOption
                  color={tag.color}
                  disabled={
                    tag.color === originalColor ? false : !tag.available
                  }
                />
              </DropdownMenuItem>
              {index < COLORS_TAG.length - 1 && <DropdownSeparator />}
            </React.Fragment>
          ))}
        </DropdownMenu>
      </Dropdown>
    </div>
  );
}
