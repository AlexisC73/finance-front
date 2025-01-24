import { BUDGETS } from "@/helpers/data";
import { colorClass } from "@/theme/colors";

export default function SpendingSummaryItem({
  budget,
}: {
  budget: (typeof BUDGETS)[0];
}) {
  const backgroundColor = colorClass(budget.color, "bg");

  return (
    <li className="flex items-center gap-x-4">
      <div className={`w-1 h-5.25 rounded-full ${backgroundColor}`}></div>
      <p className="text-3.5 line-height-150% text-grey-500 flex-1">
        {budget.name}
      </p>
      <p className="text-4 font-bold line-height-150% flex items-center gap-x-2">
        ${budget.current}{" "}
        <span className="text-3 font-normal text-grey-500">
          of ${budget.goal}
        </span>
      </p>
    </li>
  );
}
