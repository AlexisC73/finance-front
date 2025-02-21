import { DotsMenuIcon } from "@/assets/icons/icons";
import Button from "@/components/button/button";
import Dropdown from "@/components/dropdown/dropdown";
import DropdownButton from "@/components/dropdown/dropdown-button";
import DropdownMenu, {
  DropdownMenuItem,
} from "@/components/dropdown/dropdown-menu/dropdown-menu";
import { colorClass, COLORS } from "@/theme/colors";
import { useState } from "react";

interface PotCardProps {
  name: string;
  saved: string;
  target: string;
  percentage: string;
  color: COLORS;
}

export default function PotCard({
  name,
  color,
  percentage,
  saved,
  target,
}: PotCardProps) {
  const backgroundColor = colorClass(color, "bg");
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <div
      id="pot-1"
      className="flex flex-col w-full py-6 px-5 md:p-6 bg-white rounded-3 gap-y-8"
    >
      <div id="pot-header" className="flex items-center gap-x-4">
        <div
          id="pot-circle"
          className={`w-4 h-4 rounded-full ${backgroundColor}`}
        ></div>
        <p className="flex-1 text-preset-2">{name}</p>
        <Dropdown closeDropdown={() => setDropdownOpen(false)}>
          <DropdownButton action={() => setDropdownOpen((prev) => !prev)}>
            <DotsMenuIcon className="text-grey-300" />
          </DropdownButton>
          <DropdownMenu isOpen={dropdownOpen}>
            <DropdownMenuItem>
              <button>Edit Budget</button>
            </DropdownMenuItem>
            <li className="h-px w-full bg-grey-100" />
            <DropdownMenuItem isRed>
              <button>Delete Budget</button>
            </DropdownMenuItem>
          </DropdownMenu>
        </Dropdown>
      </div>
      <div id="pot-info" className="flex flex-col gap-y-4">
        <div className="flex justify-between items-center">
          <p className="text-preset-4 text-grey-500">Total Saved</p>
          <p className="text-preset-1">${Number(saved).toFixed(2)}</p>
        </div>
        <div className="flex flex-col gap-y-3.25">
          <div id="slider" className="w-full h-2 bg-beige-100 rounded-1">
            <div
              className={"h-2 rounded-1 " + backgroundColor}
              style={{ width: percentage + "%" }}
            ></div>
          </div>
          <div className="flex justify-between items-center">
            <p className="text-preset-5-bold text-grey-500">{percentage}%</p>
            <p className="text-preset-5 text-grey-500">
              Target of ${Number(target).toLocaleString("en-EN")}
            </p>
          </div>
        </div>
      </div>
      <div id="pot-actions" className="flex gap-x-4">
        <Button type="secondary" fullWidth>
          + Add Money
        </Button>
        <Button type="secondary" fullWidth>
          Withdraw
        </Button>
      </div>
    </div>
  );
}
