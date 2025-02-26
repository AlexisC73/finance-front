import { colorClass, COLORS } from "@/theme/colors";

export default function RecurringBillsItem({
  category,
  amount,
  color,
}: {
  category: string;
  amount: string;
  color: COLORS;
}) {
  const borderColor = colorClass(color, "border");
  return (
    <li
      className={`flex justify-between py-5 px-4 bg-beige-100 rounded-2 border-l-4 ${borderColor}`}
    >
      <p className="text-3.5 line-height-150% text-grey-500">{category}</p>
      <p className="font-bold text-grey-900 text-3.5 line-height-150%">
        ${amount}
      </p>
    </li>
  );
}
