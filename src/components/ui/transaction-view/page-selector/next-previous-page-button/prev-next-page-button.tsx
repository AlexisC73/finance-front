import { ArrowIcon } from "@/assets/icons/icons";

export default function NextPreviousPageButton({
  type,
  action,
  disabled = false,
}: {
  type: "next" | "previous";
  action: () => void;
  disabled?: boolean;
}) {
  return (
    <button
      onClick={action}
      disabled={disabled}
      className="p-4 py-3 h-10 border border-beige-500 rounded-2 hover:bg-beige-500 disabled:cursor-not-allowed disabled:bg-white disabled:text-grey-300 hover:text-white text-grey-500 flex items-center md:gap-x-4"
    >
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
