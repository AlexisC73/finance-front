import SectionTitle from "@/components/ui/section-title/section-title";

export default function RecurringBillsPage() {
  return (
    <div className="flex flex-col gap-y-8 pb-14">
      <SectionTitle>Recurring Bills</SectionTitle>
      <div className="grid gap-6 xl:cols-2"></div>
    </div>
  );
}
