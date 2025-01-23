import { ArrowIcon } from "@/assets/icons/icons";
import { Link } from "react-router-dom";

export function WidgetHeader({
  title,
  href,
  linkName,
}: {
  title: string;
  href: string;
  linkName: string;
}) {
  return (
    <div className="flex justify-between w-full">
      <h2 className="text-5 font-bold line-height-120%">{title}</h2>
      <Link
        to={href}
        className="flex items-center gap-x-3 text-3.5 line-height-150% text-grey-500"
      >
        {linkName}{" "}
        <span className="text-3">
          <ArrowIcon />
        </span>
      </Link>
    </div>
  );
}
