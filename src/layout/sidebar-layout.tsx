import Sidebar from "@/components/ui/sidebar/sidebar";
import { Outlet } from "react-router-dom";

export default function SidebarLayout() {
  return (
    <div className="flex">
      <div>
        <Sidebar />
      </div>
      <main className="flex-1">
        <Outlet />
      </main>
    </div>
  );
}
