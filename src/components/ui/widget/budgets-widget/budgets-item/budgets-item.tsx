import { COLORS } from "@/theme/colors";

export default function BudgetsItem({
  title,
  amount,
  color,
}: {
  title: string;
  amount: string;
  color: COLORS;
}) {
  const borderColor =
    color === COLORS.GREEN
      ? "bg-green"
      : color === COLORS.CYAN
        ? "bg-cyan"
        : color === COLORS.YELLOW
          ? "bg-yellow"
          : "bg-navy";
  return (
    <div className="flex w-full gap-x-4">
      <div className={`flex-1 w-1 max-w-1 rounded-full ${borderColor}`}></div>
      <div className="flex flex-col gap-y-1">
        <p className="text-3 line-height-150% text-grey-500">{title}</p>
        <p className="text-3.5 line-height-150% text-grey-900 font-bold">
          {amount}
        </p>
      </div>
    </div>
  );
}
