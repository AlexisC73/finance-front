import SectionTitle from "@/components/ui/section-title/section-title";

export default function TransactionsPage() {
  return (
    <div className="flex flex-col gap-y-8 pb-14">
      <SectionTitle>Transactions</SectionTitle>
      <div className="grid gap-6 xl:cols-2"></div>
    </div>
  );
}
