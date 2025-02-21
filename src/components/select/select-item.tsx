export default function SelectItem({
  children,
  active = false,
  updateFilter,
}: {
  children: string;
  active?: boolean;
  updateFilter: () => void;
}) {
  return (
    <li
      className={`whitespace-nowrap ${active ? "text-preset-4-bold" : "text-preset-4"}`}
    >
      <button onClick={updateFilter} className="w-full text-left">
        {children}
      </button>
    </li>
  );
}
