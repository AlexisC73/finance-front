import { BillsIconOutline } from "@/assets/icons/icons";
import SectionTitle from "@/components/ui/section-title/section-title";
import React from "react";

const BILLS: { title: string; quantity: string; total: string }[] = [
  { title: "Paid Bills", quantity: "2", total: "$320" },
  { title: "Total Upcoming", quantity: "6", total: "$1,230.00" },
  { title: "Due Soon", quantity: "2", total: "$40" },
];

export default function RecurringBillsPage() {
  return (
    <div className="flex flex-col gap-y-8 pb-14">
      <SectionTitle>Recurring Bills</SectionTitle>
      <div id="bills-content" className="xl:grid xl:cols-3">
        <div
          id="bills-summary-container"
          className="flex flex-col md:grid md:cols-2 gap-y-6 md:gap-x-6 xl:flex"
        >
          <div
            id="total-bills"
            className="bg-grey-900 text-white flex gap-x-5 items-center px-5 py-6 rounded-3 md:items-start md:flex-col md:p-6 md:pt-9.5 md:gap-y-8"
          >
            <BillsIconOutline className="text-10" />
            <div className="flex flex-col gap-y-2.75">
              <p className="text-preset-4">Total Bills</p>
              <p className="text-preset-1">$384.98</p>
            </div>
          </div>
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
        </div>
        <div id="bills-transactions"></div>
      </div>
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
