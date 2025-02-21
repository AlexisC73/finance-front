import { ArrowIcon } from "@/assets/icons/icons";
import { ReactNode } from "react";

export default function SelectButton({
  children,
  action,
}: {
  children: ReactNode;
  action?: () => void;
}) {
  return (
    <button
      onClick={action}
      className="flex gap-x-4 text-preset-4 items-center border border-beige-500 flex-1 px-5 py-3 justify-between rounded-2"
    >
      {children} <ArrowIcon className="rotate-90" />
    </button>
  );
}
