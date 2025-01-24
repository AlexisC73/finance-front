import SectionTitle from "@/components/ui/section-title/section-title";
import Summary from "@/components/ui/summary/summary";
import BudgetsWidget from "@/components/ui/widget/budgets-widget/budgets-widget";
import { PotsWidget } from "@/components/ui/widget/pots-widget/pots-widget";
import RecurringBillsWidget from "@/components/ui/widget/recurring-bills-widget/recurring-bills-widget";
import TransactionWidget from "@/components/ui/widget/transaction-widget/transaction-widget";

export function HomePage() {
  return (
    <div className="flex flex-col gap-y-8 pb-14">
      <SectionTitle>Overview</SectionTitle>
      <Summary />
      <div className="flex flex-col xl:grid xl:cols-3 gap-x-6 gap-y-4">
        <div className="flex flex-col w-full gap-y-4 xl:col-span-2">
          <PotsWidget />
          <TransactionWidget />
        </div>
        <div className="flex flex-col w-full gap-y-4 xl:col-span-1">
          <BudgetsWidget />
          <RecurringBillsWidget />
        </div>
      </div>
    </div>
  );
}
