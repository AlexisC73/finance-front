import { WidgetHeader } from "../widget-header/widget-header";
import RecurringBillsItem from "./recurring-bills-item/recurring-bills-item";

const CATEGORY_BILLS = [
  {
    category: "Paid Bills",
    amount: "190",
    color: "green",
  },
  {
    category: "Total Upcoming",
    amount: "194.98",
    color: "yellow",
  },
  {
    category: "Due Soon",
    amount: "59.98",
    color: "blue",
  },
];

export default function RecurringBillsWidget() {
  return (
    <div className="bg-white px-5 py-6 rounded-3 flex flex-col gap-y-8">
      <WidgetHeader
        href="/recurring-bills"
        linkName="See Details"
        title="Recurring Bills"
      />
      <ul className="flex flex-col w-full gap-y-3">
        {CATEGORY_BILLS.map((rb) => (
          <RecurringBillsItem
            key={rb.category}
            amount={rb.amount}
            category={rb.category}
            color={rb.color}
          />
        ))}
      </ul>
    </div>
  );
}
