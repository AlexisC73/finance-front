export default function SummaryItem({
  title,
  value,
  color = "white",
}: {
  title: string;
  value: string;
  color?: string;
}) {
  return (
    <li
      className={`flex flex-col flex-1 p-4 md:p-6 gap-y-3 rounded-3 ${color === "black" ? "bg-grey-900 text-white" : "bg-white text-grey-900"}`}
    >
      <span
        className={`text-3.5 line-height-150% ${color === "black" ? "text-white" : "text-grey-500"}`}
      >
        {title}
      </span>
      <p className="text-8 font-bold line-height-120%">{value}</p>
    </li>
  );
}
