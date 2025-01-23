import React from "react";
import { WidgetHeader } from "../widget-header/widget-header";
import TransactionItem from "./transaction-item/transaction-item";

const TRANSACTIONS = [
  {
    id: "1",
    amount: "75.50",
    destination: "Emma Richardson",
    imageUrl: "https://placehold.co/40",
    date: new Date("2024 08 19"),
    gain: true,
  },
  {
    id: "2",
    amount: "75.50",
    destination: "Emma Richardson",
    imageUrl: "https://placehold.co/40",
    date: new Date("2024 08 19"),
    gain: true,
  },
  {
    id: "3",
    amount: "75.50",
    destination: "Emma Richardson",
    imageUrl: "https://placehold.co/40",
    date: new Date("2024 08 19"),
    gain: true,
  },
  {
    id: "4",
    amount: "75.50",
    destination: "Emma Richardson",
    imageUrl: "https://placehold.co/40",
    date: new Date("2024 08 19"),
    gain: true,
  },
];

export default function TransactionWidget() {
  return (
    <div className="bg-white flex flex-col gap-y-8 px-5 py-6 rounded-3">
      <WidgetHeader
        title="Transactions"
        href="/transactions"
        linkName="View All"
      />
      <ul id="transactions-list" className="flex flex-col gap-y-5">
        {TRANSACTIONS.map((tsx, index) => (
          <React.Fragment key={tsx.id}>
            <TransactionItem
              amount={tsx.amount}
              date={tsx.date}
              destination={tsx.destination}
              gain={tsx.gain}
              imageUrl={tsx.imageUrl}
            />
            {index !== TRANSACTIONS.length - 1 && (
              <div className="h-px w-full bg-grey-100"></div>
            )}
          </React.Fragment>
        ))}
      </ul>
    </div>
  );
}
