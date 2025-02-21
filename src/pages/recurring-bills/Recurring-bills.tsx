import SearchBar from "@/components/form/search-bar/search-bar";
import SectionTitle from "@/components/ui/section-title/section-title";
import SortDropdown from "@/components/ui/sort-dropdown/sort-dropdown";
import { RECURRING_TRANSACTIONS, SORT_OPTIONS } from "@/helpers/data";
import React, { useState } from "react";
import RecurringBillsSummary from "./widgets/summary";
import TotalBills from "./widgets/total-bills";
import { CheckIcon, ErrorIcon } from "@/assets/icons/icons";

export default function RecurringBillsPage() {
  const [currentSort, setCurrentSort] = useState(SORT_OPTIONS[0]);

  return (
    <div className="flex flex-col gap-y-8 pb-14">
      <SectionTitle>Recurring Bills</SectionTitle>
      <div
        id="bills-content"
        className="flex flex-col xl:grid xl:cols-3 gap-y-6 xl:gap-x-6 xl:items-start"
      >
        <div
          id="bills-summary-container"
          className="flex flex-col md:grid md:cols-2 gap-y-6 md:gap-x-6 xl:flex"
        >
          <TotalBills />
          <RecurringBillsSummary />
        </div>
        <div
          id="bills-transactions"
          className="bg-white flex flex-col py-6 px-5 rounded-3 xl:col-span-2 gap-y-6"
        >
          <div
            id="recurring-bills-transactions-header"
            className="flex items-center gap-x-6 justify-between"
          >
            <SearchBar />
            <div id="filter" className="relative">
              <SortDropdown
                currentSort={currentSort}
                sortOptions={SORT_OPTIONS}
                updateSort={(sort) => setCurrentSort(sort)}
              />
            </div>
          </div>
          <ul
            id="recurring-transactions-list"
            className="flex flex-col gap-y-5"
          >
            {RECURRING_TRANSACTIONS.map((tx, index) => (
              <React.Fragment key={tx.id}>
                <RecurringTransactionItem
                  amount={tx.amount}
                  to={tx.to}
                  error={tx.error}
                  imageUrl={tx.imageUrl}
                  date={tx.date}
                />
                {index < RECURRING_TRANSACTIONS.length - 1 && (
                  <div id="separator" className="h-px bg-grey-100 w-full" />
                )}
              </React.Fragment>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

function RecurringTransactionItem({
  to,
  amount,
  imageUrl,
  error,
  date,
}: {
  to: string;
  amount: string;
  imageUrl: string;
  error: boolean;
  date: string;
}) {
  return (
    <li className="flex flex-col gap-y-2">
      <div id="destination" className="flex items-center gap-x-4">
        <img
          src={imageUrl}
          className="w-8 h-8 object-cover rounded-full"
          alt="destination"
        />
        <p className="text-preset-4-bold">{to}</p>
      </div>
      <div id="data" className="flex justify-between">
        <p
          className={`flex gap-x-2 items-center text-preset-5 ${error ? "text-red" : "text-green"} `}
        >
          {date} {error ? <ErrorIcon /> : <CheckIcon />}
        </p>
        <p
          className={`text-preset-4-bold ${error ? "text-red" : "text-grey-900"}`}
        >
          {amount}
        </p>
      </div>
    </li>
  );
}
