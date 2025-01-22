import {
  BillsIcon,
  BrandIcon,
  BudgetIcon,
  HomeIcon,
  MinimizeIcon,
  PotIcon,
  TransactionIcon,
} from "@/assets/icons/icons";
import SidebarItem from "./sidebar-item/sidebar-item";
import { useState } from "react";

export default function Sidebar() {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const handleToggleSidebar = () => {
    setSidebarOpen((prev) => !prev);
  };

  return (
    <div
      className={`flex flex-col gap-y-6 px-4 pt-2 bg-grey-900 rounded-t-2 fixed bottom-0 left-0 right-0 xl:static xl:rounded-l-none xl:rounded-r-2 xl:min-h-screen xl:pb-6 xl:transition-all xl:duration-300 ${sidebarOpen ? "xl:w-75 xl:pl-0 xl:pr-6" : "xl:w-20 xl:pl-0 xl:pr-2"}`}
    >
      <div className="hidden xl:block pl-8 py-10">
        <BrandIcon className="text-5.5" />
      </div>
      <div className="flex w-full xl:flex-col xl:gap-y-1 flex-1">
        <SidebarItem
          name="Home"
          active={true}
          Icon={HomeIcon}
          sidebarOpen={sidebarOpen}
        />
        <SidebarItem
          name="Transaction"
          active={false}
          Icon={TransactionIcon}
          sidebarOpen={sidebarOpen}
        />
        <SidebarItem
          name="Budget"
          active={false}
          Icon={BudgetIcon}
          sidebarOpen={sidebarOpen}
        />
        <SidebarItem
          name="Pot"
          active={false}
          Icon={PotIcon}
          sidebarOpen={sidebarOpen}
        />
        <SidebarItem
          name="Recuring bills"
          active={false}
          Icon={BillsIcon}
          sidebarOpen={sidebarOpen}
        />
      </div>
      <div className="pl-8 text-grey-300 hidden xl:block">
        <button
          onClick={handleToggleSidebar}
          className="flex items-center gap-x-4"
        >
          <MinimizeIcon className="text-6" />
          <span className="line-height-150% font-bold text-4">
            Minimize Menu
          </span>
        </button>
      </div>
    </div>
  );
}
