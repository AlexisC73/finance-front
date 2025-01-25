import SectionTitle from "@/components/ui/section-title/section-title";
import TransactionsView from "@/components/ui/transaction-view/transactions-view";

export default function TransactionsPage() {
  return (
    <div className="flex flex-col gap-y-8 pb-14">
      <SectionTitle>Transactions</SectionTitle>
      <TransactionsView maxDisplayedTransaction={2} />
    </div>
  );
}
