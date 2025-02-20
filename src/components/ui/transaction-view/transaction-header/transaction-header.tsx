import TransactionFilters from "./transaction-filters/transaction-filters";
import SearchBar from "@/components/form/search-bar/search-bar";

export default function TransactionHeader() {
  return (
    <div
      id="search-filters"
      className="flex items-center justify-between gap-x-6"
    >
      <SearchBar />
      <TransactionFilters />
    </div>
  );
}
