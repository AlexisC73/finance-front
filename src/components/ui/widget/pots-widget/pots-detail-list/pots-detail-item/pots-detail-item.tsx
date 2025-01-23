export default function PotsDetailItem({
  color = "grey",
  title,
  amount,
}: {
  color?: string;
  title: string;
  amount: string;
}) {
  const borderColor =
    color === "green"
      ? "bg-green"
      : color === "blue"
        ? "bg-cyan"
        : color === "yellow"
          ? "bg-yellow"
          : "bg-navy";
  return (
    <div className="flex w-full gap-x-4">
      <div className={`w-1 h-full rounded-full ${borderColor}`}></div>
      <div className="flex flex-col gap-y-1">
        <p className="text-3 line-height-150% text-grey-500">{title}</p>
        <p className="text-3.5 line-height-150% text-grey-900 font-bold">
          {amount}
        </p>
      </div>
    </div>
  );
}
