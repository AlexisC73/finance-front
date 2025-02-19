import React, { useState } from "react";
import { FilterIcon, SearchIcon, SortIcon } from "@/assets/icons/icons";
import PageSelector from "./page-selector/page-selector";
import TransactionItem from "./transaction-item/transaction-item";
import { TRANSACTIONS } from "@/helpers/data";
import { useSearchParams } from "react-router-dom";
import NextPreviousPageButton from "./page-selector/next-previous-page-button/prev-next-page-button";

export default function TransactionsView({
  maxDisplayedTransaction = 12,
}: {
  maxDisplayedTransaction?: number;
}) {
  const maxPage = Math.ceil(TRANSACTIONS.length / maxDisplayedTransaction);
  const [searchParams] = useSearchParams();
  const pageNumber = Number(searchParams.get("page")) || 1;
  const page = pageNumber > maxPage ? maxPage : pageNumber < 1 ? 1 : pageNumber;

  const [currentPage, setCurrentPage] = useState(page);

  const updatePage = (page: number) => {
    if (page < 1 || page > maxPage) return;
    setCurrentPage(page);
  };

  const handlePrevOrNext = (type: "next" | "prev") => {
    updatePage(type === "next" ? currentPage + 1 : currentPage - 1);
  };

  const displayedTransaction = TRANSACTIONS.slice(
    maxDisplayedTransaction * (currentPage - 1),
    maxDisplayedTransaction * currentPage,
  );

  return (
    <div className="flex flex-col gap-6 w-full bg-white py-6 px-5 rounded-3">
      <div
        id="search-filters"
        className="flex items-center justify-between gap-x-6"
      >
        <div className="flex flex-1 px-5 gap-x-4 border border-beige-500 hover:border-grey-500 active:border-beige-500 rounded-2">
          <input
            type="text"
            id="search"
            placeholder="Search transaction"
            className="w-full py-3 outline-none placeholder-grey-500 text-preset-4"
          />
          <button className="text-5">
            <SearchIcon />
          </button>
        </div>
        <div className="flex gap-x-6 text-5">
          <SortIcon />
          <FilterIcon />
        </div>
      </div>
      <ul className="flex flex-col gap-y-4">
        <li className="hidden md:grid md:cols-3 gap-x-8 text-preset-5 text-grey-500 md:py-5.25 xl:py-3 xl:px-4 border-b border-b-grey-100">
          <div className="md:col-span-2 flex justify-between">
            <p>Recipient / Sender</p>
            <p className="md:w-20 xl:w-30">Category</p>
          </div>
          <div className="flex justify-between">
            <p className="md:w-20 xl:w-30">Transaction Date</p>
            <p>Amount</p>
          </div>
        </li>
        {displayedTransaction.map((tx, index) => (
          <React.Fragment key={tx.id}>
            <TransactionItem
              key={tx.id}
              amount={tx.amount}
              category={tx.category}
              date={tx.date}
              gain={tx.gain}
              imageUrl={tx.imageUrl}
              sender={tx.sender}
            />
            {index !== TRANSACTIONS.length - 1 && (
              <div id="separator" className="h-px w-full bg-grey-100"></div>
            )}
          </React.Fragment>
        ))}
      </ul>
      <div
        id="page-list"
        className="flex gap-x-2 pt-6 md:justify-between mx-auto md:mx-none"
      >
        <NextPreviousPageButton
          action={() => handlePrevOrNext("prev")}
          type="previous"
          disabled={currentPage === 1}
        />
        <PageSelector
          currentPage={currentPage}
          lastPageNumber={maxPage}
          totalPage={2}
          updatePage={(page: number) => setCurrentPage(page)}
        />
        <NextPreviousPageButton
          action={() => handlePrevOrNext("next")}
          type="next"
          disabled={currentPage === maxPage}
        />
      </div>
    </div>
  );
}
