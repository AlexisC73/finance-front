import SectionTitle from "@/components/ui/section-title/section-title";
import SpendingSummaryWidget from "@/components/ui/widget/spending-summary/spending-summary";

export default function BudgetsPage() {
  return (
    <div className="flex flex-col gap-y-8 pb-14">
      <SectionTitle>Budgets</SectionTitle>
      <SpendingSummaryWidget />
    </div>
  );
}
