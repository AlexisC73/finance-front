import { Link } from "react-router-dom";

export default function SidebarItem({
  active = false,
  Icon,
  href,
  name,
}: {
  active?: boolean;
  Icon: React.FC<{ className?: string }>;
  href?: string;
  name: string;
}) {
  return (
    <Link
      to={href || "#"}
      className={`text-grey-900 border-b-4 pt-2 pb-3 w-full rounded-t-2 xl:border-b-none xl:border-l-4 xl:rounded-l-none xl:rounded-r-3 xl:py-4 xl:px-8 ${active ? "bg-beige-100 border-green" : "border-transparent"}`}
    >
      <div className="flex flex-col items-center gap-y-1 xl:flex-row xl:items-center xl:gap-x-4">
        <Icon className={`text-6 ${active ? "text-green" : "text-grey-300"}`} />
        <p
          className={`font-bold text-3 xl:text-4 line-height-150% hidden md:inline-block xl:mt-.6 ${active ? "text-grey-900" : "text-grey-300"}`}
        >
          {name}
        </p>
      </div>
    </Link>
  );
}
