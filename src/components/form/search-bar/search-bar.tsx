import { SearchIcon } from "@/assets/icons/icons";

export default function SearchBar() {
  return (
    <div className="flex flex-1 px-5 gap-x-4 border border-beige-500 hover:border-grey-500 active:border-beige-500 rounded-2 md:max-w-80">
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
  );
}
