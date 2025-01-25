import React from "react";
import {
  ArrowIcon,
  FilterIcon,
  SearchIcon,
  SortIcon,
} from "@/assets/icons/icons";
import SectionTitle from "@/components/ui/section-title/section-title";

const TRANSACTIONS: {
  id: number;
  date: string;
  category: string;
  sender: string;
  imageUrl: string;
  amount: string;
  gain: boolean;
}[] = [
  {
    id: 1,
    imageUrl: "https://placehold.co/500",
    date: "29 Aug 2024",
    category: "Personal Care",
    sender: "Bravo Zen Spa",
    amount: "25",
    gain: false,
  },
  {
    id: 2,
    imageUrl: "https://placehold.co/500",
    date: "29 Aug 2024",
    category: "Personal Care",
    sender: "Bravo Zen Spa",
    amount: "25",
    gain: true,
  },
  {
    id: 3,
    imageUrl: "https://placehold.co/500",
    date: "29 Aug 2024",
    category: "Personal Care",
    sender: "Bravo Zen Spa",
    amount: "25",
    gain: false,
  },
];

export default function TransactionsPage() {
  return (
    <div className="flex flex-col gap-y-8 pb-14">
      <SectionTitle>Transactions</SectionTitle>
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
          {TRANSACTIONS.map((tx, index) => (
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
          <NextPreviousPageButton type="previous" />
          <div className="flex gap-x-2">
            <PageButton active={false} text={"1"} />
            <PageButton active={true} text={"2"} />
            <PageButton active={false} text={"..."} />
            <PageButton active={false} text={"5"} />
          </div>
          <NextPreviousPageButton type="next" />
        </div>
      </div>
    </div>
  );
}

function NextPreviousPageButton({ type }: { type: "next" | "previous" }) {
  return (
    <button className="p-4 py-3 h-10 border border-beige-500 rounded-2 text-grey-500 flex items-center md:gap-x-4">
      {type === "next" ? (
        <span className="hidden md:inline-block">Next</span>
      ) : (
        <></>
      )}
      <ArrowIcon className={type === "next" ? "" : "rotate-180"} />
      {type === "previous" ? (
        <span className="hidden md:inline-block">Prev</span>
      ) : (
        <></>
      )}
    </button>
  );
}

function PageButton({ text, active }: { text: string; active: boolean }) {
  return (
    <button
      className={`w-10 h-10 rounded-2 border border-beige-500 text-preset-4 flex items-center justify-center ${active ? "bg-grey-900 text-white" : "border-beige-500"}`}
    >
      {text}
    </button>
  );
}

function TransactionItem({
  date,
  amount,
  category,
  gain,
  imageUrl,
  sender,
}: {
  date: string;
  category: string;
  sender: string;
  imageUrl: string;
  amount: string;
  gain: boolean;
}) {
  return (
    <li className="flex items-center gap-x-3">
      <img
        src={imageUrl}
        alt=""
        className="w-8 h-8 rounded-full object-cover"
      />
      <div className="flex flex-col gap-y-1 flex-1">
        <p className="text-preset-4-bold">{sender}</p>
        <p className="text-preset-5">{category}</p>
      </div>
      <div className="flex flex-col gap-y-1 items-end">
        <p className={`text-preset-4-bold ${gain ? "text-green" : ""}`}>
          {gain ? "+" : "-"}${Number(amount).toFixed(2)}
        </p>
        <p className="text-preset-5">{date}</p>
      </div>
    </li>
  );
}
