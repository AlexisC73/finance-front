import { ArrowIcon, DotsMenuIcon } from "@/assets/icons/icons";
import { Link } from "react-router-dom";
import BudgetTransaction from "./budget-transaction/budget-transaction";
import React from "react";

interface BudgetCardProps {
  name: string;
  maxAmount: string;
  spentAmount: string;
  transactions: {
    id: string;
    to: string;
    amount: string;
    date: string;
    imageUrl: string;
  }[];
}

export default function BudgetCard({
  name,
  maxAmount,
  spentAmount,
  transactions,
}: BudgetCardProps) {
  return (
    <li className="bg-white rounded-3 py-6 px-5 flex flex-col gap-y-5 md:p-8">
      <div id="budget-header" className="flex items-center gap-x-4">
        <div id="circle" className="w-4 h-4 bg-green rounded-full"></div>
        <h3 className="flex-1 font-bold line-height-120% text-5">{name}</h3>
        <button id="context-menu">
          <DotsMenuIcon />
        </button>
      </div>
      <div id="budget-info" className="flex flex-col gap-y-4">
        <p className="text-3.5 line-height-150% text-grey-500">
          Maximum of ${Number(maxAmount).toFixed(2)}
        </p>
        <div id="slider" className="h-8 w-full bg-beige-100 rounded-1 p-1">
          <div
            id="slider-percentage"
            className="h-6 rounded-1 bg-green max-w-100%"
            style={{
              width: (Number(spentAmount) / Number(maxAmount)) * 100 + "%",
            }}
          ></div>
        </div>
        <div id="budget-spent-free" className="flex">
          <div id="spent" className="flex flex-1 gap-x-4">
            <div className="bg-green flex-1 max-w-1 rounded-2"></div>
            <div className="flex flex-col gap-y-1">
              <p className="text-3 line-height-150% text-grey-500">Spent</p>
              <p className="text-3.5 line-height-150% font-bold">
                ${Number(spentAmount).toFixed(2)}
              </p>
            </div>
          </div>
          <div id="spent" className="flex flex-1 gap-x-4">
            <div className="bg-beige-100 flex-1 max-w-1 rounded-2"></div>
            <div className="flex flex-col gap-y-1">
              <p className="text-3 line-height-150% text-grey-500">
                <span className="md:hidden block">Free</span>
                <span className="hidden md:block">Remaining</span>
              </p>
              <p className="text-3.5 line-height-150% font-bold">
                ${(Number(maxAmount) - Number(spentAmount)).toFixed(2)}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div
        id="budget-transactions"
        className="bg-beige-100 rounded-3 p-4 flex flex-col gap-y-5"
      >
        <div id="latest-spending" className="flex items-center justify-between">
          <p className="text-4 font-bold line-height-150%">Latest Spending</p>
          <Link
            to={"/transactions"}
            className="flex items-center gap-x-3 text-grey-500 text-3 line-height-150%"
          >
            See All <ArrowIcon />
          </Link>
        </div>
        <ul className="flex flex-col gap-y-3">
          {transactions.map((transaction, index) => (
            <React.Fragment key={transaction.id}>
              <BudgetTransaction
                amount={transaction.amount}
                date={transaction.date}
                to={transaction.to}
                imageUrl={transaction.imageUrl}
              />
              {index !== transactions.length - 1 && (
                <div
                  id="separator"
                  className="h-px w-full bg-grey-500 rounded-full opacity-15"
                ></div>
              )}
            </React.Fragment>
          ))}
        </ul>
      </div>
    </li>
  );
}
