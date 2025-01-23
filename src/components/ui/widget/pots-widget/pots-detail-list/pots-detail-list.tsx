import PotsDetailItem from "./pots-detail-item/pots-detail-item";

export default function PotsDetailList() {
  return (
    <div className="grid grid-cols-2 gap-4">
      <PotsDetailItem color="green" amount="$159" title="Savings" />
      <PotsDetailItem color="blue" amount="$40" title="Gift" />
      <PotsDetailItem color="grey" amount="$110" title="Concert Ticket" />
      <PotsDetailItem color="yellow" amount="$10" title="New Laptop" />
    </div>
  );
}
