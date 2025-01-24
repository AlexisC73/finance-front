import { WidgetHeader } from "../widget-header/widget-header";
import BudgetsItem from "./budgets-item/budgets-item";
import BudgetCircle from "../budget-circle/budget-circle";
import { BUDGETS } from "@/helpers/data";

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
