import { colorClass, COLORS } from "@/theme/colors";

export default function PotsDetailItem({
  color = COLORS.NAVY,
  title,
  amount,
}: {
  color?: COLORS;
  title: string;
  amount: string;
}) {
  const backgroundColor = colorClass(color, "bg");

  return (
    <div className="flex w-full gap-x-4">
      <div className={`w-1 h-full rounded-full ${backgroundColor}`}></div>
      <div className="flex flex-col gap-y-1">
        <p className="text-3 line-height-150% text-grey-500">{title}</p>
        <p className="text-3.5 line-height-150% text-grey-900 font-bold">
          {amount}
        </p>
      </div>
    </div>
  );
}
