import {
  BillsIcon,
  BrandIcon,
  BudgetIcon,
  HomeIcon,
  PotIcon,
  TransactionIcon,
} from "@/assets/icons/icons";
import SidebarItem from "./sidebar-item/sidebar-item";

export default function Sidebar() {
  return (
    <div className="flex flex-col gap-y-6 px-4 pt-2 bg-grey-900 rounded-t-2 fixed bottom-0 left-0 right-0 xl:static xl:w-75 xl:rounded-l-none xl:rounded-r-2 xl:min-h-screen xl:pl-0 xl:pr-6">
      <div className="hidden xl:block pl-6 py-10">
        <BrandIcon className="text-5.5" />
      </div>
      <div className="flex w-full xl:flex-col">
        <SidebarItem name="Home" active={true} Icon={HomeIcon} />
        <SidebarItem name="Transaction" active={false} Icon={TransactionIcon} />
        <SidebarItem name="Budget" active={false} Icon={BudgetIcon} />
        <SidebarItem name="Pot" active={false} Icon={PotIcon} />
        <SidebarItem name="Recuring bills" active={false} Icon={BillsIcon} />
      </div>
    </div>
  );
}
