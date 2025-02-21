import React from "react";

const BILLS: { title: string; quantity: string; total: string }[] = [
  { title: "Paid Bills", quantity: "2", total: "$320" },
  { title: "Total Upcoming", quantity: "6", total: "$1,230.00" },
  { title: "Due Soon", quantity: "2", total: "$40" },
];

export default function RecurringBillsSummary() {
  return (
    <div
      id="bills-summary"
      className="bg-white flex flex-col gap-y-5 p-5 rounded-3"
    >
      <p className="text-preset-3">Summary</p>
      <ul className="flex flex-col gap-y-4">
        {BILLS.map((bill, index) => (
          <React.Fragment key={bill.title}>
            <SummaryItem
              title={bill.title}
              quantity={bill.quantity}
              total={bill.total}
            />
            {index < BILLS.length - 1 && (
              <div
                id="separator"
                className="h-px bg-[#696868] bg-opacity-15 w-full"
              ></div>
            )}
          </React.Fragment>
        ))}
      </ul>
    </div>
  );
}

function SummaryItem({
  title,
  quantity,
  total,
}: {
  title: string;
  quantity: string;
  total: string;
}) {
  return (
    <li className="flex justify-between">
      <p className="text-preset-5 text-grey-500">{title}</p>
      <p className="text-preset-5-bold">
        {quantity}({total})
      </p>
    </li>
  );
}
