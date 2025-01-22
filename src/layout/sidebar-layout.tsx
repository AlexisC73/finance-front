import Sidebar from "@/components/ui/sidebar/sidebar";
import { SidebarCtx } from "@/context/sidebar/sidebar";
import { useContext } from "react";
import { Outlet } from "react-router-dom";

export default function SidebarLayout() {
  const { open, setOpen } = useContext(SidebarCtx);

  const handleToggleSidebar = () => {
    setOpen((prev) => !prev);
  };

  return (
    <div className="flex">
      <div>
        <Sidebar sidebarOpen={open} toggleOpen={handleToggleSidebar} />
      </div>
      <main className="flex-1">
        <Outlet />
      </main>
    </div>
  );
}
