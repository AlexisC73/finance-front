import BudgetCard from "@/components/ui/budget-card/budget-card";
import SectionTitle from "@/components/ui/section-title/section-title";
import SpendingSummaryWidget from "@/components/ui/widget/spending-summary/spending-summary";
import { BUDGETS_TRANSACTIONS } from "@/helpers/data";

export default function BudgetsPage() {
  return (
    <div className="flex flex-col gap-y-8 pb-14">
      <div className="flex items-center justify-between">
        <SectionTitle>Budgets</SectionTitle>
        <button className="p-4 text-white bg-grey-900 font-bold text-3.5 line-height-150% rounded-2">
          + Add New Budget
        </button>
      </div>
      <div className="flex flex-col xl:flex xl:flex-row xl:gap-x-6 gap-y-6">
        <div className="xl:w-107">
          <SpendingSummaryWidget />
        </div>
        <ul className="flex-1 flex flex-col gap-y-6">
          {BUDGETS_TRANSACTIONS.map((budget) => (
            <BudgetCard
              key={budget.name}
              name={budget.name}
              maxAmount={budget.maxSpent}
              spentAmount={budget.spent}
              transactions={budget.transactions}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}
