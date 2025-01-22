import { Link } from "react-router-dom";

export default function SidebarItem({
  active = false,
  Icon,
  href,
  name,
  sidebarOpen,
}: {
  active?: boolean;
  Icon: React.FC<{ className?: string }>;
  href?: string;
  name: string;
  sidebarOpen: boolean;
}) {
  return (
    <Link
      to={href || "#"}
      className={`text-grey-900 border-b-4 pt-2 pb-3 w-full rounded-t-2 xl:border-b-none  xl:border-l-4 xl:rounded-l-none xl:rounded-r-3 xl:py-4 ${active ? "bg-beige-100 border-green" : "border-transparent"} ${sidebarOpen ? "xl:px-8" : "xl:flex xl:justify-end xl:pr-6"}`}
    >
      <div
        className={`flex flex-col items-center gap-y-1 xl:flex-row xl:items-center xl:gap-x-4 xl:h-6 overflow-hidden ${active ? "" : "text-grey-300 hover:text-white"}`}
      >
        <Icon
          className={`text-6 min-h-6 min-w-6 ${active ? "text-green" : ""}`}
        />
        <p
          className={`font-bold text-3 xl:text-4 line-height-150% hidden md:inline-block flex-1 ${active ? "text-grey-900" : ""} ${sidebarOpen ? "xl:block" : "xl:hidden"}`}
        >
          {name}
        </p>
      </div>
    </Link>
  );
}
