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
      <aside id="sidebar" className="xl:sticky xl:top-0 xl:h-screen">
        <Sidebar sidebarOpen={open} toggleOpen={handleToggleSidebar} />
      </aside>
      <main className="flex-1 px-4 md:px-10">
        <Outlet />
      </main>
    </div>
  );
}
