import Button from "@/components/button/button";
import BudgetCard from "@/components/ui/budget-card/budget-card";
import SectionTitle from "@/components/ui/section-title/section-title";
import SpendingSummaryWidget from "@/components/ui/widget/spending-summary/spending-summary";
import { BUDGETS_TRANSACTIONS } from "@/helpers/data";

export default function BudgetsPage() {
  return (
    <div className="flex flex-col gap-y-8 pb-14">
      <div className="flex items-center justify-between">
        <SectionTitle>Budgets</SectionTitle>
        <Button>+ Add New Budget</Button>
      </div>
      <div className="flex flex-col xl:flex xl:flex-row xl:gap-x-6 gap-y-6">
        <div className="xl:w-107">
          <SpendingSummaryWidget />
        </div>
        <ul className="flex-1 flex flex-col gap-y-6">
          {BUDGETS_TRANSACTIONS.map((budget) => (
            <BudgetCard
              color={budget.color}
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
