import { WidgetHeader } from "../widget-header/widget-header";
import BudgetsItem from "./budgets-item/budgets-item";
import BudgetCircle from "../budget-circle/budget-circle";

const BUDGETS = [
  {
    name: "Entertainment",
    goal: "50",
    current: "10",
    color: "#277C78",
    colorName: "green",
  },
  {
    name: "Bills",
    goal: "750",
    current: "208",
    color: "#3F82B2",
    colorName: "blue",
  },
  {
    name: "Dining Out",
    goal: "75",
    current: "70",
    color: "#F2CDAC",
    colorName: "yellow",
  },
  {
    name: "Personal Care",
    goal: "100",
    current: "50",
    color: "#626070",
    colorName: "grey",
  },
];

export default function BudgetsWidget() {
  return (
    <div className="bg-white px-5 py-6 rounded-3 flex flex-col gap-y-5 md:p-8">
      <WidgetHeader title="Budgets" href="/budgets" linkName="See Details" />
      <div className="flex flex-col flex-1 gap-y-4 md:flex-row md:justify-center items-center md:gap-x-4">
        <BudgetCircle budgets={BUDGETS} />
        <div className="grid cols-2 w-full md:w-auto gap-4 md:flex md:flex-col">
          {BUDGETS.map((budget) => (
            <BudgetsItem
              amount={budget.goal}
              title={budget.name}
              color={budget.colorName}
              key={budget.name}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
