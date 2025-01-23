import { WidgetHeader } from "../widget-header/widget-header";
import BudgetsItem from "./budgets-item/budgets-item";
import BudgetCircle from "../budget-circle/budget-circle";
import { COLORS } from "@/theme/colors";

const BUDGETS: {
  name: string;
  goal: string;
  current: string;
  color: COLORS;
}[] = [
  {
    name: "Entertainment",
    goal: "50",
    current: "10",
    color: COLORS.GREEN,
  },
  {
    name: "Bills",
    goal: "750",
    current: "208",
    color: COLORS.CYAN,
  },
  {
    name: "Dining Out",
    goal: "75",
    current: "70",
    color: COLORS.YELLOW,
  },
  {
    name: "Personal Care",
    goal: "100",
    current: "50",
    color: COLORS.NAVY,
  },
];

export default function BudgetsWidget() {
  return (
    <div className="bg-white px-5 py-6 rounded-3 flex flex-col gap-y-5 md:p-8">
      <WidgetHeader title="Budgets" href="/budgets" linkName="See Details" />
      <div className="flex flex-col flex-1 gap-y-4 md:flex-row md:justify-between items-center md:gap-x-4">
        <div className="flex flex-1 h-60 w-60 items-center justify-center">
          <BudgetCircle budgets={BUDGETS} />
        </div>
        <div className="grid cols-2 w-full md:w-auto gap-4 md:flex md:flex-col">
          {BUDGETS.map((budget) => (
            <BudgetsItem
              amount={budget.goal}
              title={budget.name}
              color={budget.color}
              key={budget.name}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
