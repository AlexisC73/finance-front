import {
  BillsIcon,
  BrandIcon,
  BrandIconSmall,
  BudgetIcon,
  HomeIcon,
  MinimizeIcon,
  PotIcon,
  TransactionIcon,
} from "@/assets/icons/icons";
import SidebarItem from "./sidebar-item/sidebar-item";

export default function Sidebar({
  sidebarOpen,
  toggleOpen,
  currentPathname,
}: {
  sidebarOpen: boolean;
  toggleOpen: () => void;
  currentPathname: string;
}) {
  return (
    <div
      className={`z-5000 flex flex-col gap-y-6 px-4 pt-2 bg-grey-900 rounded-t-2 fixed bottom-0 left-0 right-0 xl:static xl:rounded-l-none xl:rounded-r-2 xl:min-h-screen xl:pb-6 xl:transition-all xl:duration-300 ${sidebarOpen ? "xl:w-75 xl:pl-0 xl:pr-6" : "xl:w-20 xl:pl-0 xl:pr-2"}`}
    >
      <div className="hidden xl:block pl-8 py-10">
        {sidebarOpen ? (
          <BrandIcon className="text-5.5" />
        ) : (
          <BrandIconSmall className="text-5.5" />
        )}
      </div>
      <div className="flex w-full xl:flex-col xl:gap-y-1 flex-1">
        <SidebarItem
          name="Home"
          href="/"
          active={currentPathname === "/"}
          Icon={HomeIcon}
          sidebarOpen={sidebarOpen}
        />
        <SidebarItem
          name="Transaction"
          active={currentPathname === "/transactions"}
          Icon={TransactionIcon}
          sidebarOpen={sidebarOpen}
        />
        <SidebarItem
          name="Budget"
          href="/budgets"
          active={currentPathname === "/budgets"}
          Icon={BudgetIcon}
          sidebarOpen={sidebarOpen}
        />
        <SidebarItem
          name="Pots"
          active={currentPathname === "/pots"}
          Icon={PotIcon}
          sidebarOpen={sidebarOpen}
        />
        <SidebarItem
          name="Recurring bills"
          active={currentPathname === "/recurring-bills"}
          Icon={BillsIcon}
          sidebarOpen={sidebarOpen}
        />
      </div>
      <div className="pl-8 text-grey-300 hidden xl:block">
        <button
          onClick={toggleOpen}
          className={`flex items-center gap-x-4 transition-all duration-300 hover:text-white ${sidebarOpen ? "rotate-0" : "rotate-180"}`}
        >
          <MinimizeIcon className={`text-6 xl:min-h-6 xl:min-w-6`} />
          <span
            className={`flex-1 truncate line-height-150% font-bold text-4 h-6 ${sidebarOpen ? "xl:block" : "xl:hidden"}`}
          >
            Minimize Menu
          </span>
        </button>
      </div>
    </div>
  );
}
