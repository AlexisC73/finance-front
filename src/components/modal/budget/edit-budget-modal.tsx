import { ModalCloseIcon } from "@/assets/icons/icons";
import Button from "@/components/button/button";
import ColorTag from "@/components/color-tag/color-tag";
import Dropdown from "@/components/dropdown/dropdown";
import DropdownButton from "@/components/dropdown/dropdown-button";
import DropdownMenu, {
  DropdownMenuItem,
  DropdownSeparator,
} from "@/components/dropdown/dropdown-menu/dropdown-menu";
import DropdownTagOption from "@/components/dropdown/dropdown-tag-option";
import SelectButton from "@/components/select/select-button";
import { OverlayCtx } from "@/context/overlay/overlay";
import { COLORS_TAG } from "@/helpers/data";
import { COLORS } from "@/theme/colors";
import React, { useContext, useState } from "react";

export default function EditBudgetModal() {
  const { setOpen } = useContext(OverlayCtx);

  const [categoryDropdownOpen, setCategoryDropdownOpen] = useState(false);
  const [colorTagDropdownOpen, setColorTagDropdownOpen] = useState(false);

  const closeOverlay = () => setOpen(false);

  return (
    <div className="bg-white py-6 px-5 rounded-3 flex flex-col gap-y-5 md:p-8 md:max-w-560px">
      <div className="flex justify-between items-center">
        <p className="text-preset-2 md:text-preset-1">Edit Budget</p>
        <button onClick={closeOverlay} className="text-8 text-grey-500">
          <ModalCloseIcon />
        </button>
      </div>
      <p className="text-preset-4 text-grey-500">
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus
        hendrerit. Pellentesque aliquet nibh nec urna. In nisi neque, aliquet.
      </p>
      <div className="flex flex-col gap-y-4">
        <div id="budget-category">
          <label
            className="text-preset-5-bold text-grey-500"
            htmlFor="budget-category"
          >
            Budget Category
          </label>
          <Dropdown closeDropdown={() => setCategoryDropdownOpen(false)}>
            <DropdownButton
              fullWidth
              action={() => setCategoryDropdownOpen((prev) => !prev)}
            >
              <SelectButton>Ouvrir</SelectButton>
            </DropdownButton>
            <DropdownMenu
              customClassName="left-0"
              isOpen={categoryDropdownOpen}
            >
              <DropdownMenuItem>
                <button>Hello</button>
              </DropdownMenuItem>
            </DropdownMenu>
          </Dropdown>
        </div>
        <div id="max-spend">
          <label
            className="text-preset-5-bold text-grey-500"
            htmlFor="budget-amount"
          >
            Maximum Spending
          </label>
          <div className="flex gap-x-3 py-3 px-5 bg-white border border-beige-500 rounded-2 items-center">
            <label
              htmlFor="budget-amount"
              className="text-preset-4 text-beige-500"
            >
              $
            </label>
            <input
              id="budget-amount"
              type="text"
              className="flex-1 outline-none text-preset-4"
            />
          </div>
        </div>
        <div id="budget-tag">
          <label
            className="text-preset-5-bold text-grey-500"
            htmlFor="budget-category"
          >
            Color Tag
          </label>
          <Dropdown closeDropdown={() => setColorTagDropdownOpen(false)}>
            <DropdownButton
              fullWidth
              action={() => setColorTagDropdownOpen((prev) => !prev)}
            >
              <SelectButton>
                <ColorTag color={COLORS.GREEN} />
              </SelectButton>
            </DropdownButton>
            <DropdownMenu
              customClassName="left-0"
              isOpen={colorTagDropdownOpen}
            >
              {COLORS_TAG.map((tag, index) => (
                <React.Fragment key={tag.color}>
                  <DropdownMenuItem>
                    <DropdownTagOption
                      color={tag.color}
                      alreadyUse={tag.active}
                    />
                  </DropdownMenuItem>
                  {index < COLORS_TAG.length - 1 && <DropdownSeparator />}
                </React.Fragment>
              ))}
            </DropdownMenu>
          </Dropdown>
        </div>
      </div>
      <Button action={() => console.log("should save changes")}>
        Save Changes
      </Button>
    </div>
  );
}
